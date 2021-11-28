import { Response } from 'express';
import { getConnection } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { IUserRequest } from '../common/IReqest.interface';



class UserService {
    
    /**
     * Function for Get user
     * @param req 
     * @param res 
     */
    async getUser(req: IUserRequest, res: Response) {
        const { email } = req.currentUser;
        try {
            const userRepository = getConnection().getRepository(UserEntity);
            const user = await userRepository.findOne({
                where: {
                    email
                }
            });
            if (!user) {
                res.status(404).send({
                    message: "user not found!"
                });
            }
            delete user.password;
            res.status(200).send(user);
        } catch (error) {
            res.status(404).send({
                error
            });
        }
    }
 
    
    /**
     * Function for update user
     * @param req 
     * @param res 
     */
    async updateUser(req: IUserRequest, res: Response) {
        const { email } = req.currentUser;
        try {
            const userRepository = getConnection().getRepository(UserEntity);
            delete req.body.userId;
            if (req.body.password) {
                const salt = await bcrypt.genSaltSync(Number(process.env.saltOrRounds));
                req.body.password = bcrypt.hashSync(req.body.password, salt);
            }
            userRepository.update({ email }, { ...req.body });
            res.status(200).send({
                message: 'User update successfully!'
            });
        } catch (error) {
            res.status(400).send(error);
        }
    }   

    /**
     * Function for  Uploaf file
     * @param req 
     * @param res 
     */
    async uploadProfile(req: IUserRequest, res: Response) {
        const { email } = req.currentUser;
        const { filename } = req.file;

        try {
            const userRepository = getConnection().getRepository(UserEntity);
            await userRepository.update({ email }, { profileImage: filename });
            res.status(200).send({
                message: "Uploaded successFully!"
            });
        } catch (error) {
            res.status(400).send({
                message: "something wen wrong!"
            });
        }
    }

}

export default new UserService();