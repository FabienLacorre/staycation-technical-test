import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;
}
