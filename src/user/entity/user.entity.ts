import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  full_name: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  phone: string;

  @Column({ type: "text", nullable: false })
  dob: string;

  @Column({ type: "enum", enum: ["Male", "Female", "Others"] })
  gender: string;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "text", nullable: true })
  security_question: string;

  @Column({ type: "text", nullable: true })
  security_answer: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "text", nullable: true })
  last_login: string;

  @Column({ type: "text" })
  ip_address: string;

  @Column({ type: "text" })
  nickname: string;

  @Column({ type: "text" })
  status: string;
}
