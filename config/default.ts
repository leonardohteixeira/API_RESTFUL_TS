const dbUser = process.env.DB_USER;
const dbPassword= process.env.DB_PASS;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.voepogr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
};