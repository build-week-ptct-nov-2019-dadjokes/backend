<a name="top"></a>
# Dad Jokes v1.0.0

Dad Jokes API for PTCT Build Week, November 2019, deployed at https://lambda-dad-jokes.herokuapp.com

- [Auth](#auth)
	- [Logs in a registered user](#logs-in-a-registered-user)
	- [Registers a New User](#registers-a-new-user)
	
- [Jokes](#jokes)
	- [Deletes the Joke with the Provided Id](#deletes-the-joke-with-the-provided-id)
	- [Get All Public and Private Jokes in the Database](#get-all-public-and-private-jokes-in-the-database)
	- [Get All Public Jokes in the Database](#get-all-public-jokes-in-the-database)
	- [Add Joke To the Database](#add-joke-to-the-database)
	- [Update the Joke with the Provided Id](#update-the-joke-with-the-provided-id)
	
- [User](#user)
	- [Deletes the User](#deletes-the-user)
	- [Updates the User with provided information](#updates-the-user-with-provided-information)
	


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
# <a name='jokes'></a> Jokes

## <a name='deletes-the-joke-with-the-provided-id'></a> Deletes the Joke with the Provided Id
[Back to top](#top)

<p>Delete the Joke with the Provided Id</p>

	DELETE /api/jokes/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Integer | <p>The Id of the joke, passed in the URL</p>|


### Success Response

Success-Response:

```
7
```

### 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  joke | json | <p>The Updated Joke</p>|

### Error Response

Error-Response:

```
{
  "message": "YOU SHALL NOT PASS"
}
```
Error-Response:

```
{
  "message": "Your DAD Joke was not found"
}
```
Error-Response:

```
{
  "message": "You may only DELETE your own jokes"
}
```
## <a name='get-all-public-and-private-jokes-in-the-database'></a> Get All Public and Private Jokes in the Database
[Back to top](#top)

<p>Get All Public and Private Jokes in the Database</p>

	GET /api/jokes





### Success Response

Success-Response:

```
[
  {
     "id": 1,
     "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.",
     "punchline": "11 years old and he still doesn't know my name is Brian",
     "created_by": 1,
     "privateJoke": false,
     "created_at": "2019-11-18T00:51:52.515Z",
     "updated_at": "2019-11-18T00:51:52.515Z"
   },
  {
     "id": 2,
     "joke": "My wife is really mad at the fact that I have no sense of direction.",
     "punchline": "So I packed up my stuff and right.",
     "created_by": 2,
     "privateJoke": false,
     "created_at": "2019-11-18T00:51:52.515Z",
     "updated_at": "2019-11-18T00:51:52.515Z"
   },
  {
     "id": 3,
     "joke": "How do you make holy water?",
     "punchline": "You boil the hell out of it.",
     "created_by": 1,
     "privateJoke": false,
     "created_at": "2019-11-18T00:51:52.515Z",
     "updated_at": "2019-11-18T00:51:52.515Z"
   },
]
```

### 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  AllJokes | json[] | <p>All the Public and Private Jokes</p>|

### Error Response

Error-Response:

```
{
  "message": "YOU SHALL NOT PASS"
}
```
## <a name='get-all-public-jokes-in-the-database'></a> Get All Public Jokes in the Database
[Back to top](#top)

<p>Get All Public Jokes in the Database</p>

	GET /api/jokes/public





### Success Response

Success-Response:

```
[
  {
     "id": 1,
     "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.",
     "punchline": "11 years old and he still doesn't know my name is Brian",
     "created_by": 1,
     "privateJoke": false,
     "created_at": "2019-11-18T00:51:52.515Z",
     "updated_at": "2019-11-18T00:51:52.515Z"
   },
  {
     "id": 2,
     "joke": "My wife is really mad at the fact that I have no sense of direction.",
     "punchline": "So I packed up my stuff and right.",
     "created_by": 2,
     "privateJoke": false,
     "created_at": "2019-11-18T00:51:52.515Z",
     "updated_at": "2019-11-18T00:51:52.515Z"
   },
  {
     "id": 3,
     "joke": "How do you make holy water?",
     "punchline": "You boil the hell out of it.",
     "created_by": 1,
     "privateJoke": false,
     "created_at": "2019-11-18T00:51:52.515Z",
     "updated_at": "2019-11-18T00:51:52.515Z"
   },
]
```

### 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  PublicJokes | json[] | <p>All the Public Jokes</p>|

## <a name='add-joke-to-the-database'></a> Add Joke To the Database
[Back to top](#top)

<p>Add Joke To the Database</p>

	POST /api/jokes





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  joke | String | <p>The joke.</p>|
|  punchline | String | <p>The punchline of the Joke</p>|
|  privateJoke | Boolean | <p>Is the Joke Private?</p>|

### Param Examples

(json)
Sample-Request:

```
{
	"joke": "Why did the developer cross the road?",
	"punchline": "The code was cleaner on the other side.",
	"privateJoke": true
}
```

### Success Response

Success-Response:

```
{
  "id": 7,
  "joke": "Why did the developer cross the road?",
  "punchline": "The code was cleaner on the other side.",
  "created_by": 5,
  "privateJoke": true,
  "created_at": "2019-11-18T01:58:29.354Z",
  "updated_at": "2019-11-18T01:58:29.354Z"
}
```

### 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  Joke | json | <p>The newly created Joke</p>|

### Error Response

Error-Response:

```
{
  "message": "YOU SHALL NOT PASS"
}
```
## <a name='update-the-joke-with-the-provided-id'></a> Update the Joke with the Provided Id
[Back to top](#top)

<p>Update the Joke with the Provided Id</p>

	PUT /api/jokes/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  id | Integer | <p>The Id of the joke, passed in the URL</p>|
|  joke | String | <p>The joke.</p>|
|  punchline | String | <p>The punchline of the Joke</p>|
|  privateJoke | Boolean | <p>Is the Joke Private?</p>|

### Param Examples

(json)
Sample-Request:

```
{
	"privateJoke": false
}
```

### Success Response

Success-Response:

```
{
  "id": 7,
  "joke": "Why did the developer cross the road?",
  "punchline": "The code was cleaner on the other side.",
  "created_by": 5,
  "privateJoke": false,
  "created_at": "2019-11-18T01:58:29.354Z",
  "updated_at": "2019-11-18T01:58:29.354Z"
}
```

### 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  joke | json | <p>The Updated Joke</p>|

### Error Response

Error-Response:

```
{
  "message": "YOU SHALL NOT PASS"
}
```
Error-Response:

```
{
  "message": "Your DAD Joke was not found"
}
```
Error-Response:

```
{
  "message": "You may only EDIT your own jokes"
}
```
# <a name='user'></a> User

## <a name='deletes-the-user'></a> Deletes the User
[Back to top](#top)

<p>Delete's the User based on the provided token</p>

	DELETE /api/user





### Success Response

Success-Response:

```
6
```

### 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  Return | json | <p>the ID of the User Deleted</p>|

### Error Response

Error-Response:

```
{
  "message": "YOU SHALL NOT PASS"
}
```
## <a name='updates-the-user-with-provided-information'></a> Updates the User with provided information
[Back to top](#top)

<p>Updates the User with provided information</p>

	PUT /api/user





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
    "username": "johndoe2",
}
```

### Success Response

Success-Response:

```
{
   "id": 6,
   "email": "john@doe.com",
   "username": "johndoe2",
   "created_at": "2019-11-18T20:52:38.944Z",
   "updated_at": "2019-11-18T20:52:38.944Z"
}
```

### 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
|  user | json | <p>The Updated User</p>|

### Error Response

Error-Response:

```
{
  "message": "YOU SHALL NOT PASS"
}
```
