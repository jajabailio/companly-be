const { User } = require('../../../../models');

exports.findUserById = async (req, res) => {
    try {
        
        const user = await User.findOne({ _id: req.params.id });
        if(!user) return res.status(404).json('User with given id not found');

        res.json(user);

    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}