import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity({
  name: 'Pokemon',
})
export class Pokemon {
  @PrimaryColumn({
    name: 'PokemonID',
  })
  id: number;

  @Column({
    name: 'Name',
  })
  name: string;

  @Column({
    name: 'Url',
  })
  url: string;

  @Column({
    name: 'Owner',
    nullable: true,
  })
  owner: string;

  @Column({
    name: 'InitialPrice',
  })
  initialPrice: string;

  @Column({ name: 'IsActive', default: true })
  isActive: boolean;
}
