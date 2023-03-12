# OneTeam-Generator

## Description
This project is used for generating an HTML file that holds professional teams with their employer's information which is displayed as a cards. The acceptable user input allows you to identify the employee's position, id number, email, as well as the office number for managers, the GitHub username linked to his/her profile for engineers, and the attending school for interns.  
This application does those things by using node.js, along with inquirer and jest, to generate an HTML based on the informated taken in by the user. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Technologies](#technologies)
- [License](#license)
- [Contribution](#how-to-contribute)
- [Tests](#tests)
- [Contact Information](#contact-information)

## Installation

This application does have dependencies: inquirer and jest.  
1. Make sure you have Node.js installed on your computer. Next, we will install the above mentioned packages using npm (node package manager). 
2. First, using the CLI, run npm init to install a package.json and personalize your application. 
3. To install inquirer, run the command: npm i inquirer@8.2.4 -- this applicaiton does require that specific version of inquirer. 
4. To install jest, use the command: npm i jest. 
5. If you want to use a gitignore to keep unnecessary data out of your GitHub repo, make sure your gitignore includes: node_modules; package-lock.json; .vscode; .DS_Store/; .history  
6. Next, use the FullDemo.gif to run the application and generate your HTML file. -- The main takeaway here is to ensure you cd into the Develop folder using the command: cd Develop. If you try to run tests or the application through the root folder, it won't run properly. 
7. To run tests --> command: npm run test
8. To fire the application and genrate your team's HTML file, command: node index.js
  
Following these steps, you should be able to run the app smoothly and successfully!

## Usage
N/A

## Demo
https://user-images.githubusercontent.com/38874213/224536878-b1ea8313-eb74-4bec-a26c-57c7189dfd5f.mp4

## Technologies
JavaScript, Node.js, Inquirer, Jest, HTML, CSS

## License
N/A

## How to Contribute

Please email me if you'd like to contribute so we can discuss!

## Tests

Tests for each employee class are provided in the __tests__ directory and can be run all at once using npm test.

## Contact Information
If you liked this project and want to see more, feel free to check out my 
other repos [here](https://github.com/tlequernaque).
  
For any questions or inquiries, you can reach me at T.lequernaque@yahoo.com for further information.
