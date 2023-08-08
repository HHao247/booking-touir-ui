import './post-detail.css';
import PostDetailComments from './PostDetailComments';
import PostDetailRichText from './PostDetailRichText';

function PostDetailContent() {
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        {/* image of detail */}
        <img src="/assets/images/da-lat.jpg" alt="blog-title" />
      </div>
      <div className="content-padding ">
        <PostDetailRichText />
        <PostDetailComments />
      </div>
      <div className="spacing"></div>
    </div>
  );
}

export default PostDetailContent;
