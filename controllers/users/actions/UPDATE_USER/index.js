
const { User } = require('../../../../models');

exports.updateUser = async (req, res) => {

    const { error } = User.validateUpdate(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    try {
        const findEmail = await User.findOne({ email: req.body.email, _id: { $ne: req.params.id } });
        if(findEmail) return res.status(400).json('"email" has already been registered')
    
        const user = await User.updateOne({ _id: req.params.id }, req.body);
        res.json(user.nModified !== 0 ? 'User updated!' : 'User not found. Nothing updated');

    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}