import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
    @ApiProperty({
        example: 'stephen.lee.dev',
        description: 'Email',
        required: true
    })
    public email: String;

    @ApiProperty({
        example: 'StephenLeeDev',
        description: 'Nickname',
        required: true
    })
    public nickname: String;

    @ApiProperty({
        example: '0000',
        description: 'Password',
        required: true
    })
    public password: String;
}