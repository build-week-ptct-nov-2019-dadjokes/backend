/**
 *  @apiDefine DadJokeNotFound
 *  @apiError (404) JokeNotFound Dad Joke Not Found
 *  @apiErrorExample {json} Error-Response:
 *  {
 *    "message": "Your DAD Joke was not found"
 *  }
 */

/**
 *  @apiDefine UnAuthorized
 *  @apiError (401) InvalidToken Unauthorized
 *  @apiErrorExample {json} Error-Response:
 *  {
 *    "message": "YOU SHALL NOT PASS"
 *  }
 */

/**
 *  @apiDefine UnAuthorizedEdit
 *  @apiError (401) UnAuthorizeEdit Cannot edit someone else's Dad Joke
 *  @apiErrorExample {json} Error-Response:
 *  {
 *    "message": "You may only EDIT your own jokes"
 *  }
 */

/**
 *  @apiDefine UnAuthorizedDelete
 *  @apiError (401) UnAuthorizeDelete Cannot edit someone else's Dad Joke
 *  @apiErrorExample {json} Error-Response:
 *  {
 *    "message": "You may only DELETE your own jokes"
 *  }
 */

/**
 *  @api {get} /api/jokes/public Get All Public Jokes in the Database
 *  @apiVersion 1.0.0
 *  @apiName GetPublicJokes
 *  @apiGroup Jokes
 *  @apiPermission none
 *  @apiDescription Get All Public Jokes in the Database
 *
 *  @apiSuccess (200) {json[]} PublicJokes All the Public Jokes
 *  @apiSuccessExample {json[]} Success-Response:
 *  [
 *    {
 *       "id": 1,
 *       "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.",
 *       "punchline": "11 years old and he still doesn't know my name is Brian",
 *       "created_by": 1,
 *       "privateJoke": false,
 *       "created_at": "2019-11-18T00:51:52.515Z",
 *       "updated_at": "2019-11-18T00:51:52.515Z"
 *     },
 *    {
 *       "id": 2,
 *       "joke": "My wife is really mad at the fact that I have no sense of direction.",
 *       "punchline": "So I packed up my stuff and right.",
 *       "created_by": 2,
 *       "privateJoke": false,
 *       "created_at": "2019-11-18T00:51:52.515Z",
 *       "updated_at": "2019-11-18T00:51:52.515Z"
 *     },
 *    {
 *       "id": 3,
 *       "joke": "How do you make holy water?",
 *       "punchline": "You boil the hell out of it.",
 *       "created_by": 1,
 *       "privateJoke": false,
 *       "created_at": "2019-11-18T00:51:52.515Z",
 *       "updated_at": "2019-11-18T00:51:52.515Z"
 *     },
 *  ]
 */

/**
 *  @api {get} /api/jokes Get All Public and Private Jokes in the Database
 *  @apiVersion 1.0.0
 *  @apiName GetAllJokes
 *  @apiGroup Jokes
 *  @apiPermission token
 *  @apiDescription Get All Public and Private Jokes in the Database
 *
 *  @apiSuccess (200) {json[]} AllJokes All the Public and Private Jokes
 *  @apiSuccessExample {json[]} Success-Response:
 *  [
 *    {
 *       "id": 1,
 *       "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.",
 *       "punchline": "11 years old and he still doesn't know my name is Brian",
 *       "created_by": 1,
 *       "privateJoke": false,
 *       "created_at": "2019-11-18T00:51:52.515Z",
 *       "updated_at": "2019-11-18T00:51:52.515Z"
 *     },
 *    {
 *       "id": 2,
 *       "joke": "My wife is really mad at the fact that I have no sense of direction.",
 *       "punchline": "So I packed up my stuff and right.",
 *       "created_by": 2,
 *       "privateJoke": false,
 *       "created_at": "2019-11-18T00:51:52.515Z",
 *       "updated_at": "2019-11-18T00:51:52.515Z"
 *     },
 *    {
 *       "id": 3,
 *       "joke": "How do you make holy water?",
 *       "punchline": "You boil the hell out of it.",
 *       "created_by": 1,
 *       "privateJoke": false,
 *       "created_at": "2019-11-18T00:51:52.515Z",
 *       "updated_at": "2019-11-18T00:51:52.515Z"
 *     },
 *  ]
 *
 *  @apiUse UnAuthorized
 */

