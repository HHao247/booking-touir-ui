function PostDetailRichText({ moTa }) {
  return (
    <>
    <div className="rte" dangerouslySetInnerHTML={{ __html: moTa }}></div>
    </>
  );
}

export default PostDetailRichText;
