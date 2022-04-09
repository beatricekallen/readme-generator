// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache_2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "BSD_3--Clause") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "BSD_2--Clause") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if (license === "GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "LGPL_v3") {
    return "https://www.gnu.org/licenses/lgpl-3.0";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "MPL_2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "EPL_1.0") {
    return "https://opensource.org/licenses/EPL-1.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

## Table of Contents
1. [ Installation ](#installation)
2. [ Usage ](#usage)
3. [ License ](#license)
4. [ Contributing ](#contributing)
5. [ Tests ](#tests)
6. [ Questions ](#questions)

  <a name="installation"></a>
  ## Installation
  ${data.installationInstructions}

  <a name="usage"></a>
  ## Usage
  ${data.usage}

  <a name="license"></a>
  ## License
  This project is licensed under the ${
    data.license
  } license. More information can be found at ${renderLicenseLink(
    data.license
  )}.

  <a name="contributing"></a>
  ## Contributing
  ${data.contributions}

  <a name="tests"></a>
  ## Tests
  ${data.testInstructions}

  <a name="questions"></a>
  ## Questions
  This project, as well as my other projects, can be viewed on my GitHub profile, available at https://github.com/${
    data.github
  }. If you have any questions for me, please feel free to email me at ${
    data.email
  }.
`;
}

module.exports = generateMarkdown;
