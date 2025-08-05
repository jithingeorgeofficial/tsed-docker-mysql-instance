import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User.js";

@Entity("user_login_activity")
export class UserLoginActivity {
  @PrimaryColumn("binary", { length: 16 })
  id!: Buffer;

  @Column({ type: "binary", length: 16 })
  user_id!: Buffer;

  @Column({ 
    type: "enum", 
    enum: ["default", "google", "apple", "facebook"], 
    default: "default" 
  })
  method!: string;

  @Column({ type: "boolean", default: false })
  is_register!: boolean;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  time!: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;
} 