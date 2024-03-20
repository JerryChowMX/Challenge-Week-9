// Function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    "MIT License": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "GNU General Public License (GPL)": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "Apache License 2.0": "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "BSD 2-Clause 'Simplified' License": "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)",
    "BSD 3-Clause 'New' or 'Revised' License": "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
    // Add more licenses as needed
  };
  return badges[license] || '';
}

// Function to return the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    "MIT License": "(https://opensource.org/licenses/MIT)",
    "GNU General Public License (GPL)": "(https://www.gnu.org/licenses/gpl-3.0)",
    "Apache License 2.0": "(https://opensource.org/licenses/Apache-2.0)",
    "BSD 2-Clause 'Simplified' License": "(https://opensource.org/licenses/BSD-2-Clause)",
    "BSD 3-Clause 'New' or 'Revised' License": "(https://opensource.org/licenses/BSD-3-Clause)",
    // Add more licenses as needed
  };
  return links[license] || '';
}

// Function to return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") return '';
  return `
## License
This project is licensed under the ${license}. For more information, see the link below:
${renderLicenseLink(license)}
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

${renderLicenseBadge(data.License)}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`bash
${data.Installation}
\`\`\`

## Usage
${data.Usage}

${renderLicenseSection(data.License)}

## Contributing
${data.Contributing}

## Tests
\`\`\`bash
${data.Tests}
\`\`\`

## Questions
If you have any questions or need further assistance, feel free to reach out.

- GitHub: [${data.Username}](https://github.com/${data.Username})
- Email: [${data.Email}](mailto:${data.Email})
`;
}

module.exports = generateMarkdown;
