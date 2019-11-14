<a name="top"></a>
# Dad Jokes v1.0.0

Dad Jokes API for PTCT Build Week, November 2019, deployed at https://lambda-dad-jokes.herokuapp.com

- [Auth](#auth)
	- [Logs in a registered user](#logs-in-a-registered-user)
	- [Registers a New User](#registers-a-new-user)
	


# <a name='auth'></a> Auth

## <a name='logs-in-a-registered-user'></a> Logs in a registered user
[Back to top](#top)

<p>Log an user in, receive token on successful login</p>

	POST /api/auth/login





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  username | String | <p>The User's username</p>|
|  password | String | <p>The User's password</p>|

### Param Examples

(json)
Sample-Request:

```
{
    "username": "johndoe",
    "password": "123456"
}
```

### Success Response

Success-Response:

```
{
    "message": "Welcome back johndoe!",
    "token": "Generated Token"
}
```

### 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  message | json | <p>Welcome Message</p>|

### Error Response

Error-Response:

```
{
    "username": "Required"
}
```
Error-Response:

```
{
    "code": 404,
    "error": "User Not Found"
}
```
Error-Response:

```
{
    "code": 401,
    "error": "Invalid Credentials"
}
```
## <a name='registers-a-new-user'></a> Registers a New User
[Back to top](#top)

<p>Registers a New User to the Database</p>

	POST /api/auth/register





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  email | String | <p>The User's Email</p>|
|  username | String | <p>The User's Username</p>|
|  password | String | <p>The User's Password</p>|

### Param Examples

(json)
Sample-Request:

```
{
    "email": "john@doe.com",
    "username": "johndoe",
    "password": "123456"
}
```

### Success Response

Success-Response:

```
{
    "message": "Welcome to Dad Jokes johndoe"
}
```

### 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  message | json | <p>Welcome Message</p>|

### Error Response

Error-Response:

```
{
    "username": "Required"
}
```
Error-Response:

```
{
    "code": 400,
    "error": "Username is already taken"
}
```
Error-Response:

```
{
    "code": 400,
    "error": "Email is already taken"
}
```
