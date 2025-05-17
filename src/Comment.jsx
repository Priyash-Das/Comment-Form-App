import "./Comment.css";
import { useState } from "react";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@pd",
      remarks: "Nice Job!",
      ratings: 5,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <hr />
      <hr />
      <CommentsForm addNewComment={addNewComment} />
      <hr />
      <hr />
      <h3>All comments:</h3>
      <div className="comments-container">
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp; &nbsp;
            <span>[ Rating = {comment.ratings} ]</span>
            <p>-{comment.username}</p>
          </div>
        ))}
      </div>
    </>
  );
}
