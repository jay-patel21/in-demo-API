import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { getToken } from '../config/token';
import { UserEntity } from '../entities/user.entity';

class AuthService {

  async registerUser(req: Request, res: Response) {
    const { email, firstName, lastName, password, profileImage, } = req.body;

    try {
      const userRepository = getConnection().getRepository(UserEntity);
      const user = await userRepository.findOne({
        where: {
          email
        }
      });

      if (user) {
        return res.status(404).json({
          "message": "email/User already exist do you want to login instead?"
        });
      }

      const userStore = await userRepository.create({
        firstName,
        lastName,
        email: email,
        password,
        profileImage,
      });

      await userRepository.save(userStore);

      return res.status(200).send({
        token: getToken({ email, firstName })
      });
    } catch (error) {
      return res.status(404).json({
        "message": `${error}`
      });
    }
  }


  async logIn(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const userRepository = getConnection().getRepository(UserEntity);
      const user = await userRepository.findOne({
        where: {
          email
        }
      });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(400).send({
          message: "Incorrect email or password!"
        });
      }

      return res.status(200).send({
        token: getToken({ email, firstName: user.firstName })
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        message: error
      });
    }
  }
}

export default new AuthService();