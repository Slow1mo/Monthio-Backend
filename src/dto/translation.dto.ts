import { TranslationStatus } from "src/entity/translation.entity";

export class TranslationDTO {
    id: number;
    title: string;
    translations: string;
    status: TranslationStatus;
}