function PostDetailRichText({ moTa }) {
  return (
    // <div className="rte">
    //   <h2>Cao Nguyên Lâm Viên Mộng Mơ</h2>
    //   <p>
    //     Đà Lạt là thành phố của muôn hoa. Dường như bao nhiêu sắc hoa đều hội tụ về thành phố này. Từ những loài hoa
    //     quen thuộc cho đến vô vàn những sắc hoa đến từ phương xa. Mẹ thiên nhiêu ưu ái dành tặng cho cao nguyên thổ
    //     nhưỡng thích hợp cho sự sinh trưởng của rất nhiều loại hoa cỏ. Cùng iVIVU khám phá ngay hôm nay!
    //   </p>
    //   <h2>Những trải nghiệm thú vị trong chương trình</h2>
    //   <p>Thả mình dưới làn nước trong mát với các hòn:</p>
    //   <p>
    //     - Thiền Viện Trúc Lâm: Vẻ đẹp Phật giáo hài hòa cùng thiên nhiên và muôn sắc hoa. Rất nhiều loài hoa đẹp và quý
    //     hiếm như Sim Tím, bông Gòn úc, Phù Dung…khiến khung cảnh càng thêm thơ mộng.
    //   </p>
    //   <p>
    //     - Khu du lịch Thác Datanla - một trong top những thác nước đẹp nhất tại Đà Lạt. Khác với những thác ghềnh khác
    //     chảy ầm ầm dữ dội thì thác Datanla mang một vẻ đẹp hoang sơ nhưng trữ tình lãng mạn.
    //   </p>
    //   <p>- Chùa Linh Phước (chùa Ve Chai) – ngôi chùa nắm giữ 11 kỉ lục Việt Nam</p>
    //   <h2>Chương trình tour</h2>
    //   <p>
    //     <strong>NGÀY 01: TPHCM / HÀ NỘI - ĐÀ LẠT NGÀN HOA ( ĂN TRƯA, TỐI)</strong>
    //   </p>
    //   <p>
    //     Sáng: Xe đón khách sân bay Liên Khương hoặc bến xe. Sau đó xe đưa quý khách về thành phố, quý khách nhập đoàn
    //     HDV đưa quý khách tham quan Dinh Bảo Đại ngôi dinh thự được chính vua Bảo Đại – vị vua cuối cùng của Việt Nam
    //     xây dựng để nghỉ ngơi và làm việc tại Đà Lạt được nhà nước cấp hạng di tích quốc gia.
    //   </p>
    //   <p>
    //     Xe và HDV đưa quý khách tiếp tục đến với Thiền Viện Trúc Lâm ngôi chùa lớn được xây dựng năm 1993 theo phái
    //     Thiền Tông với diện tích rộng 24 hecta cảnh quan đẹp nhìn xuống khu du lịch Hồ Tuyền Lâm.
    //   </p>
    //   <img src="https://cdn2.ivivu.com/2023/03/31/11/ivivu-thien-vien-truc-lam-da-lat-05.gif" alt="" />
    //   <p>
    //     - <strong>Thác Datanla</strong> là Thác nước tự nhiên tuyệt đẹp nằm giữa đại ngàn bao la cùng với không gian yên
    //     tĩnh hoang dã sẽ tạo nên những góc sống ảo tuyệt vời nhất cho chuyến du lịch tại Đà Lạt. Đến đây, quý khách sử
    //     dụng xe trượt máng mới dài nhất Đông Nam Á để xuống thác. Quý khách được trải nghiệm cảm giác lạc vào giữa rừng
    //     thông với những khúc cua, đường trượt gấp khúc sẽ tạo cho quý khách thấy được cảm giác thú vị hào hứng cùng với
    //     những đường trượt uyển chuyển. (chi phí tự túc đi máng trượt để xuống thác giá vé 200k/khách). Nếu quý khách
    //     không sử dụng máng trượt để xuống thác thì quý khách có thể chinh phục con đường quanh co xuống dốc và lên dốc
    //     dài hơn 1km để xuống tham quan check in thác nước (quý khách tự túc mua vé đi bộ giá 50k/khách).
    //   </p>
    //   <img src="https://cdn2.ivivu.com/2020/06/03/09/ivivu-thac-datanla.gif" alt="" />
    //   <p>Trưa: Quý khách về lại thành phố dùng cơm trưa tại nhà hàng. Tiếp tục hành trình</p>
    //   <p>Chiều : Xe và HDV đưa Quý khách đi tham quan :</p>
    //   <p>
    //     <strong>NGÀY 02 : ĐÀ LẠT SỨ SỞ NGÀN THÔNG ( ĂN SÁNG, TRƯA, TỐI)</strong>
    //   </p>
    //   <p>Sáng : Quý khách dùng điểm tâm sáng.</p>
    //   <p>
    //     8h15 - 8h30: Xe và HDV đưa quý khách tham quan Nông Trại Puppy Farm đây là một địa điểm du lịch Đà Lạt mới tại
    //     Đà Lạt. Quý khách check in đồi hoa trải dài bất tận với nhiều loại hoa khác nhau, vườn hoa rực rỡ sắc màu như
    //     Cẩm Tú Cầu, Cánh đồng hoa hướng dương, vườn hoa xác pháo, vườn hoa nữ hoàng xanh,…. Ngoài ra quý khách chiêm
    //     ngưỡng hàng trăm mẫu sen đá. Đến đây quý khách còn được vui đùa cùng những chú cún siêu đáng yêu và thân thiện.
    //   </p>
    //   <p>
    //     Tiếp tục hành trình tới chân núi Langbiang quý khách chinh phục núi Núi Langbiang cao 2.169m, đến đây quý khách
    //     thuê xe Jeep lên núi (tự túc 120k/người ghép xe). Quý khách trải nghiện cảm giác thú vị hào hứng của xe jeep địa
    //     hình đưa quý khách lên núi. Từ đỉnh núi quý khách sẽ cảm nhận được không khí mát mẻ dễ chịu của núi rừng cao
    //     nguyên, ngắm cảnh chụp hình bao quát thành phố Đà Lạt, hồ suối vàng, suối bạc… nghe HDV thuyết minh câu chuyện
    //     tình đầy lãng mạng của chàng Lang và nàng H’biang.
    //   </p>
    //   <img src="https://cdn2.ivivu.com/2018/07/03/16/ivivu-langbiang.jpg" alt="" />
    //   <p>
    //     <strong>NGÀY 03: ĐÀ LẠT THÔNG REO ( ĂN SÁNG)</strong>
    //   </p>
    //   <p>Sáng : Quý khách dùng điểm tâm sáng. Quý khách tự do đi chợ mua sắm đặc sản địa phương về làm quà.</p>
    //   <p>
    //     Đến giờ xe đưa quý khách ra sân bay Liên Khương, bến xe. Kết thúc chương trình. Chia tay quý khách và hẹn gặp
    //     lại.
    //   </p>
    // </div>
    <>
    <div className="rte" dangerouslySetInnerHTML={{ __html: moTa }}></div>
    </>
  );
}

export default PostDetailRichText;
