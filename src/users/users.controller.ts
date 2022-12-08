import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

@ApiTags('User')
@Controller('api/users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiResponse({
        status: 200,
        description: 'Success',
        type: UserDto
    })
    @ApiResponse({
        status: 500,
        description: 'Fail'
    })
    @ApiOperation({ summary: 'Get My Info'})
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }
    
    @ApiOperation({ summary: 'Sign Up'})
    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.userService.postUsers(data.email, data.nickname, data.password)
    }
    
    @ApiOperation({ summary: 'Sign In'})
    @Post('login')
    logIn(@Req() req) {
        return req.user;
    }
    
    @ApiOperation({ summary: 'Sign Out'})
    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }

}
