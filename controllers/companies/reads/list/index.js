const { Company } = require("../../../../models");

exports.fetchCompanyList = async (req, res) => {
  try {
    const companies = await Company.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "Company_id",
          as: "users",
        },
      },
    ]);
    res.json(companies);
  } catch (err) {
    console.log(err);
    return res.status(500).json("Internal Server Error");
  }
};
