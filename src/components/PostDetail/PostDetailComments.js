import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm'
import ListComment from './ListComment'
import './comments.css'
import { useEffect } from 'react';
import { actFetchCommentAsync } from '../../store/post/actions';
import { useState } from 'react';

function PostDetailComments({ data }) {
  const dispatch = useDispatch()
  const [reload,setReload]=useState(false)
  useEffect(()=>{
    dispatch(actFetchCommentAsync(maTour))
    setReload(false);
  },[reload])
  
  const { maTour } = data
  const listComment = useSelector((state) => state.POST.listComment);

  return (
    <div className="post-detail__comments">
      <CommentForm maTour={maTour} setReload={setReload}/>
      <p>{listComment.length} phan hoi</p>
      <ul className="comments">
        {
          listComment.map((item, index) => (
            <ListComment data={item} key={index} />
          ))
        }

      </ul>
    </div>
  )
}

export default PostDetailComments