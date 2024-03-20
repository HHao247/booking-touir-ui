import './post-detail.css';
import PostDetailComments from './PostDetailComments';
import PostDetailRichText from './PostDetailRichText';

function PostDetailContent({ data }) {
  const { image, moTa } = data
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={image} alt="blog-title" />
      </div>
      <div className="content-padding ">
        <PostDetailRichText moTa={moTa} />
        <PostDetailComments data={data} />
      </div>
      <div className="spacing"></div>
    </div>
  );
}

export default PostDetailContent;
