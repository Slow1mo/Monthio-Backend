import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TranslationStatus {
  Created = 0,
  InProgress = 1,
  Done = 2,
}

@Entity()
export class Translation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 64 })
  title: string;
  @Column({ nullable: true, length: 1024 })
  translations: string;

  @Column({ nullable: false, default: TranslationStatus.Created })
  status: TranslationStatus;
}

