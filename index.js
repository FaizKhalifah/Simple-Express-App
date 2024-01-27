import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";
import express from 'express';

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

const app = express();

