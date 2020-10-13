"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = __importDefault(require("../Actions/actions"));
var Router = /** @class */ (function () {
    function Router(app) {
        this.actions = new actions_1.default();
        this.app = app;
    }
    Router.prototype.route = function () {
        var _this = this;
        // Returns json of all tasks by GET /
        this.app.get('/', function (req, res) {
            res.json(_this.actions.getTaskList());
        });
        /**
         * Create a new task by name
         *
         * POST data: (string)name
         * Response: (object)task
         */
        this.app.post('/task/create/:name', function (req, res) {
            var task = _this.actions.newTask(req.params.name);
            var response = {
                id: task.getId(),
                name: task.getName(),
                closed: task.isClosed(),
            };
            res.json(response);
        });
        /**
         * Get task by id
         *
         * Response: (object)task
         */
        this.app.get('/task/:id', function (req, res) {
            res.json(_this.actions.getTask(req.params.id));
        });
        /**
         * Close task by id
         *
         * POST data: (int)id
         * Response: (object)task
         */
        this.app.post('/task/:id', function (req, res) {
            res.json(_this.actions.closeTask(req.params.id));
        });
    };
    return Router;
}());
exports.default = Router;
