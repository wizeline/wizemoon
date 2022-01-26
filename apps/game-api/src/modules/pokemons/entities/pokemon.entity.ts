import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'pokemon',
})
export class Pokemon {
  @PrimaryColumn({
    name: 'id',
  })
  id: number;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'url',
  })
  url: string;

  @Column({
    name: 'owner',
    nullable: true,
  })
  owner: string;

  @Column({
    name: 'initial_price',
  })
  initialPrice: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}
