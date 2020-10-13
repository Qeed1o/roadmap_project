"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./server/app"));
var server = new app_1.default();
console.log('Before server.run() check');
server.run();
console.clear();
console.log('App started on port : ' + server.getPort());
