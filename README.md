# BMI Calculator

A simple BMI Calculator built with React.js that supports Metric and US units, BMI history, and localStorage.

## Overview

This project allows users to calculate their Body Mass Index (BMI) by entering their weight and height. It supports Metric and US unit systems and displays the BMI category along with its BMI range.

The project also stores BMI calculation history in localStorage, allowing users to view, delete, or clear previous results.

## Features

- Calculate BMI
- Metric unit support (kg / cm)
- US unit support (lbs / inches)
- BMI category detection
- BMI range display
- Input validation
- Clear form functionality
- BMI calculation history
- Save history using localStorage
- Delete individual history records
- Clear complete history
- Responsive design
- Component-based structure

## Tech Stack

- React.js
- JavaScript
- CSS
- Vite
- LocalStorage

## Components

- `UnitSwitch` - Handles Metric and US unit selection
- `BmiForm` - Handles weight, height, and form inputs
- `BmiResult` - Displays the calculated BMI result
- `BmiHistory` - Displays and manages BMI calculation history

## BMI Categories

| BMI | Category |
|---|---|
| Below 18.5 | Underweight |
| 18.5 - 24.9 | Normal weight |
| 25 - 29.9 | Overweight |
| 30+ | Obese |

## Run Locally

```bash
npm install
npm run dev