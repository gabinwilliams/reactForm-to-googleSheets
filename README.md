# react-to-googlesheets

## Description

This small project with built to experiment with using axios to POST to Sheet.best RESTful API and integrate a custom form built with react to input the data into googlesheets.  Now that the simple small form is built and functioning, it will be easy to customize for future use.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)


1. Open up your editor of choice for and clone this repo and run an `npm install`
2. Create a new google sheets document.  Change the shareable link to public and edit allow rights and copy the link.
3. Navigate to `https://sheet.best/` and try for free.  Paste the link where it asks for the URL.
4. Then navigate to details and copy the link sheet.best gives you.  You will need this for the axios POST in your code.
5. Replace the url in the axios POST route with your own URL from sheet.best
6. Run `npm start` in your terminal to launch the app locally.

## Built With

This application uses the following technologies:

- [React](https://reactjs.org/)
- [Semantic-ui](https://react.semantic-ui.com/)
- [SweetAlerts2](https://sweetalert2.github.io/)

(a full list of dependencies can be found in `package.json`)


## Acknowledgement
Thanks to freeCodeCamp for their blog post and giving me a small project to try!


