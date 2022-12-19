const ERROR = {
    CREATE : {
         INVALID_EMAIL : {
            error: true,
            codePrefix: 'auth',
            message: 'the email address is improperly formatted',

         },
         INVALID_PASSWORD : {
            error: true,
            codePrefix: 'auth',
            message: 'the password must be a string with at least 6 characters',
         },
         EMAIL_EXISTS : {
            error: true,
            codePrefix: 'auth',
            message: 'the email address is already in use by another account.',
         },
    },
}

const SUCCESS = {
    CREATE : {
        SUCCESSFULLY_CREATED : {
           success: true,
           codePrefix: 'auth',
           message: 'user registered with successes',
        },
   },
}

const ALERT = {
    CREATE : {
        SUCCESSFULLY_CREATED : {
           alert: true,
           codePrefix: 'auth',
           message: 'user registered with successes',
        },
   },
}

exports.ERROR = ERROR
exports.SUCCESS = SUCCESS
exports.ALERT = ALERT