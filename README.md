# Movie Recommendations API
This project allows the user to enter in a movie to recommend and its genre. Users can vote on movies that were recommended by clicking the like button and movie recommendations can be deleted.

**Link to project:** https://movie-recommendations-api.onrender.com/

https://user-images.githubusercontent.com/102431119/193353016-a4313b49-e7b4-4d33-b96b-07907c826d30.mp4

## How It's Made

**Tech used:** Embedded JavaScript (EJS), CSS, Bootstrap, Node, Express, MongoDB, and deployed with Render.

# Required Dependencies

  - `npm install`
  - Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - Add a .gitignore file with `.env` and `node_modules`

---

# Run

`npm start`

---

Movie Recommendations API was a project I made to practice CRUD functions, such as creating a new movie entry, reading or refreshing the currently stored data whenever a change is made, updating the number of likes, and deleting a movie recommendation from the database.

I utilized server-side JavaScript to connect the MongoDB database with the different CRUD functions and Embedded JavaScript Templating (EJS) on the client-side to render the HTML and CSS framework that the user sees.

## Optimizations
I would add user accounts and additional features to develop the project into a comprehensive movie database where the user could look up more information about a specific movie and where they could watch it.

## Lessons Learned
I learned how to utilize CRUD functions to interact with a database based on the user's request. I also implemented an auto refresh with a get request that redirects back the homepage or root route after a post request has been made. The put and delete requests update the database and return updates to the terminal in a console log to demonstrate that the request was successful.

## Credits
Photo of Movie Projector by <a href="https://unsplash.com/@alexlitvin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alex Litvin</a> on Unsplash.com

## Other Projects

**Coming Soon**
