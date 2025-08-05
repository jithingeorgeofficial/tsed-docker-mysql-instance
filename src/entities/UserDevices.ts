import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.js";

@Entity("user_devices")
@Unique("uniq_user_device", ["user_id", "device_id"])
export class UserDevices {
  @PrimaryColumn("binary", { length: 16 })
  id!: Buffer;

  @Column({ type: "binary", length: 16 })
  user_id!: Buffer;

  @Column({ type: "text" })
  device_token!: string;

  @Column({ type: "varchar", length: 255 })
  device_id!: string;

  @Column({ 
    type: "enum", 
    enum: ["ios", "android"] 
  })
  device_type!: string;

  @Column({ type: "varchar", length: 255 })
  device_model!: string;

  @Column({ type: "varchar", length: 50 })
  os_version!: string;

  @Column({ type: "varchar", length: 50 })
  app_version!: string;

  @Column({ type: "varchar", length: 10 })
  language!: string;

  @Column({ type: "varchar", length: 100 })
  location_country!: string;

  @Column({ type: "varchar", length: 100 })
  location_city!: string;

  @Column({ type: "decimal", precision: 10, scale: 6 })
  location_lat!: number;

  @Column({ type: "decimal", precision: 10, scale: 6 })
  location_lng!: number;

  @Column({ type: "text" })
  refresh_token!: string;

  @Column({ type: "boolean", default: true })
  is_active!: boolean;

  @Column({ type: "datetime", nullable: true })
  last_notified_at!: Date | null;

  @CreateDateColumn({ type: "datetime" })
  created_at!: Date;

  @UpdateDateColumn({ type: "datetime" })
  updated_at!: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;
} 