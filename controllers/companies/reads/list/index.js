
const { Company } = require('../../../../models');

exports.fetchCompanyList = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal Server Error');
    }
}