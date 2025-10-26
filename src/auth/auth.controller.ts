import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckCredentialsDto } from './dto/check-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('check')
  @HttpCode(HttpStatus.OK)
  async check(@Body() dto: CheckCredentialsDto) {
    const user = await this.authService.checkCredentials(dto.username, dto.password);
    if (!user) {
      return { valid: false };
    }
    const { password, ...rest } = user as any;
    return { valid: true, user: rest };
  }
}