import TourRelated from "../TourItem/TourItemRelated"

function PostDetailRelatedPosts() {
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      <TourRelated />
      <TourRelated />
      <TourRelated />
    </div>
  )
}

export default PostDetailRelatedPosts