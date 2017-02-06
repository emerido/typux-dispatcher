import { Constructable } from 'typux';
/**
 * Simple messages dispatcher
 */
export declare class Dispatcher {
    private _handlers;
    /**
     * Register handler for specific message type
     *
     * @param {Function} message
     * @param {Function} handler
     * @returns {Dispatcher}
     */
    register<T>(message: Constructable<T>, handler: (message: T) => any): this;
    /**
     * Dispatch message
     *
     * @param {Object} message
     * @returns {Promise<*>}
     */
    dispatch(message: any): Promise<any>;
}
