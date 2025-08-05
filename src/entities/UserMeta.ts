import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Unique } from "typeorm";
import { User } from "./User.js";

@Entity("user_meta")
@Unique("uniq_user_key", ["user_id", "meta_key"])
export class UserMeta {
  @PrimaryColumn("binary", { length: 16 })
  id!: Buffer;

  @Column({ type: "binary", length: 16 })
  user_id!: Buffer;

  @Column({ type: "varchar", length: 100 })
  meta_key!: string;

  @Column({ type: "text" })
  meta_value!: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;
} 