import express from 'express';
import bookRoutes from './routes/book.routes.js';
import errorHandler from './middlewares/error.middleware.js';
import databese from './configuration/databese.js';

const app = express();

app.use(express.json());
app.use(bookRoutes);
app.use(errorHandler);

app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not found'));

const connectDB = async () => {

    //TODO
}

async function startServer() {
    await connectDB();
    app.listen(databese.port, () => console.log(`Server running on port ${databese.port}. Press Ctrl+C to stop.`));
}

startServer();
