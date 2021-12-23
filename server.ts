import express from 'express';
import trackPackage from './track';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(morgan('combined'));

app.post('/track', trackPackage);


app.listen((process.env.PORT || 3333), () => console.log('running...'));