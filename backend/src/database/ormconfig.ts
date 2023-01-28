
import {env} from "../../env";
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";
import {Products} from "./entities/Products";

const ormconfig: MysqlConnectionOptions = {
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
    entities: [Products],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
};

export default ormconfig;
