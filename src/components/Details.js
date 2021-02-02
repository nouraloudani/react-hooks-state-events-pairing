function Details({title, views, createdAt, upvotes, downvotes}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | {createdAt} Created At</p>
      <button>{upvotes}👍</button>
      <button>{downvotes}👎</button>
      <br></br>
      <br></br>
      <button>Hide Comments</button>
    </div>
  );
}

export default Details;