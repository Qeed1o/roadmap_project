"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var taskList_1 = __importDefault(require("../Classes/taskList"));
var task_1 = __importDefault(require("../Classes/task"));
var Actions = /** @class */ (function () {
    function Actions() {
        this.taskList = new taskList_1.default(); // TODO: move it to global "state"
    }
    Actions.prototype.getTaskList = function () { return this.taskList; };
    ;
    Actions.prototype.newTask = function (name) {
        var task = new task_1.default(name);
        this.taskList.push(task);
        return task;
    };
    Actions.prototype.getTask = function (id) {
        var task = this.taskList.getTaskById(id);
        return task ? task[0] : "404.";
    };
    Actions.prototype.closeTask = function (id) {
        var task = this.taskList.getTaskById(id);
        if (task) {
            task[0].setTimeEnd(new Date());
            return ({
                id: task[0].getId(),
                name: task[0].getName(),
                closed: task[0].isClosed(),
            });
        }
        else {
            return ('404.');
        }
    };
    return Actions;
}());
exports.default = Actions;
