"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const typeorm_calculate_1 = require("../entities/typeorm-calculate");
class AppDataSource {
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new typeorm_1.DataSource({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: true,
            logging: true,
            entities: [typeorm_calculate_1.TypeOrmCalculate],
            subscribers: [],
            migrations: []
        });
        return this.instance;
    }
}
exports.AppDataSource = AppDataSource;
//# sourceMappingURL=app-data-source.js.map