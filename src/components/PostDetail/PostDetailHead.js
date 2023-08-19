import { TourGuide } from "../../helpers";

function PostDetailHead({ data }) {
  const { diemDen, loaiTour } = data
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{"Tour tham quan "} {diemDen} {loaiTour.tenLoaiTour}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By <a href="/"><strong>{TourGuide(loaiTour.maLoaiTour)}</strong></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
