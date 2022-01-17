import { useState } from "react";
export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  // const [commentUpdate, setCommentUpdate] = useState("");

  //   fetch comments from the apa
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  // submit a comment(making a POST request)
  const SubmitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-type": "application/json" },
    });
    // convert the response to json
    await response.json();
    fetchComments();
  };

  const DeleteComment = async (commentID) => {
    const response = await fetch(`/api/comments/${commentID}`, {
      method: "DELETE",
      body: JSON.stringify({ comment }),
      headers: { "Content-type": "application/json" },
    });
    // convert the response to json
    await response.json();
    fetchComments();
  };

  // const updateComment = async (commentID) => {
  //   const response = await fetch(`/api/comments/${commentID}`, {
  //     method: "PATCH",
  //   });
  //   // convert the response to json
  //   const data = await response.json();
  //   setCommentUpdate(data);
  //   fetchComments();
  //   console.log(data);
  // };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={SubmitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>

      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={() => DeleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
