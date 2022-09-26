import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1664173584037 } from 'src/migrations/1664173584037-CoffeeRefactor';
import { SchemaSync1664174006536 } from 'src/migrations/1664174006536-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1664173584037, SchemaSync1664174006536],
});
