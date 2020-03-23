import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1584967291271 implements MigrationInterface {
    name = 'Initial1584967291271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "challenge_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_key" character varying NOT NULL, "ordering" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, CONSTRAINT "UQ_f1ba868ba14082a44f13646d256" UNIQUE ("name_key"), CONSTRAINT "PK_8b8c175194b56d949b1547e4d2c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "scoreboard" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_key" character varying NOT NULL, "score" integer NOT NULL, "completed" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "challengeId" uuid, CONSTRAINT "PK_ee9f6e819e7a4a11d569b54c060" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "challenge" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_key" character varying NOT NULL, "ordering" integer NOT NULL, "worth" integer NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "challengeTypeId" uuid, CONSTRAINT "UQ_bc46c59b0305bb3d574cd301826" UNIQUE ("name_key"), CONSTRAINT "PK_5f31455ad09ea6a836a06871b7a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "application" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "api_key" character varying NOT NULL, "api_secret" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "challengeId" uuid, CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "badge" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_76b7011c864d4521a14a5196c49" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "leaderboard" ("user_key" character varying NOT NULL, "score" integer NOT NULL, CONSTRAINT "PK_f2c567f85c644ef0dff3667735b" PRIMARY KEY ("user_key"))`, undefined);
        await queryRunner.query(`ALTER TABLE "scoreboard" ADD CONSTRAINT "FK_df8d5b2045f57c4c33aee7f8eef" FOREIGN KEY ("challengeId") REFERENCES "challenge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "challenge" ADD CONSTRAINT "FK_89cf90118b3709387740d71ea7d" FOREIGN KEY ("challengeTypeId") REFERENCES "challenge_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_94691ac73001b649382af639d9a" FOREIGN KEY ("challengeId") REFERENCES "challenge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_94691ac73001b649382af639d9a"`, undefined);
        await queryRunner.query(`ALTER TABLE "challenge" DROP CONSTRAINT "FK_89cf90118b3709387740d71ea7d"`, undefined);
        await queryRunner.query(`ALTER TABLE "scoreboard" DROP CONSTRAINT "FK_df8d5b2045f57c4c33aee7f8eef"`, undefined);
        await queryRunner.query(`DROP TABLE "leaderboard"`, undefined);
        await queryRunner.query(`DROP TABLE "badge"`, undefined);
        await queryRunner.query(`DROP TABLE "application"`, undefined);
        await queryRunner.query(`DROP TABLE "challenge"`, undefined);
        await queryRunner.query(`DROP TABLE "scoreboard"`, undefined);
        await queryRunner.query(`DROP TABLE "challenge_type"`, undefined);
    }

}
