import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  constructor(attrs: Partial<User>) {
    Object.assign(this, attrs);
  }

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: "varchar", length: 50 })
  public firstName: string;

  @Column({ type: "varchar", length: 50 })
  public lastName: string;

  @Column({ type: "varchar", length: 50 })
  public email: string;

  @Column()
  public password: string;
}
