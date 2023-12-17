import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const prisma = new PrismaClient();


app.use(express.json());
app.use(cors());

app.get('/api/viveiro', async (req, res)=> {
  try {
    const a = await prisma.$connect();
    res.json({message: 'sucesso'+a});
  } catch (error) {
    res.json(JSON.stringify(error))
  }
});

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
  console.log(`server running on localhost: ${PORT}`);
})