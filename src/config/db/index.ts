
import { createConnection } from 'typeorm';

/**
 * Creating DB connection
 */

export const connectDb = async () => {
    try {
        const connection = await createConnection({
            type: "postgres",
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: [
                "src/entities/**/*.ts"
            ],
            synchronize: true,
            logging: false
        });
        return connection;
    } catch (error) {
        console.error(error);
    }
};
