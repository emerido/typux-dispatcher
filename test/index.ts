import {UserLogin, UserGet} from "./messages";
import {Dispatcher} from "../lib/dispatcher";
import {authorizeUser, getUserById} from "./handlers";


let dispatcher = new Dispatcher()
    .register(UserLogin, authorizeUser)
    .register(UserGet, getUserById)
;


dispatcher.dispatch(new UserLogin('alex', '123'))
    .then(x => {
        console.log('Promise', x);
    })
    .catch(error => {
        console.log('Error', error);
    });