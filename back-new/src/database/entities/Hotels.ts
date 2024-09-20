import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Reviews } from "./Reviews";

@Entity()
export class Hotels {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stars: number;

  @Column()
  preview: string;

  @Column()
  picture_id: string;

  @OneToMany(() => Reviews, (review) => review.hotel)
  @JoinColumn()
  review: Reviews;
}
