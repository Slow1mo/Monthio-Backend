import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1618781468507 implements MigrationInterface {
    name = 'Init1618781468507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "translation" ("id" SERIAL NOT NULL, "title" character varying(64), "description" character varying(1024), "status" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_7aef875e43ab80d34a0cdd39c70" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "translation"`);
    }

}
