import { Module } from '@nestjs/common';
import { TranslationController } from './translation.controller';
import { TranslationService } from './translation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Translation } from '../entity/translation.entity';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService],
  imports: [TypeOrmModule.forFeature([Translation])],
})
export class TranslationModule {}
