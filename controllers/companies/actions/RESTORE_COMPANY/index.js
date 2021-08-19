
const { Company } = require('../../../../models');

exports.restoreCompany = async (req, res) => {

    try {
        const company = await Company.updateOne({ _id: req.params.id }, { isActive: true });
        res.json(company.nModified !== 0 ?
            'Company has been restored' :
            'Company not found. Nothing restored'
        );
    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }

}