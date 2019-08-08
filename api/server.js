const express = require("express")
const server = express()

server.get("/", (req, res)=>{res.status(200).json({jargon: provess.env.JOTD})})

module.exports = server;