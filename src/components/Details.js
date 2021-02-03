import { useState } from "react";

function Details({ title, views, createdAt, upvotes, downvotes }) {

  const [ups, setUpvotes] = useState(upvotes);
  const [downs, setDownvotes] = useState(downvotes);

  function handleUp(){
    setUpvotes((up) => up + 1)
  }
  function handleDown(){
    setDownvotes((down) => down + 1)
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | {createdAt} Created At</p>
      <button onClick={handleUp} >{ups}👍</button>
      <button onClick={handleDown} >{downs}👎</button>
    </div>
  );
}

export default Details;