"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var taskList_1 = __importDefault(require("../Classes/taskList"));
var task_1 = __importDefault(require("../Classes/task"));
var Actions = /** @class */ (function () {
    function Actions() {
        this.taskList = new taskList_1.default();
    }
    Actions.prototype.getAllTasks = function (res) { res.json(this.taskList); };
    ;
    Actions.prototype.createTask = function (req, res) {
        if (!req.params.name) {
            res.send('No name');
        }
        else {
            var task = new task_1.default(req.params.name);
            this.taskList.push(task);
            res.json(this.taskList);
        }
    };
    Actions.prototype.makeTaskActiveById = function (req, res) {
        if (!req.params.id) {
            res.send('Wrong Data');
        }
        else {
            var task = this.taskList.getTaskById(req.params.id);
            if (task && !task.isActive) {
                task.setActive();
                res.json(this.taskList);
            }
            else {
                res.send('404.');
            }
        }
    };
    Actions.prototype.getTaskById = function (req, res) {
        if (!req.params.id) {
            res.send('Wrong Data');
        }
        else {
            var task = this.taskList.getTaskById(req.params.id);
            task ? res.json(task) : res.send("404.");
        }
    };
    Actions.prototype.closeTaskById = function (req, res) {
        if (!req.params.id) {
            res.send('Wrong Data');
        }
        else {
            var task = this.taskList.getTaskById(req.params.id);
            if (task && !task.isClosed) {
                task.close();
                res.json(this.taskList);
            }
            else {
                res.send('404.');
            }
        }
    };
    Actions.prototype.clearTasks = function (req, res) {
        this.taskList.clear();
        this.taskList.isEmpty() ? res.send('200') : res.send('502');
    };
    Actions.prototype.deleteTaskById = function (req, res) {
        if (!req.params.id) {
            res.send('Wrong Data');
        }
        else {
            this.taskList.deleteById(req.params.id);
            res.json(this.taskList);
        }
    };
    return Actions;
}());
exports.default = Actions;
