import React from 'react'
export default function ListComment({data}) {

  return (
    <li className="item" >
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar3.jpg" alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">{data.ho} {data.ten}</a>
          <p className="comments__section--text">{data.noiDung}</p>
        </div>
      </div>
    </li>
  );
}
