import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;
}
