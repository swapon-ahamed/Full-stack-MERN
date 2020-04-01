module.exports = {
    serverError(req, res) {
        res.status(500).json({
            message: "Server error occured"
        })
    },
    resourceError(res, message) {
        res.status(400).json({
            message
        })
    }
}