import './latest-news-list.css';
import MainTitle from '../shared/MainTitle';
import TourDL from '../TourItem';
import { useSelector } from 'react-redux';


function TourList() {
  const postsTour = useSelector((state) => state.POST.postsTour);
  return (
    <div className="latest-news section" style={{ backgroundColor: '#ECF0F5' }}>
      <div className="tcl-container">
        <MainTitle>Tour du lịch trong nước</MainTitle>
        <div className="latest-news__list spacing">
          {
            postsTour.map((item,index) => (
              <div className="latest-news__card" key={index}>
                <TourDL data={item}  />
              </div>
            ))
          }
        </div>
        {/* <div className="text-center">
          <Button type="primary" size="large" loading={false}>
            Xem thêm
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default TourList;
