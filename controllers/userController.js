const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const registerValidator = require("../validator/registerValidator")
const loginValidator = require("../validator/loginValidator")
const User = require("../model/User")
const { serverError, resourceError } = require('../util/error')


module.exports = {
    login(req, res) {

        // extract data from request
        // validate data
        // check for user availability
        // compare password
        // generate token and response back

        let { email, password } = req.body;

        let validate = loginValidator({ email, password });
        if (!validate.isValid) {
            return res.status(400).json(validate.error);
        }

        User.findOne({ email })
            // use populate trhough transactions
            .then(user => {
                if (!user) {
                    return resourceError(res, 'User not found!')

                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        return serverError(res, err)
                    }

                    if (!result) {
                        return resourceError(res, "Password does not matched. Please try again!")
                    }

                    let token = jwt.sign({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        balance: user.balance,
                        income: user.income,
                        expense: user.expense,
                        transactions: user.transactions




                    }, 'SECRET',{expiresIn:'24h'})

                    return res.json({
                        message: 'Login successful',
                        token: `Bearer ${token}`
                    })
                })
            })
            .catch(error => serverError(req, res))


    },
    register(req, res) {
        let { name, email, password, confirmPassword } = req.body;

        let validate = registerValidator({ name, email, password, confirmPassword });
        if (!validate.isValid) {
            res.status(400).json(validate.error)
        } else {
            User.findOne({ email })
                .then(user => {
                    if (user) {

                        return resourceError(res, 'This email already exist')

                    } else {

                        bcrypt.hash(password, 11, (err, hash) => {
                            if (err) {

                                return resourceError(res, 'Server Error Occured hash')
                            }

                            let user = new User({
                                name,
                                email,
                                password: hash,
                                balance: 0,
                                expense: 0,
                                income: 0,
                                transactions: []
                            })
                            user.save()
                                .then(user => {
                                    // console.log(res, 'User created successfully')
                                    return res.status(201).json({message: 'User created succesfull'})
                                })
                                .catch(error => {
                                    return resourceError(res, error)
                                })

                        })
                    }
                })
                .catch(error => serverError(req, res))

        }
    },
    allUser(req, res){
        User.find()
            .then( users => {
                return res.status(200).json(users)
            })
            .catch(error => console.log(error))
    }
}