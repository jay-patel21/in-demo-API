import * as express from 'express';
import authReoutes from './auth.routes';
import userRoutes from './user.routes';

const router: express.Router = express.Router();

router.use('/user', userRoutes);
router.use('/auth', authReoutes);

console.log('ff00');
export { router };