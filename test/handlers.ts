import {UserLogin, User, UserGet, UserLoginSuccess, UserLoginFailed} from "./messages";

const users = [
    new User(1, 'admin@admin.com', 'admin', 'admin')
];

export async function authorizeUser(model : UserLogin)
{
    let user = await getUserById(new UserGet(null, model.username));
    if (user && user.password == model.password) {
        return new UserLoginSuccess();
    }
    throw new UserLoginFailed('User not found');
}

export async function getUserById(model : UserGet)
{
    return users.find(x => {
        if (model.id && x.id == model.id) {
            return true;
        }
        if (model.username && x.username == model.username) {
            return true;
        }
        throw new Error('User not found');
    })
}