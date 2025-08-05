import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn("binary", { length: 16 })
  id!: Buffer;

  @Column({ type: "varchar", length: 20, unique: true, nullable: true })
  phone_number!: string | null;

  @Column({ type: "varchar", length: 255, unique: true, nullable: true })
  email!: string | null;

  @Column({ type: "varchar", length: 100, unique: true, nullable: true })
  user_name!: string | null;

  @Column({ type: "text", nullable: true })
  profile_photo!: string | null;

  @Column({ type: "tinyint", default: 1, comment: "1 = active, 0 = disabled, -1 = deleted" })
  profile_status!: number;

  @CreateDateColumn({ type: "datetime" })
  created_at!: Date;

  @UpdateDateColumn({ type: "datetime" })
  updated_at!: Date;

  @DeleteDateColumn({ type: "datetime", nullable: true })
  deleted_at!: Date | null;
} 