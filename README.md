# Scrub app

All data that flows in or out of our API gets saved to a log. This is helpful when debugging, but unfortunately
means that all of our users' personal information gets stored in plain text. In order to respect our users' privacy,
we need to clean this up.

### To Start

run the following command:
npm install

### To Run

run the following command:
npm run start

A browser window will open with two textareas.  The first will automatically be populated with a test JSON object,
the second will immediately show the results.  Edit the input to see the results update automatically.
