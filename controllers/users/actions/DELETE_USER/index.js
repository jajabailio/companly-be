
const { User } = require('../../../../models');

exports.deleteUser = async (req, res) => {
    try {

        const user = await User.deleteOne({ _id: req.params.id });
        res.json(user.deletedCount !== 0 ?
            'User has been deleted' :
            'User not found. Nothing deleted'
        );

    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}