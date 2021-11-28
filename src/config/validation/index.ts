import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { VALIDATION } from '../../common/constant';

export const validate = (method: string) => {
    console.log(method);
    switch (method) {
        case VALIDATION.CREATE_USER: {
            return [
                body('firstName', `firstName doesn't exists`).exists().isLength({ min: 1 }),
                body('lastName', `lastName doesn't exists`).exists().isLength({ min: 1 }),
                body('password', `password doesn't exists`).exists(),
                body('email', 'Invalid email').exists().isEmail(),
            ]
        }
        case VALIDATION.LOG_IN: {
            return [
                body('password', `password doesn't exists`).exists(),
                body('email', 'Invalid email').exists().isEmail(),
            ]
        }
        case VALIDATION.EDIT_USER: {
            return [
                body('lastName', `invalid last name`).optional().isLength({ min: 1 }),
                body('firstName', `invalid last name`).optional().exists().isLength({ min: 1 }),
                body('password', `invalid password`).optional().exists().isLength({ min: 1 }),
            ]
        }
    }
}

export const checkValidation = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Invalid Inputs' });
    }
    next();
}