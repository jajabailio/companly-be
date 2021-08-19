
const router = require('express').Router();

const controllers = {
    users: {
        actions: {
            CREATE_USER: require('../../controllers/users/actions/CREATE_USER').createNewUser,
            UPDATE_USER: require('../../controllers/users/actions/UPDATE_USER').updateUser,
            DELETE_USER: require('../../controllers/users/actions/DELETE_USER').deleteUser
        },
        reads: {
            listById: require('../../controllers/users/reads/listById').findUserById
        }
    }
}

router.post('/', controllers.users.actions.CREATE_USER);

router.put('/:id', controllers.users.actions.UPDATE_USER);

router.delete('/:id', controllers.users.actions.DELETE_USER);

router.get('/:id', controllers.users.reads.listById);

module.exports = router;