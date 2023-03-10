import {env} from "../../env";
import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";

const ormconfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: env.host,
    port: env.port,
    username: env.username,
    password: env.password,
    database: env.database,
    logging: false,
    synchronize: false,
    name: 'default',
    entities:  [`${__dirname}/entities/*.js`],
    migrations: ['src/database/migrations/*{.js}']
};

export default ormconfig;
