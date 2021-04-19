import { TranslationStatus } from "src/entity/translation.entity";

export class TranslationDTO {
    id: number;
    title: string;
    description: string;
    status: TranslationStatus;
}