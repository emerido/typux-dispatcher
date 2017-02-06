import {UserLogin, UserGet} from "./messages";
import {Dispatcher} from "../lib/dispatcher";
import {authorizeUser, getUserById} from "./handlers";


let dispatcher = new Dispatcher()
    .register(UserLogin, authorizeUser)
    .register(UserGet, getUserById)
;

function handle(message : any) {
    dispatcher.dispatch(message)
        .then(x => {
            console.log('Result', x);
        })
        .catch(error => {
            console.log('Error', error);
        });
}

handle(new UserLogin('admin', 'admin'));
handle(new UserGet(1, null));
handle(new UserGet(null, 'admin2'));
handle(new UserGet(null, 'admin'));