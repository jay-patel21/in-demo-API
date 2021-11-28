import app from './app';
import { connectDb } from './config/db';

const PORT = process.env.NODE_PORT;

console.log('app running');
connectDb();
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})




