/**
 *  @apiDefine UnAuthorized
 *  @apiError (401) InvalidToken Unauthorized
 *  @apiErrorExample {json} Error-Response:
 *  {
 *    "message": "YOU SHALL NOT PASS"
 *  }
 */

/**
 *  @api {put} /api/user Updates the User with provided information
 *  @apiVersion 1.0.0
 *  @apiName PutUser
 *  @apiGroup User
 *  @apiPermission token
 *  @apiDescription Updates the User with provided information
 *
 *  @apiParam {String} email     The User's Email
 *  @apiParam {String} username  The User's Username
 *  @apiParam {String} password  The User's Password
 *  @apiParamExample {json} Sample-Request:
 *  {
 *      "username": "johndoe2",
 *  }
 *  @apiSuccess (200) {json} user The Updated User
 *  @apiSuccessExample {json} Success-Response:
 *  {
 *     "id": 6,
 *     "email": "john@doe.com",
 *     "username": "johndoe2",
 *     "created_at": "2019-11-18T20:52:38.944Z",
 *     "updated_at": "2019-11-18T20:52:38.944Z"
 *  }
 *
 *  @apiUse UnAuthorized
 */

/**
 *  @api {delete} /api/user Deletes the User
 *  @apiVersion 1.0.0
 *  @apiName DeleteUser
 *  @apiGroup User
 *  @apiPermission token
 *  @apiDescription Delete's the User based on the provided token
 *
 *  @apiSuccess (200) {json} Return the ID of the User Deleted
 *  @apiSuccessExample {json} Success-Response:
 *  6
 *
 *  @apiUse UnAuthorized
 */
