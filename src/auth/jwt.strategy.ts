import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'; // Import your UsersService
import type { UserAuth, UserPayload } from '../models/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Set to true if you want to allow expired tokens (not recommended for most cases)
      secretOrKey: process.env.JWT_SECRET || 'your_secret_key', // MUST match the secret used in JwtModule.register
    });
  }

  async validate(payload: UserPayload): Promise<UserAuth> {
    const user = await this.userService.findOne(payload.sub); // Assuming findById exists and fetches the user

    if (!user) {
      console.log('Error');
    }

    return {
      id: payload.sub,
      username: payload.username,
      roles: payload.roles,
    }; // This object will be attached to req.user
  }
}
