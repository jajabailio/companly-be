
const { Company } = require('../../../../models');

exports.updateCompany = async (req, res) => {
  
    const { error } = Company.validateUpdate(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    try {
        const company = await Company.updateOne({ _id: req.params.id }, req.body);
        res.json(company.nModified !== 0 ?
            'Company updated!' :
            'Company not found. Nothing updated'
        );
        
    } catch(err) {
        console.log(err);
        res.status(500).json('Internal Server Error');
    }

}