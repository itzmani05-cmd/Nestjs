import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
    async hashPassword(){
        const password='manikandan123';
        const hash=await bcrypt.hash(password,10);
        return {password,hash};
    }
    async comparePassword(){
        const password='manikandan123';
        const wrongPassword='wrong123';
        const hash=await bcrypt.hash(password,10);
        const isMatch=await bcrypt.compare(password,hash);
        const wrongMatch=await bcrypt.compare(wrongPassword,hash);
        return {isMatch,wrongMatch};
    }
}
