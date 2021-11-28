import { Request } from 'express';

export interface IUserRequest extends Request {
    currentUser:{
        email:string
        firstName: string
    }
}