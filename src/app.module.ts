import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TranslationModule } from './translation/translation.module';

@Module({
  imports: [DatabaseModule, TranslationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
