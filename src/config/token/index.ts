import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Middleware } from 'express-validator/src/base';
import { IUserRequest } from '../../common/IReqest.interface';
import { ERROR_CODE } from '../../common/constant';

export const verifyToken: Middleware = async (request: IUserRequest, response: Response, next: NextFunction) => {

    if (request) {
        const error = {
             message:'Invalid Token',
             code: ERROR_CODE.FORBIDDEN
        }
        if (!request.headers.authorization) {
           return response.status(401).send(error);
        }
        const auth = request.headers.authorization;
        if (auth.split(' ')[0] !== 'Bearer') {
           return response.status(401).send(error);
        }
        const token = auth.split(' ')[1];

        try {
            const decoded: any =  jwt.verify(token, process.env.JWT_SECERET);
            request.currentUser = decoded;
            next();
        } catch (err) {
            response.status(401).send(error);
        }
    }
}

export const getToken = (context: { email: String, firstName: String }) => {
    const { email, firstName } = context;
    return jwt.sign(
        {
            email,
            firstName
        },
        process.env.JWT_SECERET
    );
}
