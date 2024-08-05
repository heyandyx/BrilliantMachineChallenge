requirements: 
Make sure you have Node.js installed. You can verify this by running:
node -v

Ensure you have the necessary dependencies installed. In your project root directory, run:
npm install

// Commands:
To run the tests in Headless Mode, use the following command:
npx cypress run 

To run the test in Interactive Mode
npx cypress open 
// I recommend using the "Electron" browser because it is showing better performance 

//observation: 
The website used for automating UI elements has some kind of vulnerability, where it is not possible to run more than one "it" in succession
because the site returns a 401 error on subsequent requests, which is an error not related to the code. Due to this, I grouped all the assertions within the same suite.
