import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, 
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return{
          secret: configService.get('JWT_SECRET'),
          signOptions: {},
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
