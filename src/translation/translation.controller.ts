import { Controller, Post, Body, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { TranslationStatus } from '../entity/translation.entity';
import { TranslationService } from './translation.service';
import { CreateTranslationDTO } from '../dto/create-translation.dto';
import { UpdateTranslationDTO } from '../dto/update-translation.dto';

@Controller('translations')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {} //translation service injected in constructor

  @Get()
  public async getAll() {
    const res = await this.translationService.getAll();
    return res;
  }

  @Get("/:id")
    public async getOne(@Param("id") translationId: number) {
      const res = await this.translationService.getOne(translationId);

      return res;
    }
  
  @Post() //Routes HTTP POST requests to the specified path.
  public async createOne(
    @Body() createTranslationRequest: CreateTranslationDTO,
  ) {
    const res = await this.translationService.createOne(
      createTranslationRequest,
    );

    return res;
  }

  @Put("/:id")
  public async updateOne(@Param("id") taskId: number, @Body() updateTranslationRequest: UpdateTranslationDTO) {
    const res = await this.translationService.updateOne(translationId, updateTranslationRequest);

    return res;
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteOne(@Param("id") translationId: number) {
    await this.translationService.deleteOne(translationId);
  }
}
