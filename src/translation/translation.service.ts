import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Translation, TranslationStatus } from '../entity/translation.entity';
import { TranslationDTO } from '../dto/translation.dto';
import { CreateTranslationDTO } from '../dto/create-translation.dto';
import { UpdateTranslationDTO } from '../dto/update-translation.dto';

@Injectable()
export class TranslationService {
  constructor(
    @InjectRepository(Translation)
    private translationRepository: Repository<Translation>, //will get private translation repository injected
  ) {}

  //getOne get one translation entity from the database with the id = translationId
  public async getOne(translationId: number) {
    const translation: Translation = await this.translationRepository.findOne(
      translationId,
    );

    if (!translation)
      throw new NotFoundException(
        `Translation with the id ${translationId} was not found`,
      );

    const translationDTO: TranslationDTO = this.entityToDTO(translation);

    return translationDTO;
  }

  //createOne creates one translation entity and sets title and desc from DTO object and sets status of "created"
  public async createOne(createTranslationRequest: CreateTranslationDTO) {
    const translation: Translation = new Translation();
    translation.title = createTranslationRequest.title;
    translation.translations = createTranslationRequest.translations;
    translation.status = TranslationStatus.Created;

    await this.translationRepository.save(translation); //translation entity saved in database

    const translationDTO = this.entityToDTO(translation); // new DTO object and sets id, desc, status of this entity and returns it.

    return translationDTO;
  }

  //helper function to get an array of translations as a DTO
  private entityToDTO(translation: Translation): TranslationDTO {
    const translationDTO = new TranslationDTO();
    translationDTO.id = translation.id;
    translationDTO.title = translation.title;
    translationDTO.translations = translation.translations;
    translationDTO.status = translation.status;

    return translationDTO;
  }

  //get all translations as a translation DTO
  public async getAll() {
    const translations : Translation[] = await this.translationRepository.find();
    //all translations in array to translation DTO
    const translationsDTO: TranslationDTO[] = translations.map(t => this.entityToDTO(t)); 
    return translationsDTO;
  }

  //update properties of one translation
  public async updateOne(translationId: number, updateTranslationRequest: UpdateTranslationDTO) {
    //fetch and check if the translation already exists

    const translation: Translation = await this.getOne(translationId);

    //check properties set in DTO
    //if property not set, then use default
    translation.title = updateTranslationRequest.title || translation.title;
    translation.translations = updateTranslationRequest.translations || translation.translations;
    translation.status = updateTranslationRequest.status === undefined? translation.status : updateTranslationRequest.status;

    //update the properties on the translation 
    await this.translationRepository.save(translation);

    //return translation as DTO
    const translationDTO: TranslationDTO = this.entityToDTO(translation);

    return translationDTO;
  }

  //delete one translation by Id.
  public async deleteOne(translationId: number) {
    //fetch and check if translation already exists

    const translation : Translation = await this.getOne(translationId);

    //delete translation

    await this.translationRepository.remove(translation);
  }
}
