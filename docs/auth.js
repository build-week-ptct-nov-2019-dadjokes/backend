/**
 * @apiDefine UserNotFound
 * @apiError (404) UserNotFound The <code>username</code> was not found.
 * @apiErrorExample {json} Error-Response:
 * {
 *     "code": 404,
 *     "error": "User Not Found"
 * }
 */

/**
 * @apiDefine InvalidCredentials
 * @apiError (401) InvalidCredentials Password is Incorrect
 * @apiErrorExample {json} Error-Response:
 * {
 *     "code": 401,
 *     "error": "Invalid Credentials"
 * }
 */

/**
 * @apiDefine ValidationErrors
 * @apiError (400) ValidationErrors The Information Failed Validation
 * @apiErrorExample {json} Error-Response:
 * {
 *     "username": "Required"
 * }
 */

/**
 * @apiDefine UserNameAlreadyTaken
 * @apiError (400) UserNameAlreadyTaken  Username is already in the database.
 * @apiErrorExample {json} Error-Response:
 * {
 *     "code": 400,
 *     "error": "Username is already taken"
 * }
 */

/**
 * @apiDefine EmailAlreadyTaken
 * @apiError (400) EmailAlreadyTaken The Email is already in the system.
 * @apiErrorExample {json} Error-Response:
 * {
 *     "code": 400,
 *     "error": "Email is already taken"
 * }
 */
/**
 * @api {post} /api/auth/register Registers a New User
 * @apiVersion 1.0.0
 * @apiName PostRegister
 * @apiGroup Auth
 * @apiPermission none
 * @apiDescription Registers a New User to the Database
 *
 * @apiParam {String} email     The User's Email
 * @apiParam {String} username  The User's Username
 * @apiParam {String} password  The User's Password
 * @apiParamExample {json} Sample-Request:
 * {
 *     "email": "john@doe.com",
 *     "username": "johndoe",
 *     "password": "123456"
 * }
 * @apiSuccess (201) {json} message Welcome Message
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "message": "Welcome to Dad Jokes johndoe"
 * }
 * @apiUse ValidationErrors
 * @apiUse UserNameAlreadyTaken
 * @apiUse EmailAlreadyTaken
 */

/**
 * @api {post} /api/auth/login Logs in a registered user
 * @apiVersion 1.0.0
 * @apiName PostLogin
 * @apiGroup Auth
 * @apiPermission none
 * @apiDescription Log an user in, receive token on successful login
 *
 * @apiParam {String} username  The User's username
 * @apiParam {String} password  The User's password
 * @apiParamExample {json} Sample-Request:
 * {
 *     "username": "johndoe",
 *     "password": "123456"
 * }
 * @apiSuccess (200) {json} message Welcome Message
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "message": "Welcome back johndoe!",
 *     "token": "Generated Token"
 * }
 * @apiUse ValidationErrors
 * @apiUse UserNotFound
 * @apiUse InvalidCredentials
 */
