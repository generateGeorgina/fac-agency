# fac-agency

Welcome to Agency 20:50! At Agency 20:50, we are pioneers in a groundbreaking
era where artificial intelligence reigns as the dominant species, shaping our
world in the year 2050. Our mission is to bridge the gap between the immense
computational power of AI and the irreplaceable qualities possessed by humans.

# Site Features

## Responsive Layout

We have used media queries to control the responsive layout.

Due to the expectation of us presenting the site on a desktop screen we have
used a desktop first approach.

With media queries set for:

default large screens bigger than 1200px

medium screens smaller than 1200px

small screens less than 600px

and allowed for a minimum screen size of 320px which the size of the smallest
phone width on the market which is currently an iPhone 5.

## Accessibility

Important elements on the page are accessible using the tab key.

Relevant elements are accessible using the tab key and/or screen reader keyboard
shortcuts.

We have used the focus:visble selector to ensure outlines of around the elements
are only visible when using the tab key. We didn't want to make the elements
have a outline when focused by a mouse as we believe it make the design less
appealing.

## Mapped About The Team Elements

We have used an array of json to generate the about the team section.

This is done by using a function to create a html block and mapping the block
according to the number objects and properties in the array.

This means the site can be easily updated by editing the json without editing
any code.

## Local Storage

The stored form data is stored in local storage and retrieved on the thank you
page. The users name is displayed on the screen with a message.

## Node Email Server and Form Submission

github link to server repo:
https://github.com/matt-powelldev2784/fac-agency-nodemailer-server

We have setup a simple Node server using Node, Express and Nodemailer.

This server has one post route. It will send an email to the user email address
typed into form on the page. It uses the name and email from the form to
generate a personalised email informing the user that we will be in contact
shortly.

We are using an async function client side to:

Disable the submit button to prevent multiple submits.

Submit the form data, reset the form, and redirect the user on success in the
try block.

Catch and log the async errors using the catch block.

Re-enable the submit button in the finally block encase of an errors.

# Development Problems and Solutions

## File Structure

To keep the code clean and modular we have separated the files in folders: /img
/js /stylesheets.

We have separated the css into meaningful sections and files, a single css file
will become to big. There is a argument that this will make load times longer
but this is irrelevant as when using frameworks in future all css will be joined
into a file/files for you.

We have used a main.css to control global variables and other css files as
relevant.

We have separated the js files into relevant subfolders and use import syntax to
reference.

## Navigating to relative url

We had issues navigating to a different pages as our index.html URL was:
https://generategeorgina.github.io/fac-agency/index.html.

If we tried to navigate to a different page when developing everything worked
ok. But if we tried to navigate to a different page when deployed the relative
URL or the link would be: https://generategeorgina.github.io/index.html

To get round this we created a navigateToRelativeUrl.js - please see this file
on GitHub. in the /js/helpers folder. This will detect for a local environment
and navigate to a the local route if it finds it. If not if will navigate to the
GitHub pages URL. Please note this is setup to use port 5500 for the local
environment which I believe is the default for live server.

## Slow development speed when using DOM Manipulation Methods

It's very slow to create your own functions which create DOM elements using DOM
Manipulation Methods. I found a createElement function on the web which creates
and appends DOM elements in a much faster fashion. Please see the file on GitHub
in the /js/helper folder.

Obviously it's important to understand about the native DOM Manipulation Method
before you use this.

Once you have this working you can create you own functions which create html
blocks generated by JSON. This means you can easily update your webpage by
updating you JSON without editing any code.
