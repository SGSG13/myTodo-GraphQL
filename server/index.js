const { httpServer } = require('./init/server');
const { graphqlPath, subscriptionsPath } = require('./init/apolloServer');
const connectDB = require('./init/db');
const config = require('./init/config');


async function startApp() {
    try {
        await connectDB();
        httpServer.listen(config.port, () => {
            console.log(`🚀 Server ready at http://localhost:${config.port}${graphqlPath}`);
            console.log(`🚀 Subscriptions ready at ws://localhost:${config.port}${subscriptionsPath}`);
        });
    } catch (e) {
        console.log('error', e)
    }
}

startApp();
