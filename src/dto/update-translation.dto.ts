import { TranslationStatus } from "../entity/translation.entity";

export class UpdateTranslationDTO {
    title?: string;
    description?: string;
    status?: TranslationStatus;
}