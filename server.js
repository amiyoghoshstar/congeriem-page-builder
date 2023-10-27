import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import router from './ui/ui.route.js';
import pageRouter from './page/page.route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());


//setup template engine
app.use(express.static(__dirname + "/public/"));
app.use('views', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'hbs');

//mongodb settings
// const mongodbUri = 'mongodb+srv://amiyoghosh00:LqFUVtVyl3DTCHJe@cluster0.cijqzbr.mongodb.net/';
// mongoose.connect(mongodbUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

app.use('/', router);
app.use('/page', pageRouter);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
