import { DataSource } from "typeorm";
import { Task } from "../models/task";

// export const DevDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "postgres",
//     database: "backend",
//     entities: [Task]
// })

export const DevDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cskku0ij1k6c73bj5kn0-a.oregon-postgres.render.com",
    port: 5432,
    username: "unifan_pds_db_user",
    password: "3Gyy71dvYKFZImfquab6a4OYwE2wN5dn",
    database: "unifan_pds_db",
    entities: [Task],
    extra: {
        options: "-c statement_timeout=72000ms -c search_parth=monsters",
    },
})