import { MigrationInterface, QueryRunner } from "typeorm";

export class index1676368943534 implements MigrationInterface {
    name = 'index1676368943534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SPATIAL INDEX \`IDX_6baccfa6a37baad3ac12be4c37\` ON \`polygon\` (\`polygon\`)`);
        await queryRunner.query(`CREATE SPATIAL INDEX \`IDX_a1b69153d51c9e7ff3a51f0e9f\` ON \`point\` (\`location\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a1b69153d51c9e7ff3a51f0e9f\` ON \`point\``);
        await queryRunner.query(`DROP INDEX \`IDX_6baccfa6a37baad3ac12be4c37\` ON \`polygon\``);
    }

}
