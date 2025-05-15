const getAllUsers = (req, res) => {
    res.json({
        message : 'GET all user success'
    })
}

module.exports = { getAllUsers };