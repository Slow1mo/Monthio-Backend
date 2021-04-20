import { TranslationStatus } from "../entity/translation.entity";

export class UpdateTranslationDTO {
    title?: string;
    translations?: string;
    status?: TranslationStatus;
}