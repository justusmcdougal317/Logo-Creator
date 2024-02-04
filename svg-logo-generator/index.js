import { writeFile } from 'fs/promises';
import inquirer from 'inquirer';
import chalk from 'chalk';
import generateSvg from './svgTemplate.js';

// Function to generate SVG based on user input
async function generateLogo() {
  try {
    // Prompt user for input
    const userInput = await inquirer.prompt([
      {
        type: 'list',
        name: 'color',
        message: 'Select a color:',
        choices: ['red', 'green', 'blue'],
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo:',
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'Enter the file name (without extension):',
      },
    ]);

    // Generate SVG based on user input
    const svgContent = generateSvg(userInput);

    // Save SVG to a file
    const fileName = userInput.fileName + '.svg';
    await writeFile(fileName, svgContent);

    console.log(chalk.green(`Logo generated successfully! Saved as ${fileName}`));
  } catch (error) {
    console.error(chalk.red('Error:', error.message));
  }
}

// Run the application
generateLogo();