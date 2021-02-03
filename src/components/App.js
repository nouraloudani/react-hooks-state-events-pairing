import video from "../data/video.js";
import CommentList from "./CommentList";
import Video from "./Video";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Video
      embedUrl={video.embedUrl}
      />
      <Details
        title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}
      />
      <CommentList comments={video.comments} />

    </div>
  );
}

export default App;
