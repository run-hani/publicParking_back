import express from 'express'
import cors from 'cors'
import BoardService from "../services/board.js";

const corsOptions = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200
}
const app = express()
app.use(cors());
app.use(function (_req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.post('/post/add', (req, res) => {
  BoardService().add(req, res);
})

app.get('/posts', cors(corsOptions), (req, res) => {
  BoardService().getPosts(req, res);
})

app.get('/post/:id', cors(corsOptions), (req, res) => {
  BoardService().getPostById(req.params.id, res);
})

app.post('/post/update', cors(corsOptions), (req, res) => {
  BoardService().update(req, res);
})

app.post('/post/:id', cors(corsOptions), (req, res) => {
  BoardService().delete(req.params.id, res);
})

export default app
