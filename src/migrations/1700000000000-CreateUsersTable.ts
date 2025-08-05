import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1700000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "binary",
            length: "16",
            isPrimary: true,
          },
          {
            name: "phone_number",
            type: "varchar",
            length: "20",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "user_name",
            type: "varchar",
            length: "100",
            isUnique: true,
            isNullable: true,
          },
          {
            name: "profile_photo",
            type: "text",
            isNullable: true,
          },
          {
            name: "profile_status",
            type: "tinyint",
            default: "1",
            comment: "1 = active, 0 = disabled, -1 = deleted",
          },
          {
            name: "created_at",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
          {
            name: "deleted_at",
            type: "datetime",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
} 