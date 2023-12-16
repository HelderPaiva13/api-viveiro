import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/viveiro', async (req, res)=> {
  res.json({message: 'sucesso'});
});

app.listen(5000, ()=> {
  console.log('server running on localhost: 5000');
})