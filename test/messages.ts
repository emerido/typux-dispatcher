export class User
{

    public id : number;

    public email : string;

    public username : string;

    public password : string;

    constructor(id: number, email: string, username: string, password: string) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
    }

}

export class UserGet
{

    public id? : number;

    public username? : string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }

}

export class UserLogin
{

    public username : string;

    public password : string;

    constructor(username : string, password : string)
    {
        this.username = username;
        this.password = password;
    }

}

export class UserLoginFailed
{

    public reason : string;

    constructor(reason: string) {
        this.reason = reason;
    }

}

export class UserLoginSuccess
{


}