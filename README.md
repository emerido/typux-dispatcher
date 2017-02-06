# typux-dispatcher

## Message handlers
Message handlers is an async function
```ts
export async function authorizeUser(model : UserLogin)
{
    let user = await userRepository.findByLogin(model.username);
    if (user && password.valid(user.password, model.password)) {
        return new UserLoginSuccess([token]);
    }
    throw new UserLoginFailed('User or password incorrect');
}
```

## Dispatcher

```ts
const dispatcher = new Dispatcher()
    .register(UserLogin, authorizeUser)
;
```

## Dispatch

```ts
dispatcher.dispatch(new UserLogin('admin', 'admin'))
    .then(x => x /* typeof UserLoginSuccess */)
    .catch(e => e /* typeof UserLoginFailed */)
    ;
```