import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, AuthModule,
  TypeOrmModule.forRoot({
    type:"mysql",
    port:3306,
    host:"localhost",
    username:"root",
    password:"",
    database:"test"
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
