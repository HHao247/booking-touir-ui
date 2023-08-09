import { useParams } from 'react-router-dom';
import PostDetailContent from '../components/PostDetail/PostDetailContent';
import PostDetailHead from '../components/PostDetail/PostDetailHead';
import PostDetailPrice from '../components/PostDetail/PostDetailPrice';

function PostDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead />
      {/* tạm ổn  */}
      <div className="spacing" />
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />
            <div className="post-detail__side">
              <PostDetailPrice />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
