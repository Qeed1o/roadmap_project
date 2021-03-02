"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.list = [];
    }
    TaskList.prototype.push = function (task) {
        this.list.push(task);
    };
    TaskList.prototype.getTaskById = function (id) {
        var task = this.list.find(function (task) { return task.id === id; });
        return task;
    };
    TaskList.prototype.getTaskIndexById = function (id) {
        var index = this.list.findIndex(function (task) { return task.id === id; });
        return index;
    };
    TaskList.prototype.setTaskById = function (task) {
        var index = this.getTaskIndexById(task.id);
        this.list[index] = task;
    };
    TaskList.prototype.clear = function () {
        this.list = [];
    };
    TaskList.prototype.isEmpty = function () {
        return this.list.length === 0;
    };
    TaskList.prototype.deleteById = function (id) {
        var index = this.list.findIndex(function (task) { return task.id === id; });
        if (index === -1)
            return;
        this.list.splice(index, 1);
    };
    return TaskList;
}());
exports.default = TaskList;
