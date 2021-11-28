
import { createConnection } from 'typeorm';



export const connectDb = async () => {
    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 9823,
            username: "postgres",
            password: "j95BbNgG0ovSfbmR5NCNG",
            database: "postgres",
            entities: [
                "src/entities/**/*.ts"
            ],
            synchronize: true,
            logging: false
        });
        console.log('ffff')
        return connection
    } catch (error) {
        console.error(error);
    }
}
