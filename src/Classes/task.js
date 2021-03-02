"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(name, task) {
        this.name = name;
        this.desc = "";
        this.timeStart = new Date();
        this.timeEnd = null;
        this.id = Math.random().toString(26).slice(2);
        this.isClosed = false;
        this.isActive = false;
        this.id = (task === null || task === void 0 ? void 0 : task.id) || Math.random().toString(26).slice(2);
        this.isActive = (task === null || task === void 0 ? void 0 : task.isActive) || false;
        this.isClosed = (task === null || task === void 0 ? void 0 : task.isClosed) || false;
        this.desc = (task === null || task === void 0 ? void 0 : task.desc) || '';
        this.timeEnd = (task === null || task === void 0 ? void 0 : task.timeEnd) || null,
            this.timeStart = (task === null || task === void 0 ? void 0 : task.timeStart) || new Date();
    }
    Task.prototype.close = function () {
        this.timeEnd = new Date();
        this.isClosed = true;
    };
    Task.prototype.toggleActive = function () {
        this.isActive = !this.isActive;
    };
    return Task;
}());
exports.default = Task;
