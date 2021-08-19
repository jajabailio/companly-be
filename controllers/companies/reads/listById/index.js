
const { Company } = require('../../../../models');
const { ObjectId } = require('mongoose').Types;
exports.fetchCompanyById = async (req, res) => {
    try {

        const companies = await Company.aggregate([
            { $match: { _id: ObjectId(req.params.id) } },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "Company_id",
                    as: "users"
                }
            }
        ]);

        res.json(companies);

    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
}