import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserMetaTable1700000000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_meta",
        columns: [
          {
            name: "id",
            type: "binary",
            length: "16",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "binary",
            length: "16",
          },
          {
            name: "meta_key",
            type: "varchar",
            length: "100",
          },
          {
            name: "meta_value",
            type: "text",
          },
        ],
      }),
      true
    );

    // Add unique index
    await queryRunner.query(`
      CREATE UNIQUE INDEX uniq_user_key ON user_meta (user_id, meta_key)
    `);

    // Add foreign key constraint
    await queryRunner.query(`
      ALTER TABLE user_meta 
      ADD CONSTRAINT FK_user_meta_user_id 
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_meta");
  }
} 