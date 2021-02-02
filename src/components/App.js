import React from "react";
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

////////////
// import React from "react";
// import About from "./About";
// import ArticleList from "./ArticleList";
// import Header from "./Header";
// import blogData from "../data/blog";

// console.log(blogData);

// function App() {
//   return (
//     <div className="App">
//       <Header name={blogData.name} />
//       <About image={blogData.image} about={blogData.about} />
//       <ArticleList posts={blogData.posts} />
//     </div>
//   );
// }

// export default App;