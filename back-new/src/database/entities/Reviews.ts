import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotel_id: number;

  @Column()
  user_id: number;

  @Column()
  score: number;
}
