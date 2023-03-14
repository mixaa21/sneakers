import {env} from "../../env";
import {DataSource} from "typeorm";

const dataSource = new DataSource(({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: env.host,
    port: env.port,
    username: env.username,
    password: env.password,
    database: env.database,
    logging: false,
    synchronize: false,
    name: 'default',
    entities:  ["src/database/entities/*{.ts,.js}","dist/src/database/entities/*{.ts,.js}"],
    migrations: ['src/database/migrations/*.ts']
}))

export default dataSource;
