const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?',
    validate: input => input !== '' ? true : 'Project title cannot be empty.'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Please add a description of your project:',
    validate: input => input !== '' ? true : 'Description cannot be empty.'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Please add the necessary steps for the installation of your application:',
    validate: input => input !== '' ? true : 'Installation steps cannot be empty.'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please add usage information of your application:',
    validate: input => input !== '' ? true : 'Usage information cannot be empty.'
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Please add contribution guidelines for your application:',
    validate: input => input !== '' ? true : 'Contribution guidelines cannot be empty.'
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Please add the performed tests for your application:',
    validate: input => input !== '' ? true : 'Test information cannot be empty.'
  },
  {
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub username?',
    validate: input => input !== '' ? true : 'GitHub username cannot be empty.'
  },
  {
    type: 'input',
    name: 'Email',
    message: 'What is your email?',
    validate: input => input !== '' ? true : 'Email cannot be empty.'
  },
  {
    type: 'list',
    name: 'License',
    message: 'Choose a license for your project:',
    choices: [
      "MIT License",
      "GNU General Public License (GPL)",
      "Apache License 2.0",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      // Add other licenses as needed
    ],
    validate: choice => choice ? true : 'You must choose a license.'
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(`Error writing file: ${err}`) : console.log('Successfully created README.md!'));
}

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // Use generateMarkdown to create the markdown string
      const readmeContent = generateMarkdown(answers);
      // Write the README.md file with the generated content
      writeToFile('README.md', readmeContent);
    })
    .catch(error => console.error(`Error during initialization: ${error}`));
}

init();
