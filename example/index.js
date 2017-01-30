'use strict'

// Require uan
const uan = require('../')

// Require dependencies
const fs = require('fs')
const path = require('path')

// uan text
const text = fs.readFileSync(path.join(__dirname, 'array.uan')).toString()

// Parse text
const array = uan.parse(text)

// Log array
console.log(array)
