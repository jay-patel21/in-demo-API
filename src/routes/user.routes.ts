import * as express from 'express';
import { VALIDATION } from '../common/constant';
import { checkValidation, validate } from '../config/validation';
import userService from '../services/user.service';
import { verifyToken } from '../config/token';
import { upload } from '../config/upload';


const userRoutes: express.Router = express.Router();

userRoutes.get('/get', verifyToken, userService.getUser);
userRoutes.put('/update',
    verifyToken,
    validate(VALIDATION.EDIT_USER),
    checkValidation,
    userService.updateUser);
userRoutes.post('/upload-image',
    verifyToken,
    upload.single('profileImage'),
    userService.uploadProfile);


export default userRoutes;