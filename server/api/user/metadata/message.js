const ERROR = {
    CREATE : {
         INVALID_EMAIL : {
            type: 'invalid email',
            codePrefix: 'auth',
            message: 'the email address is improperly formatted',
         },
         INVALID_PASSWORD : {
            type: 'invalid password',
            codePrefix: 'auth',
            message: 'the password must be a string with at least 6 characters',
         },
         EMAIL_EXISTS : {
            type: 'email already exists',
            codePrefix: 'auth',
            message: 'the email address is already in use by another account.',
         },

    },
}

const SUCCESS = {
    CREATE : {
        SUCCESSFULLY_CREATED : {
           type: 'successfully created',
           codePrefix: 'auth',
           message: 'user registered with successes',
        },
   },
}

exports.ERROR = ERROR
exports.SUCCESS = SUCCESS