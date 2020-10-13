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
        return this.list.filter(function (task) { return task.getId() === id; });
    };
    return TaskList;
}());
exports.default = TaskList;
