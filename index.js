import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";
import express from 'express';
import path from "path";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

const currentDirectory = process.cwd();

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('./Files/main.html', { root: currentDirectory });
})

app.get('/about',(req,res)=>{
    res.sendFile('./Files/about.html',{ root: currentDirectory});
})

app.get('/contact',(req,res)=>{
    res.sendFile('./Files/contact.html',{ root: currentDirectory });
})

app.use((req,res)=>{
    res.status(400).sendFile('./Files/404.html',{ root: currentDirectory })
})