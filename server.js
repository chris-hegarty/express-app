const express = require("express")
const app = express()
// Look for this (below) If it's null ?? use this. (Nullish coalescing operator)
const port = process.env.PORT ?? 8080
//import routing file and call it with app.use:
const userRoutes = require("./routes/user.routes")
//Anything in my userRoutes, start it with "/users":
const logger = require("./middleware/logger")
app.use(logger)
app.use("/users", userRoutes);//Anything in my userRoutes, start it with "/users"
//Use port 8080 so you can use 3000 for the front end (React)
// When the app makes a request to this route (A GET request to slash) handle it this way.
app.get("/", (req, res) => {
    //route handlers tend to be way more than one line, so use brackets.
    return res.send("Hello World!")
});
//pattern for returning users to top level directory.
app.get("*", (req, res) => {
    return res.redirect("/")
})
//middleware - what happens between the request and response, like checking an API key.
//Without app.listen, nothing happens. Params are the port, and what happens when it starts up.
app.listen(port, () => {
    console.log(`The app is listening on Port ${port}`)
})
//console logs appear in the terminal (where the application is running.)
