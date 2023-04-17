import {
  Controller,
  Body,
  Post,
  Request,
  Response,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  public register(@Body() userData: RegisterDTO) {
    return this.authService.register(userData);
  }

  @Post('/login')
  async login(@Request() req, @Response() res) {
    const token = await this.authService.createSession(req.user);
    res.cookie('auth', token, { httpOnly: true });
    res.send({
      message: 'success',
    });
  }

  @Delete('/logout')
  async logout(@Response() res) {
    res.clearCookie('auth', { httpOnly: true });
    res.send({
      message: 'success',
    });
  }
}
