
const router = require('express').Router();

const controllers = {
    companies: {
        actions: {
            CREATE_COMPANY: require('../../controllers/companies/actions/CREATE_COMPANY').createNewCompany,
            DELETE_COMPANY: require('../../controllers/companies/actions/DELETE_COMPANY').deleteCompany,
            RESTORE_COMPANY: require('../../controllers/companies/actions/RESTORE_COMPANY').restoreCompany,
            UPDATE_COMPANY: require('../../controllers/companies/actions/UPDATE_COMPANY').updateCompany
        },
        reads: {
            list: require('../../controllers/companies/reads/list').fetchCompanyList,
            listById: require('../../controllers/companies/reads/listById').fetchCompanyById
        }
    }
}

router.post('/', controllers.companies.actions.CREATE_COMPANY);

router.delete('/:id', controllers.companies.actions.DELETE_COMPANY);

router.put('/restore/:id', controllers.companies.actions.RESTORE_COMPANY);

router.put('/:id', controllers.companies.actions.UPDATE_COMPANY);

router.get('/:id', controllers.companies.reads.listById);

router.get('/', controllers.companies.reads.list);


module.exports = router;