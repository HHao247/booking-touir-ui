import React from 'react'
import { useState } from 'react';
import { formatDateComment } from '../../helpers';
import { useDispatch } from 'react-redux';
import { actPostsComment } from '../../store/user/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CommentForm({maTour,setReload}) {

  const dispatch = useDispatch();
  const [formData,setFormData]=useState({
    maTour:maTour,
    noiDung:'',
    thoiGian:formatDateComment()
  })
  const handleCommentChange = (event) => {
    setFormData({
      ...formData,
      noiDung: event.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actPostsComment(formData)).then((res)=>{
      if (res.ok) {
        toast.success('Phản hồi thành công!', {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 5000 
        });
        setReload(true)
      }else{
        toast.error('Phản hồi thất bại!', {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 5000 
        });
      }
    })
    setFormData({
      ...formData,
      noiDung: ''
    });
  };

  return (
    <div className="comments__form">
        <div className="comments__form--control">
          <textarea value={formData.noiDung} onChange={handleCommentChange}/>
        </div>
        <div className="text-right">
          <button className="btn btn-default" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
  )
}
