import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const TABLE_NAME = 'Pokemon';

export class CreatePokemonTable1642756511742 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TABLE_NAME,
        columns: [
          {
            name: 'PokemonID',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'Name',
            type: 'varchar(100)',
            isNullable: false,
          },
          {
            name: 'Url',
            type: 'varchar(320)',
            isNullable: false,
          },
          {
            name: 'Owner',
            type: 'varchar(64)',
            isNullable: true,
          },
          {
            name: 'InitialPrice',
            type: 'varchar(20)',
            isNullable: true,
          },
          {
            name: 'IsActive',
            type: 'bool',
            default: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME);
  }
}