/**
 *  @api {post} /api/jokes Add Joke To the Database
 *  @apiVersion 1.0.0
 *  @apiName PostJoke
 *  @apiGroup Jokes
 *  @apiPermission token
 *  @apiDescription Add Joke To the Database
 *
 *  @apiParam {String} joke The joke.
 *  @apiParam {String} punchline The punchline of the Joke
 *  @apiParam {Boolean} privateJoke Is the Joke Private?
 *  @apiParamExample {json} Sample-Request:
 *  {
 *  	"joke": "Why did the developer cross the road?",
 *  	"punchline": "The code was cleaner on the other side.",
 *  	"privateJoke": true
 *  }
 *  @apiSuccess (201) {json} Joke The newly created Joke
 *  @apiSuccessExample {json} Success-Response:
 *  {
 *    "id": 7,
 *    "joke": "Why did the developer cross the road?",
 *    "punchline": "The code was cleaner on the other side.",
 *    "created_by": 5,
 *    "privateJoke": true,
 *    "created_at": "2019-11-18T01:58:29.354Z",
 *    "updated_at": "2019-11-18T01:58:29.354Z"
 *  }
 *
 *  @apiUse UnAuthorized
 */

/**
 *  @api {put} /api/jokes/:id Update the Joke with the Provided Id
 *  @apiVersion 1.0.0
 *  @apiName PutJoke
 *  @apiGroup Jokes
 *  @apiPermission token
 *  @apiDescription Update the Joke with the Provided Id
 *
 *  @apiParam {Integer} id The Id of the joke, passed in the URL
 *  @apiParam {String} joke The joke.
 *  @apiParam {String} punchline The punchline of the Joke
 *  @apiParam {Boolean} privateJoke Is the Joke Private?
 *  @apiParamExample {json} Sample-Request:
 *  {
 *  	"privateJoke": false
 *  }
 *  @apiSuccess (200) {json} joke The Updated Joke
 *  @apiSuccessExample {json} Success-Response:
 *  {
 *    "id": 7,
 *    "joke": "Why did the developer cross the road?",
 *    "punchline": "The code was cleaner on the other side.",
 *    "created_by": 5,
 *    "privateJoke": false,
 *    "created_at": "2019-11-18T01:58:29.354Z",
 *    "updated_at": "2019-11-18T01:58:29.354Z"
 *  }
 *
 *  @apiUse UnAuthorized
 *  @apiUse DadJokeNotFound
 *  @apiUse UnAuthorizedEdit
 */

/**
 *  @api {put} /api/jokes/:id Update the Joke with the Provided Id
 *  @apiVersion 1.0.0
 *  @apiName PutJoke
 *  @apiGroup Jokes
 *  @apiPermission token
 *  @apiDescription Update the Joke with the Provided Id
 *
 *  @apiParam {Integer} id The Id of the joke, passed in the URL
 *  @apiParam {String} joke The joke.
 *  @apiParam {String} punchline The punchline of the Joke
 *  @apiParam {Boolean} privateJoke Is the Joke Private?
 *  @apiParamExample {json} Sample-Request:
 *  {
 *  	"privateJoke": false
 *  }
 *  @apiSuccess (200) {json} joke The Updated Joke
 *  @apiSuccessExample {json} Success-Response:
 *  {
 *    "id": 7,
 *    "joke": "Why did the developer cross the road?",
 *    "punchline": "The code was cleaner on the other side.",
 *    "created_by": 5,
 *    "privateJoke": false,
 *    "created_at": "2019-11-18T01:58:29.354Z",
 *    "updated_at": "2019-11-18T01:58:29.354Z"
 *  }
 *
 *  @apiUse UnAuthorized
 *  @apiUse DadJokeNotFound
 *  @apiUse UnAuthorizedEdit
 */

/**
 *  @api {delete} /api/jokes/:id Deletes the Joke with the Provided Id
 *  @apiVersion 1.0.0
 *  @apiName DeleteJoke
 *  @apiGroup Jokes
 *  @apiPermission token
 *  @apiDescription Delete the Joke with the Provided Id
 *
 *  @apiParam {Integer} id The Id of the joke, passed in the URL
 *  @apiSuccess (200) {json} joke The Updated Joke
 *  @apiSuccessExample {json} Success-Response:
 *  7
 *
 *  @apiUse UnAuthorized
 *  @apiUse DadJokeNotFound
 *  @apiUse UnAuthorizedDelete
 */
