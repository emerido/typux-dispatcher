"use strict";
const typux_1 = require('typux');
class Dispatcher {
    constructor() {
        this._handlers = {};
    }
    register(message, handler) {
        let info = typux_1.metadata.getClassInfo(message);
        if (this._handlers.hasOwnProperty(info.hash)) {
            throw new Error(`Handler for message ${info.name} is already registered`);
        }
        this._handlers[info.hash] = handler;
        return this;
    }
    dispatch(message) {
        let info = typux_1.metadata.getClassInfo(message);
        if (false === this._handlers.hasOwnProperty(info.hash)) {
            throw new Error(`Handler for ${info.name} not registered`);
        }
        let data = this._handlers[info.hash].call(null, message);
        if (data && data instanceof Promise) {
            return data;
        }
        return Promise.resolve(data);
    }
}
exports.Dispatcher = Dispatcher;
