function PostDetailHead({ data }) {
  const { diemDen, loaiTour } = data
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{"Tour tham quan "} {diemDen} {loaiTour.tenLoaiTour}</h1>
      </div>
    </div>
  );
}

export default PostDetailHead;
