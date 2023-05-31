import fastify from "fastify";
import { knex } from "./database";
import { table } from "console";

const app = fastify()

app.get('/hello', async () => {
    const tables = await knex('sqlite_shema').select('*')

    return tables
})

app.listen({
    port: 3333,

})
.then(() => {
    console.log('HTTP Server Running!!')
    
})