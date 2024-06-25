import "./App.css";
import { Table } from "@mantine/core";
import "@mantine/core/styles.css";
import data from "./data.json";

const getCropData = (data) => {
  const yearData = {};

  data.forEach((item) => {
    const year = item.Year.split(",")[1].trim(); 
    if (!yearData[year]) {
      yearData[year] = [];
    }
    yearData[year].push({
      cropName: item["Crop Name"],
      cropProduction: item["Crop Production (UOM:t(Tonnes))"],
    });
  });

  const result = Object.keys(yearData).map((year) => {
    const crops = yearData[year];
    const maxProductionCrop = crops.reduce(
      (max, crop) => (crop.cropProduction > max.cropProduction ? crop : max),
      crops[0]
    );
    const minProductionCrop = crops.reduce(
      (min, crop) => (crop.cropProduction < min.cropProduction ? crop : min),
      crops[0]
    );

    return {
      year,
      maxProductionCrop: maxProductionCrop.cropName,
      minProductionCrop: minProductionCrop.cropName,
    };
  });

  return result;
};

const getFieldData = (data) => {
  const cropData = {};

  data.forEach((item) => {
    const cropName = item["Crop Name"];
    if (!cropData[cropName]) {
      cropData[cropName] = {
        totalYield: 0,
        totalArea: 0,
        count: 0,
      };
    }
    const yieldValue = item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
    const areaValue = item["Area Under Cultivation (UOM:Ha(Hectares))"];

   cropData[cropName].totalYield += yieldValue ? yieldValue : 0;
    cropData[cropName].totalArea += areaValue ? areaValue : 0;
    cropData[cropName].count += 1;
  });

  const result = Object.keys(cropData).map((cropName) => {
    const data = cropData[cropName];
    return {
      cropName,
      avgYield: (data.totalYield / data.count).toFixed(3),
      avgArea: (data.totalArea / data.count).toFixed(3),
    };
  });

  return result;
};

function App() {
  const cropTable = getCropData(data);
  const fieldTable = getFieldData(data);

  const cropRows = cropTable.map((element, key) => (
    <Table.Tr key={element.year}>
      <Table.Td>{element.year}</Table.Td>
      <Table.Td>{element.maxProductionCrop}</Table.Td>
      <Table.Td>{element.minProductionCrop}</Table.Td>
    </Table.Tr>
  ));

  const fieldRows = fieldTable.map((element, key) => (
    <Table.Tr key={key}>
      <Table.Td>{element.cropName}</Table.Td>
      <Table.Td>{element.avgYield}</Table.Td>
      <Table.Td>{element.avgArea}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="App">
      <div className="cropData">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Year</Table.Th>
              <Table.Th>Crop with Maximum Production in that Year</Table.Th>
              <Table.Th>Crop with Minimum Production in that Year</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{cropRows}</Table.Tbody>
        </Table>
      </div>

      <div className="fieldData">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Crop</Table.Th>
              <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
              <Table.Th>
                Average Cultivation Area of the Crop between 1950-2020
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{fieldRows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
