import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationName1630255774586 implements MigrationInterface {
    name = 'migrationName1630255774586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "email" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "shop" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "userId" integer,
                CONSTRAINT "REL_e8f0a5cb5967931a347c31619b" UNIQUE ("userId"),
                CONSTRAINT "PK_ad47b7c6121fe31cb4b05438e44" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "tag" (
                "id" SERIAL NOT NULL,
                CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "product" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "description" character varying NOT NULL,
                "price" integer NOT NULL,
                "shopId" integer,
                CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "product_tags_tag" (
                "productId" integer NOT NULL,
                "tagId" integer NOT NULL,
                CONSTRAINT "PK_8da52c0bc9255c6cb07af25ac73" PRIMARY KEY ("productId", "tagId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_208235f4a5c925f11171252b76" ON "product_tags_tag" ("productId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_0de90b04710a86601acdff88c2" ON "product_tags_tag" ("tagId")
        `);
        await queryRunner.query(`
            ALTER TABLE "shop"
            ADD CONSTRAINT "FK_e8f0a5cb5967931a347c31619b6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "product"
            ADD CONSTRAINT "FK_1c4b1934c3e8c5b69b3d3d311d6" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "product_tags_tag"
            ADD CONSTRAINT "FK_208235f4a5c925f11171252b760" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "product_tags_tag"
            ADD CONSTRAINT "FK_0de90b04710a86601acdff88c21" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "product_tags_tag" DROP CONSTRAINT "FK_0de90b04710a86601acdff88c21"
        `);
        await queryRunner.query(`
            ALTER TABLE "product_tags_tag" DROP CONSTRAINT "FK_208235f4a5c925f11171252b760"
        `);
        await queryRunner.query(`
            ALTER TABLE "product" DROP CONSTRAINT "FK_1c4b1934c3e8c5b69b3d3d311d6"
        `);
        await queryRunner.query(`
            ALTER TABLE "shop" DROP CONSTRAINT "FK_e8f0a5cb5967931a347c31619b6"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_0de90b04710a86601acdff88c2"
        `);
        await queryRunner.query(`
            DROP INDEX "IDX_208235f4a5c925f11171252b76"
        `);
        await queryRunner.query(`
            DROP TABLE "product_tags_tag"
        `);
        await queryRunner.query(`
            DROP TABLE "product"
        `);
        await queryRunner.query(`
            DROP TABLE "tag"
        `);
        await queryRunner.query(`
            DROP TABLE "shop"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
