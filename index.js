// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { rejects } = require("assert");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project's title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project. (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installationInstructions",
    message:
      "Please enter the installation instructions for your project. (Required)",
    validate: (installationInstructionsInput) => {
      if (installationInstructionsInput) {
        return true;
      } else {
        console.log("Please enter your project's installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage information for your project. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter your project's usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributions",
    message:
      "Please enter the contribution guidelines for your project. (Required)",
    validate: (contributionsInput) => {
      if (contributionsInput) {
        return true;
      } else {
        console.log("Please enter your project's contribution guidelines!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "testInstructions",
    message: "Please enter the test instructions for your project. (Required)",
    validate: (testInstructionsInput) => {
      if (testInstructionsInput) {
        return true;
      } else {
        console.log("Please enter your project's test instructions!");
        return false;
      }
    },
  },

  {
    type: "list",
    name: "license",
    message:
      "What license would you like to publish your project under? (Required)",
    choices: [
      "Apache License 2.0",
      "BSD 3-Clause 'New' or 'Revised' license",
      "BSD 2-Clause 'Simplified' or 'FreeBSD' license",
      "GNU General Public License (GPL)",
      "GNU Library or 'Lesser' General Public License (LGPL)",
      "MIT license",
      "Mozilla Public License 2.0",
      "Common Development and Distribution License",
      "Eclipse Public License version 2.0",
    ],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select a license!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username. (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address. (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  if (err) {
    rejects(err);
    return;
  }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
