const express = require("express")
const app = express()
const port = process.env.PORT ?? 8080
// Look for this. If it's null ?? use this. (Nullish coalescing operator)

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
