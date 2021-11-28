import * as express from 'express';
import authService from '../services/auth.service';
import { checkValidation, validate } from '../config/validation';
import { VALIDATION } from '../common/constant';


const authReoutes: express.Router = express.Router();


authReoutes.post('/register',
    validate(VALIDATION.CREATE_USER),
    checkValidation,
    authService.registerUser);
authReoutes.post('/logIn',
    validate(VALIDATION.LOG_IN),
    checkValidation,
    authService.logIn);

export default authReoutes;