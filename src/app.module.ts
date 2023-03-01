import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://thealitahir:punjabf13@cluster0.qbtub.azure.mongodb.net/mongotraining'),
    UserModule
]
})
export class AppModule {}
