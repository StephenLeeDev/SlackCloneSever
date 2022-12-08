import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {

    @ApiQuery({
        name: 'url',
        description: 'Url of workspace to call',
        required: true
    })
    @ApiQuery({
        name: 'id',
        description: 'My user ID',
        required: true
    })
    @ApiQuery({
        name: 'perPage',
        description: 'Item count in one page',
        required: true
    })
    @ApiQuery({
        name: 'page',
        description: 'Page number to call',
        required: true
    })
    @Get(":id/chats")
    getChat(@Query() query, @Param() param) {
        console.log(query.perPage, query.page);
        console.log(param.id, param.url);
    }

    @Post(':id/chats')
    postChat(@Body() body) { } 
    
}
