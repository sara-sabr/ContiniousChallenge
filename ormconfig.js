module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}', 'src/**/*.entity.ts'],
  migrationsTableName: "typeorm_migration",
  migrations: ["dist/**/migration/*.js", "src/**/migration/*.ts"],
  synchronize: false,
  cli: {
    migrationsDir: "src/foundation/migration"
  }
}