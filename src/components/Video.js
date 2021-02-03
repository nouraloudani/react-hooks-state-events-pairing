
function Video({ embedUrl }) {
  return (
    <iframe
    width="919"
    height="525"
    src={embedUrl}
    frameBorder="0"
    title="react video"
    />
  );

}

export default Video;