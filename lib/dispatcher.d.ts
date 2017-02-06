import { Constructable } from 'typux';
export declare class Dispatcher {
    private _handlers;
    register<T>(message: Constructable<T>, handler: (message: T) => any): this;
    dispatch(message: any): Promise<any>;
}
