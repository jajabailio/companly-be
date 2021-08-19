
const { Company } = require('../../../../models');

exports.deleteCompany = async (req, res) => {

    try {
        const company = await Company.updateOne({ _id: req.params.id }, { isActive: false });
        res.json(company.nModified !== 0 ?
            'Company has been deleted' :
            'Company not found. Nothing deleted'
        );
    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }

}