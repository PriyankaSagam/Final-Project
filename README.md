# Let's Begin Building mern-infrastructure
1. Generate the React app
2. Build the React app's production code
3. Code the skeleton Express app
4. Define the "catch all" route in the Express backend
5. Test the Express server
Let's do this!

# 1. Generate the React App
A new folder will be created named mern-infrastructure.

Creating a new React app takes some time because create-react-appalso installs the Node modules - and there's a ton of them!

# 2. Building the React App's Production Code
npm run build





# 1. The process of adding a feature to a MERN-Stack app
The process of adding a feature to a MERN-Stack SPA is similar to what we followed when adding a feature to our traditional web apps in Units 2 & 3 in that we typically:

1. Start with the UI/frontend... Render a component with an event prop designed to handle interaction from the user, e.g., onClick.
2. Stub up and assign an event handler function to the event prop.
3. In the event handler function, write code to accomplish the task at hand which could include any of the following:

=> Perform program logic, calculations, etc.
=> Update local state.
I=> nvoke service methods to make AJAX requests to the server.
=> Invoke a method passed to it as a prop so that the component up the hierarchy can respond to the event by updating state, etc.
Etc.

Then, in the case that an AJAX request was made...
4. Define a route on the server that maps the AJAX request to a controller action.
5. Code the controller action to perform any necessary CRUD and send a JSON response back to the client.
6. Back in the event handler of the component, if necessary, update state using the JSON received from the server and optionally programmatically change routes.
   Basically, adding functionality starts with code on the client, then the server, and coming back full-circle to the client.
# Update userInitialization
As a visitor (AAV), I want to sign up as a user so that I can place new orders and view my previous orders.
To implement the functionality of signing-up, we'll begin client-side as described above by defining a component that will contain a form with an onSubmitevent prop...# MERN-Authentication
