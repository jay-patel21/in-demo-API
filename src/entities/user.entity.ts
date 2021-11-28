import { IsEmail, Length } from "class-validator";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { Base } from "../common/base.entity";

@Entity('users')
export class UserEntity extends Base {

  @Column({ type: 'text', default: null })
  firstName: string;

  @Column({ type: 'text', default: null })
  lastName: string;

  @Column({ type: 'text', default: null })
  profileImage: string;

  @Column({
    type: 'text',
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({ type: 'text' })
  @Length(7, 100)
  password: string;


  async comparePassword(attempt: string): Promise<boolean> {
    return  bcrypt.compareSync(attempt, this.password);
  }

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSaltSync(Number(process.env.saltOrRounds));
    console.log(salt)
    console.log(this.password);
    this.password =  bcrypt.hashSync(this.password, salt);
    console.log(this.password)
  }
}