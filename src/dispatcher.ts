import {Constructable, metadata} from 'typux';

/**
 * Simple messages dispatcher
 */
export class Dispatcher
{

    private _handlers : {[id : string] : (message : any) => any} = {};

    /**
     * Register handler for specific message type
     *
     * @param {Function} message
     * @param {Function} handler
     * @returns {Dispatcher}
     */
    public register<T>(message : Constructable<T>, handler : (message : T) => any) : this
    {
        let info = metadata.getClassInfo(message);

        if (this._handlers.hasOwnProperty(info.hash)) {
            throw new Error(`Handler for message ${info.name} is already registered`);
        }
        this._handlers[info.hash] = handler;

        return this;
    }

    /**
     * Dispatch message
     *
     * @param {Object} message
     * @returns {Promise<*>}
     */
    public dispatch(message : any) : Promise<any>
    {
        let info = metadata.getClassInfo(message);
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