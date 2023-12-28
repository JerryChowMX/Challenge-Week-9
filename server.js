const express = require('express');
const app = express();

// Middleware that parses JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint that handles README generation
app.post('/generate-readme', (req, res) => {
  const { title, description, installation, usage, contribution, tests, license, githubUsername, email } = req.body;

  // Generates README content
  const readmeContent = `
# ${title}

![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

## Contributing
${contribution}

## Tests
\`\`\`
${tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact [${githubUsername}](https://github.com/${githubUsername}) directly at ${email}.

## License
This project is licensed under the ${license} license. 

---

© 2023 GitHub, Inc. All rights reserved.
`;

  // Setting headers to make the browser download the file
  res.setHeader('Content-disposition', 'attachment; filename=README.md');
  res.setHeader('Content-Type', 'text/plain');
  res.send(readmeContent);
});

// To start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
