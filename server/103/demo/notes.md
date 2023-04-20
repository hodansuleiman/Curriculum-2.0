# Server 103

## Express request object properties cache values sent from client to server

### live on request object

`req.body`

- An object(the body object) that contains key/value pairs sent from client to server
- The server must implement middleware to parse JSON
- The request must be POST

`req.cookies`

- Contains the string that defines a cookies stored in the browser
- The server must implement middleware to parse cookies

`req.params`

- An object of key/value pairs created by param routes and their values

`req.query`

- An object of key/value pairs created by query parameters supplied by URL
- ? at url
