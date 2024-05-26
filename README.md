# Social Media API

## Description

This challenge was to build an API for a social media web application. It works with Express.js API and Mongoose to interact with a Mongo database. The walkthrough video can be found [here](https://drive.google.com/file/d/1gL4E0uOULJbVOU1zMwr1mf0EZiByNN-r/view?usp=sharing).

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Table of Contents

* [Description](#description)

* [User Story](#user-story)

* [Acceptance Criteria](#acceptance-criteria)

* [Installation](#installation)

* [Usage](#usage)

* [Tests](#tests)

* [Contributing](#contributing)

* [Screenshot](#screenshot)

* [Questions](#questions)

## Installation

💾

`npm init`

`npm i express mongoose moment`

***the moment library is used for date formatting***

## Usage

💻

This application is used to GET, create (POST), update (PUT), and DELETE data for each route (users, thoughts, friends, and reactions)

## Tests

N/A

## Contributing

* [**Vanessa Bou**](https://github.com/rvbouu)

## Screenshot

### Route Functionality
![gif of application functionality](./assets/social-media.gif)

The full video showing the application functionality can be found [here](https://drive.google.com/file/d/1gL4E0uOULJbVOU1zMwr1mf0EZiByNN-r/view?usp=sharing).

## Questions

  [GitHub](https://github.com/rvbouu)

  For additional questions or concerns, please email me at rvbouu@gmail.com