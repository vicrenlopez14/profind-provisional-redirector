const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
        const url = req.url;

        if (url === "/") {
            // do a 200 response
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>Hello World!<h1>");
            res.end();
        } else if (url === "/landing-page/en" || url === "/landing-page/es") {
            // do a 302 redirect
            res.writeHead(302, {
                location: "https://github.com/vicrenlopez14/profind-landing-page",
            });
            res.end();
        } else {
            // do a 404 redirect
            res.writeHead(404);
            res.write("<h1>Sorry nothing found!<h1>");
            res.end();
        }
    })
;

server.listen(port, function () {
    console.log("Server started at port 3000")
})


