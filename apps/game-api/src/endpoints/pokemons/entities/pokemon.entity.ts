import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({
    nullable: true,
  })
  owner: string;

  @Column({
    name: 'initial_price',
  })
  initialPrice: string;

  @Column({ default: true })
  isActive: boolean;
}
