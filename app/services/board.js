import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function BoardService() {
  const Board = db.Board;
  const dbo = getDatabase();

  return {
    add(req, res) {
      new Board(req.body).save(function (err) {
        if (err) {
          res.status(500).json({ message: err });
        } else {
          res.status(200).json({ ok: "ok" });
        }
      });
    },
    getPosts(req, res) {
      Board.find().exec((err, posts) => {
        res.status(200).json({ posts });
      });
    },
    getPostById(id, res) {
      Board.findById({ _id: id }).exec((err, post) => {
        res.status(200).json({ post });
      });
    },
    update(req, res) {
      Board.updateOne({ _id: req.body._id }, { $set: req.body }).exec(
        (err, post) => {
          res.status(200).json({ ok: "ok" });
        }
      );
    },
    delete(id, res) {
      Board.deleteOne({ _id: id }).exec((err, post) => {
        res.status(200).json({ ok: "ok" });
      });
    },
  };
}
