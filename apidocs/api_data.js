define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Logs in a registered user",
    "version": "1.0.0",
    "name": "PostLogin",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Log an user in, receive token on successful login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The User's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n    \"username\": \"johndoe\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "message",
            "description": "<p>Welcome Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Welcome back johndoe!\",\n    \"token\": \"Generated Token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/auth.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "ValidationErrors",
            "description": "<p>The Information Failed Validation</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>Password is Incorrect</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>username</code> was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"username\": \"Required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 404,\n    \"error\": \"User Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 401,\n    \"error\": \"Invalid Credentials\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Registers a New User",
    "version": "1.0.0",
    "name": "PostRegister",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Registers a New User to the Database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The User's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The User's Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The User's Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n    \"email\": \"john@doe.com\",\n    \"username\": \"johndoe\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "message",
            "description": "<p>Welcome Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Welcome to Dad Jokes johndoe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/auth.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "ValidationErrors",
            "description": "<p>The Information Failed Validation</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "UserNameAlreadyTaken",
            "description": "<p>Username is already in the database.</p>"
          },
          {
            "group": "400",
            "optional": false,
            "field": "EmailAlreadyTaken",
            "description": "<p>The Email is already in the system.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"username\": \"Required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"error\": \"Username is already taken\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n    \"code\": 400,\n    \"error\": \"Email is already taken\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/jokes/:id",
    "title": "Deletes the Joke with the Provided Id",
    "version": "1.0.0",
    "name": "DeleteJoke",
    "group": "Jokes",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Delete the Joke with the Provided Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The Id of the joke, passed in the URL</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "joke",
            "description": "<p>The Updated Joke</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "7",
          "type": "json"
        }
      ]
    },
    "filename": "docs/jokes.js",
    "groupTitle": "Jokes",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Unauthorized</p>"
          },
          {
            "group": "401",
            "optional": false,
            "field": "UnAuthorizeDelete",
            "description": "<p>Cannot edit someone else's Dad Joke</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "JokeNotFound",
            "description": "<p>Dad Joke Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"YOU SHALL NOT PASS\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Your DAD Joke was not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"You may only DELETE your own jokes\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/jokes",
    "title": "Get All Public and Private Jokes in the Database",
    "version": "1.0.0",
    "name": "GetAllJokes",
    "group": "Jokes",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Get All Public and Private Jokes in the Database</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "AllJokes",
            "description": "<p>All the Public and Private Jokes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n     \"id\": 1,\n     \"joke\": \"Today, my son asked \\\"Can I have a book mark?\\\" and I burst into tears.\",\n     \"punchline\": \"11 years old and he still doesn't know my name is Brian\",\n     \"created_by\": 1,\n     \"privateJoke\": false,\n     \"created_at\": \"2019-11-18T00:51:52.515Z\",\n     \"updated_at\": \"2019-11-18T00:51:52.515Z\"\n   },\n  {\n     \"id\": 2,\n     \"joke\": \"My wife is really mad at the fact that I have no sense of direction.\",\n     \"punchline\": \"So I packed up my stuff and right.\",\n     \"created_by\": 2,\n     \"privateJoke\": false,\n     \"created_at\": \"2019-11-18T00:51:52.515Z\",\n     \"updated_at\": \"2019-11-18T00:51:52.515Z\"\n   },\n  {\n     \"id\": 3,\n     \"joke\": \"How do you make holy water?\",\n     \"punchline\": \"You boil the hell out of it.\",\n     \"created_by\": 1,\n     \"privateJoke\": false,\n     \"created_at\": \"2019-11-18T00:51:52.515Z\",\n     \"updated_at\": \"2019-11-18T00:51:52.515Z\"\n   },\n]",
          "type": "json[]"
        }
      ]
    },
    "filename": "docs/jokes.js",
    "groupTitle": "Jokes",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"YOU SHALL NOT PASS\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/jokes/public",
    "title": "Get All Public Jokes in the Database",
    "version": "1.0.0",
    "name": "GetPublicJokes",
    "group": "Jokes",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get All Public Jokes in the Database</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "PublicJokes",
            "description": "<p>All the Public Jokes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n     \"id\": 1,\n     \"joke\": \"Today, my son asked \\\"Can I have a book mark?\\\" and I burst into tears.\",\n     \"punchline\": \"11 years old and he still doesn't know my name is Brian\",\n     \"created_by\": 1,\n     \"privateJoke\": false,\n     \"created_at\": \"2019-11-18T00:51:52.515Z\",\n     \"updated_at\": \"2019-11-18T00:51:52.515Z\"\n   },\n  {\n     \"id\": 2,\n     \"joke\": \"My wife is really mad at the fact that I have no sense of direction.\",\n     \"punchline\": \"So I packed up my stuff and right.\",\n     \"created_by\": 2,\n     \"privateJoke\": false,\n     \"created_at\": \"2019-11-18T00:51:52.515Z\",\n     \"updated_at\": \"2019-11-18T00:51:52.515Z\"\n   },\n  {\n     \"id\": 3,\n     \"joke\": \"How do you make holy water?\",\n     \"punchline\": \"You boil the hell out of it.\",\n     \"created_by\": 1,\n     \"privateJoke\": false,\n     \"created_at\": \"2019-11-18T00:51:52.515Z\",\n     \"updated_at\": \"2019-11-18T00:51:52.515Z\"\n   },\n]",
          "type": "json[]"
        }
      ]
    },
    "filename": "docs/jokes.js",
    "groupTitle": "Jokes"
  },
  {
    "type": "post",
    "url": "/api/jokes",
    "title": "Add Joke To the Database",
    "version": "1.0.0",
    "name": "PostJoke",
    "group": "Jokes",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Add Joke To the Database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joke",
            "description": "<p>The joke.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "punchline",
            "description": "<p>The punchline of the Joke</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "privateJoke",
            "description": "<p>Is the Joke Private?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n\t\"joke\": \"Why did the developer cross the road?\",\n\t\"punchline\": \"The code was cleaner on the other side.\",\n\t\"privateJoke\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Joke",
            "description": "<p>The newly created Joke</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 7,\n  \"joke\": \"Why did the developer cross the road?\",\n  \"punchline\": \"The code was cleaner on the other side.\",\n  \"created_by\": 5,\n  \"privateJoke\": true,\n  \"created_at\": \"2019-11-18T01:58:29.354Z\",\n  \"updated_at\": \"2019-11-18T01:58:29.354Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/jokes.js",
    "groupTitle": "Jokes",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"YOU SHALL NOT PASS\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/jokes/:id",
    "title": "Update the Joke with the Provided Id",
    "version": "1.0.0",
    "name": "PutJoke",
    "group": "Jokes",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Update the Joke with the Provided Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The Id of the joke, passed in the URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joke",
            "description": "<p>The joke.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "punchline",
            "description": "<p>The punchline of the Joke</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "privateJoke",
            "description": "<p>Is the Joke Private?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n\t\"privateJoke\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "joke",
            "description": "<p>The Updated Joke</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 7,\n  \"joke\": \"Why did the developer cross the road?\",\n  \"punchline\": \"The code was cleaner on the other side.\",\n  \"created_by\": 5,\n  \"privateJoke\": false,\n  \"created_at\": \"2019-11-18T01:58:29.354Z\",\n  \"updated_at\": \"2019-11-18T01:58:29.354Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/jokes.js",
    "groupTitle": "Jokes",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Unauthorized</p>"
          },
          {
            "group": "401",
            "optional": false,
            "field": "UnAuthorizeEdit",
            "description": "<p>Cannot edit someone else's Dad Joke</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "JokeNotFound",
            "description": "<p>Dad Joke Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"YOU SHALL NOT PASS\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Your DAD Joke was not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"You may only EDIT your own jokes\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/jokes/:id",
    "title": "Update the Joke with the Provided Id",
    "version": "1.0.0",
    "name": "PutJoke",
    "group": "Jokes",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Update the Joke with the Provided Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The Id of the joke, passed in the URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joke",
            "description": "<p>The joke.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "punchline",
            "description": "<p>The punchline of the Joke</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "privateJoke",
            "description": "<p>Is the Joke Private?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n\t\"privateJoke\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "joke",
            "description": "<p>The Updated Joke</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 7,\n  \"joke\": \"Why did the developer cross the road?\",\n  \"punchline\": \"The code was cleaner on the other side.\",\n  \"created_by\": 5,\n  \"privateJoke\": false,\n  \"created_at\": \"2019-11-18T01:58:29.354Z\",\n  \"updated_at\": \"2019-11-18T01:58:29.354Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/jokes.js",
    "groupTitle": "Jokes",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Unauthorized</p>"
          },
          {
            "group": "401",
            "optional": false,
            "field": "UnAuthorizeEdit",
            "description": "<p>Cannot edit someone else's Dad Joke</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "JokeNotFound",
            "description": "<p>Dad Joke Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"YOU SHALL NOT PASS\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"Your DAD Joke was not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"You may only EDIT your own jokes\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/user",
    "title": "Deletes the User",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Delete's the User based on the provided token</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "Return",
            "description": "<p>the ID of the User Deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "6",
          "type": "json"
        }
      ]
    },
    "filename": "docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"YOU SHALL NOT PASS\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user",
    "title": "Updates the User with provided information",
    "version": "1.0.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "token"
      }
    ],
    "description": "<p>Updates the User with provided information</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The User's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The User's Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The User's Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample-Request:",
          "content": "{\n    \"username\": \"johndoe2\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": "<p>The Updated User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"id\": 6,\n   \"email\": \"john@doe.com\",\n   \"username\": \"johndoe2\",\n   \"created_at\": \"2019-11-18T20:52:38.944Z\",\n   \"updated_at\": \"2019-11-18T20:52:38.944Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"YOU SHALL NOT PASS\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
