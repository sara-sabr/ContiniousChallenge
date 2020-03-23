module.exports = [{
  name: "default",
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}', 'src/**/*.entity.ts'],
  migrationsTableName: "typeorm_migration",
  migrations: ["dist/**/migration/*.js", "src/**/migration/*.ts"],
  synchronize: false,
  cli: {
    migrationsDir: "src/foundation/migration"
  }
},
{
  name: "seed",
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}', 'src/**/*.entity.ts'],
  migrationsTableName: "typeorm_seed",
  migrations: ["dist/**/seed/*.js", "src/**/seed/*.ts"],
  synchronize: false,
  cli: {
    migrationsDir: "src/foundation/seed"
  }
}
]