
# Indian Agriculture Data Analysis

This project performs data analytics on the Indian Agriculture dataset provided by the National Data and Analytics Platform, NITI Aayog. The results are displayed in tables using Mantine v7.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)


## Installation

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/avikuuuu/manufac-assign.git
   ```
2. Navigate to the project directory:
   ```bash
   cd manufac-assign
   ```
3. Install dependencies using Yarn:
   ```bash
   yarn install
   ```
4. Start the project:
   ```bash
   yarn start
   ```
5. The application will automatically open in your default web browser, displaying the required tables with the analyzed data.

## Usage

This project aggregates the Indian Agriculture dataset to display two tables:
1. **Yearly Crop Production**: Displays the crop with the maximum and minimum production for each year from 1950 to 2020.
2. **Crop Averages**: Displays the average yield and average cultivation area for each crop between 1950 and 2020.

## Project Structure

- `src/` : Source files for the project
  - `App.tsx` : Main application component
  - `index.tsx` : Entry point for the React application
- `public/` : Static files

## Features

- **Data Analysis**: Aggregates and processes the Indian Agriculture dataset.
- **Tables**: Displays data in a clear and concise table format using Mantine v7.
- **Responsive Design**: Ensures the tables are viewable on various screen sizes.
