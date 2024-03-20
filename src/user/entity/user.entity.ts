import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 30, nullable: false })
  full_name: string;

  // @Column({ type: 'varchar', length: 30 })
  // display_name: string;

  @Column({ type: "varchar", length: 40 })
  email: string;

  @Column({ type: "varchar", length: 30 })
  phone: string;

  @Column({ type: "int" })
  dob: number;

  @Column({ type: "enum", enum: ["Male", "Female", "Others"] })
  gender: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar", length: 50 })
  security_question: string;

  @Column({ type: "varchar", length: 40 })
  security_answer: string;

  @Column({ type: "varchar", length: 30 })
  address: string;

  @Column({ type: "int" })
  last_login: number;

  @Column({ type: "varchar", length: 30 })
  ip_address: number;

  @Column({ type: "varchar", length: 30 })
  nickname: string;

  @Column({ type: "varchar", length: 30 })
  status: string;
}
