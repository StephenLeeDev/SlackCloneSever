import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUser() {}
    postUsers(email: String, nickname: String, password: String) {}

}
