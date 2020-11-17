import UserRepository from '../repositories/user/UserRepository';
import {IConfig} from "../config/IConfig";
import config from "../config/configuration";
import *as bcrypt from "bcrypt";

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then(res => {
        if(res === 0){
            const password=bcrypt.hashSync(config.password, 10);
            console.log('data seeding in progress');
            userRepository.create({
                name: 'Head Trainer',
                role: 'head-trainer', 
                email: 'headtrainer@successive.tech',
                password:password
            });
            userRepository.create({
                name: 'Trainee', 
                role: 'trainee', 
                email: 'trainee@successive.tech',
                password:password
            });
        }
    })
    .catch(err => console.log(err));
}