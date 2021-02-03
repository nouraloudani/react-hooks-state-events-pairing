import { useState } from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  
  const [hideBtn, setHideBtn] = useState(true);

  function handleToggleComments() {
    setHideBtn((setHideBtn) => !setHideBtn);
  }

  const commentArray = comments.map((comment) => (
    <Comment key={comment.id} user={comment.user} comment={comment.comment} />
  ));

  return (
    <div>
        <button onClick={handleToggleComments} >
          {hideBtn ? "Hide" : "Show"} Comments
        </button>
      <h2> {comments.length} Comments </h2>
      <div> {hideBtn ? commentArray : null} </div>
    </div>
  );
}
export default CommentList;