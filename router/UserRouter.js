import Router from 'express'
import { deleteUser, getAllUser, getUser, updateUser, userAdd } from '../controller/UserController.js';

const router = Router();


router.route('/user').post(userAdd).get(getAllUser)
// router.route('/user').get(getAllUser)

router.route('/user/:id').put(updateUser).delete(deleteUser).get(getUser)

// router.route('/user').post(userAdd);


export { router as userRouter};
