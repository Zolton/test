const express = require("express")
const server = express()

server.get("/", (req, res)=>{res.status(200).json("API is running, hello from server.js")})

module.exports = server;