const requestDate = (req, res, next) => {
    const date = new Date

    req.requestDate = date.toISOString()
    next()
}

module.exports.requestDate = requestDate