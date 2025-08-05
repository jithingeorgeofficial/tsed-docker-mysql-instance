import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserDevicesTable1700000000003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_devices",
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
            name: "device_token",
            type: "text",
          },
          {
            name: "device_id",
            type: "varchar",
            length: "255",
          },
          {
            name: "device_type",
            type: "enum",
            enum: ["ios", "android"],
          },
          {
            name: "device_model",
            type: "varchar",
            length: "255",
          },
          {
            name: "os_version",
            type: "varchar",
            length: "50",
          },
          {
            name: "app_version",
            type: "varchar",
            length: "50",
          },
          {
            name: "language",
            type: "varchar",
            length: "10",
          },
          {
            name: "location_country",
            type: "varchar",
            length: "100",
          },
          {
            name: "location_city",
            type: "varchar",
            length: "100",
          },
          {
            name: "location_lat",
            type: "decimal",
            precision: 10,
            scale: 6,
          },
          {
            name: "location_lng",
            type: "decimal",
            precision: 10,
            scale: 6,
          },
          {
            name: "refresh_token",
            type: "text",
          },
          {
            name: "is_active",
            type: "boolean",
            default: true,
          },
          {
            name: "last_notified_at",
            type: "datetime",
            isNullable: true,
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
        ],
      }),
      true
    );

    // Add unique index
    await queryRunner.query(`
      CREATE UNIQUE INDEX uniq_user_device ON user_devices (user_id, device_id)
    `);

    // Add foreign key constraint
    await queryRunner.query(`
      ALTER TABLE user_devices 
      ADD CONSTRAINT FK_user_devices_user_id 
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_devices");
  }
} 