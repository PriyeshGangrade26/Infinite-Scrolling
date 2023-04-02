# React Infinite Scrolling List App:

This is a simple user list app built using Vite. The app features an authentication system that allows users to log in using a fake username and password. Once logged in, users are directed to a home page that displays a list of user details.
Setup

# To run the app, follow these steps:

    Clone this repository
    Navigate to the client directory
    Run npm install to install the dependencies
    Run npm run dev to start the development server
    Open http://127.0.0.1:5173/ in your browser to view the app

# Authentication

The app uses fake login details, where the username is foo and the password is bar. Users can enter these details to log in to the app. Once logged in, users are directed to the home page.
Home Page

The home page displays a list of users, with each user's photo and name. The list initially loads with a partial list of users, and when the user scrolls to the end of the page, the app shows loading feedback and loads more users after a 3-second delay.

The home page also includes a logout button, which redirects the user to the login page.
API

The app uses the Random User API (https://randomuser.me/api/?results=500) to generate a list of users.
Dependencies

# The app uses the following open source libraries:

    Vite - for building the user interface
    React Router - for handling routing
    Axios - for making HTTP requests to the API

# Conclusion

That's it! With this app, you can log in, view a list of users, and log out. The app is built using Vite and uses the Random User API to generate the user list. The app also implements an infinite scroll feature to load more contacts on demand.
