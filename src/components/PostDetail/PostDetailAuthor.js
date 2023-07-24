import './post-author.css'
import { Link } from 'react-router-dom';
function PostDetailAuthor() {
  return (
    <>
      <div className="post-author">
        <div className="post-author__bg-avatar">
          <a href="/" className="post-author__avatar">
            <img src="/assets/images/blog-detail.jpg" alt="" />
          </a>
        </div>
        <div className="post-author__nickname">
          <a href="/">John Smith</a>
          <p>Số điện thoại :0386978780 </p>
        </div>
        <p className="post-author__desc">Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!</p>
      </div>

      <div className="card" style={{ width: "18rem", marginTop: '4rem', background: '#FFFFFF' }}>
        <img src="/assets/images/blog-detail.jpg" className="card-img-top" alt="..." />
        <div className="card-body" >
          <h2 className="card-title" style={{ marginTop: '2rem' }}>Giá : 1000000d</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link href="#" className="btn btn-primary " style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>Đặt ngay</Link>
        </div>
      </div>
    </>

  )
}

export default PostDetailAuthor