/**
 *   ---This are the step to install the firebase setup ----
 * 
 * 1.visit console.firebase.google.com
 * 2.create project (skip google analytics)
 * 3.Register app (create config)
 * 4.Install firebase: npm install firebase
 * 5.add config file to your project
 * 6.Danger:: Do not publish or make firebase config to public by pushing to github
 * 7.Visit : Go to Docs > Build ? Authentication > Web > Get Started 
 * 8.Export app from the firebase.config.js file export default app
 * 9.Login.jsx: import getAuth from Firebase/auth  
 * 10.create const auth = getAuth
 * 11.import googleAuthProvider and create a new provider
 * 12.use signInWithPopUp and pass auth and provider
 * 13.Activate sign-in methods (google facebook github etc)
 * 
 */
