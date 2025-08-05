import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserLoginActivityTable1700000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_login_activity",
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
            name: "method",
            type: "enum",
            enum: ["default", "google", "apple", "facebook"],
            default: "'default'",
          },
          {
            name: "is_register",
            type: "boolean",
            default: false,
          },
          {
            name: "time",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );

    // Add foreign key constraint
    await queryRunner.query(`
      ALTER TABLE user_login_activity 
      ADD CONSTRAINT FK_user_login_activity_user_id 
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_login_activity");
  }
} 