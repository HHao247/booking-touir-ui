import { useParams } from 'react-router-dom';
import PostDetailContent from '../components/PostDetail/PostDetailContent';
import PostDetailHead from '../components/PostDetail/PostDetailHead';
import PostDetailPrice from '../components/PostDetail/PostDetailPrice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import IconLoading from '../components/shared/IconLoading';
import { actGetPostDetailAsync } from '../store/post/actions';

function PostDetailPage() {
  const params = useParams();
  const maTour = params.maTour;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(actGetPostDetailAsync(maTour)).then(() => {
      setLoading(true)
    })
  }, [maTour,dispatch]);
  const postDetail = useSelector((state) => state.POST.postDetail);
  if (loading === false) {
    return (
      <div className="icon_center" style={{display:'flex', alignItems:'center', justifyContent:'center',height:'50vh'}}>
        <IconLoading width={250}/>
      </div>
    )
  }
  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead data={postDetail}/>
      <div className="spacing" />
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent data={postDetail}/>
            <div className="post-detail__side">
              <PostDetailPrice data={postDetail}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default PostDetailPage;
