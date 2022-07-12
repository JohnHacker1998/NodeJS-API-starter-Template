function validateData(ajvValidate) {
    return (req, res, next) => {
        if (ajvValidate(req.body)) {
            res.status(500).json({
                "status": 0,
                "message": ajvValidate.errors
            })
        }
        next();
    }

}

module.exports = validateData;