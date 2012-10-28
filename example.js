#!/usr/bin/env node

var Concentrate = require("./index");

var data = Concentrate().uint8(1).uint8(2).uint32be(555).string("hi there", "utf8").result();

console.log(data);
