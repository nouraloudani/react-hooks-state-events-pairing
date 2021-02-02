import Comment from "./Comment";

function CommentList({comments}) {
  // <h2 {comments.length} Comments />
  let commentsArray = comments.map(comment =>{
    return (
      <Comment
        key = {comment.id}
        user = {comment.user}
        comment = {comment.comment}
      />
    );
  })
return <main>commentsArray</main>
}

export default CommentList;