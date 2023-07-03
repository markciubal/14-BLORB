# BLORB (Blog, log, or Read Blogs) 
## Deployment URL
[⚠️ https://blorb-97a19c560081.herokuapp.com/](https://blorb-97a19c560081.herokuapp.com/)

https://github.com/markciubal/14-BLORB/assets/1228604/3ff392c1-669d-4f60-bcc0-d3fdf9fe26c0

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Table of Contents
- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Github](#github)
- [Questions](#questions)
- [License](#license)
- [Credits](#credits)

## Description
BLORB (Blog, log, or Read Blogs) is the Model, View, Controller (MVC) homework was an exercise in using Handlebars as an MVC framework. By using Express with Handlebars, we were able to build out templates for our sites and separate our logic for the application to be organized. I learned quite a lot from this project, particularly with how routes work, and how data can be passed to the views by the controllers, while fetching data using the models.

This application was meant to satisfy the following user story:

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
✅ THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
✅ THEN I am taken to the homepage
WHEN I click on any other links in the navigation
✅ THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
✅ THEN I am prompted to create a username and password
WHEN I click on the sign-up button
✅ THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
✅ THEN I am prompted to enter my username and password
WHEN I am signed in to the site
✅ THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
✅ THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
✅ THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
✅ THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
✅ THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
✅ THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
✅ THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
✅ THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
✅ THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
✅ THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Installation
```bash
npm install
```

## Usage
```bash
Enter .env file credentials.
Set up DB by running "source db/schema.sql" in the terminal.
Seed database by running "node seeds/seed.js" in the terminal.
npm start
```

## Contribution
Want to see something changed? Submit a merge request!

## Tests
```bash
No tests.
```

## Questions
### Have questions for me?
[Email me!](mailto:mark.ciubal@gmail.com)

### Outstanding Questions
N/A

## Github
Github: [markciubal](https://www.github.com/markciubal)

## License

### The Unilicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>

## Credits
Made by: Mark Ciubal
