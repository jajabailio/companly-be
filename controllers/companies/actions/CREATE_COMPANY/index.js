
const { Company } = require('../../../../models');

exports.createNewCompany = async (req, res) => {
    
    const { error } = Company.validateCreate(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    try {
        const company = await Company.create(req.body);
        res.json(company);
    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }

}