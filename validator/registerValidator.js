const validator = require('validator');

const validate = user => {
    let error = {};
    if (!user.name) {
        error.name = "Please provide your name."
    }

    if (!user.email) {
        error.email = 'Please provide your email.'
    } else if (!validator.isEmail(user.email)) {
        error.email = "Please provide a valid email."
    }

    if (!user.password) {
        error.password = "Please provide your password"
    } else if (user.password.legth < 6) {
        error.password = "Password at least six characters required"
    }

    if (!user.confirmPassword) {
        error.confirmPassword = "Please provider confirm password"
    } else if (user.password != user.confirmPassword) {
        error.confirmPassword = 'Password does not matched'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}

module.exports = validate;