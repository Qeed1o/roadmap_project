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
        console.log(req.body);
        if (!req.body.name) {
            res.send('No name');
        }
        else {
            var task = new task_1.default(req.body.name, { desc: req.body.desc });
            this.taskList.push(task);
            res.json(this.taskList);
        }
    };
    Actions.prototype.updateTask = function (req, res) {
        if (!req.body.id) {
            res.json('No id provided');
        }
        else {
            var task = this.taskList.getTaskById(req.body.id);
            if (!task) {
                res.send('No task found');
                return;
            }
            var newTask = new task_1.default(task.name, {
                desc: req.body.desc !== undefined ? req.body.desc : task.desc,
                isClosed: req.body.isClosed !== undefined && !task.isClosed ? req.body.isClosed : task.isClosed,
                isActive: req.body.isActive !== undefined ? req.body.isActive : task.isActive,
                timeEnd: task.timeEnd,
                id: req.body.id,
                timeStart: task.timeStart
            });
            this.taskList.setTaskById(newTask);
            res.json(this.taskList);
        }
    };
    Actions.prototype.makeTaskActiveById = function (req, res) {
        if (!req.params.id) {
            res.send('Wrong Data');
        }
        else {
            var task = this.taskList.getTaskById(req.params.id);
            if (task) {
                task.toggleActive();
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
