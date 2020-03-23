import {MigrationInterface, QueryRunner} from "typeorm";
import { ChallengeType } from "../entity/ChallengeType.entity";

export class Initial1584974070131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const challengeTypeRepository = queryRunner.connection.getRepository(ChallengeType);
        let challengeType:ChallengeType = new ChallengeType();
        challengeType.active = true;
        challengeType.ordering = 1;
        challengeType.nameKey = 'containerization';
        challengeType = await challengeTypeRepository.save(challengeType);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const challengeTypeRepository = queryRunner.connection.getRepository(ChallengeType);
        challengeTypeRepository.delete({
            nameKey: 'containerization'
        });
    }

}
