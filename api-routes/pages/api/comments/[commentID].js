import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentID } = req.query;
  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentID)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentID)
    );
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentID)
    );
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
