
const { User } = require('../../../../models');

exports.createNewUser = async (req, res) => {
    
    const { error } = User.validateCreate(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    try {
        const findEmail = await User.findOne({ email: req.body.email });
        if(findEmail) return res.status(400).json('"email" has already been registered');
    
        const user = await User.create(req.body);
        res.json(user);
    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}