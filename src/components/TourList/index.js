import './latest-news-list.css'

import MainTitle from '../shared/MainTitle'
import Button from '../shared/Button';
import TourDL from '../TourDL';


function TourList() {
  return (
    <div className="latest-news section" style={{ backgroundColor: '#ECF0F5' }}>
      <div className="tcl-container">
        <MainTitle>Các Tour du lịch trong nước</MainTitle>

        <div className="latest-news__list spacing">

          <div className="latest-news__card">
            <TourDL />
          </div>
          <div className="latest-news__card">
            <TourDL />
          </div>
          <div className="latest-news__card">
            <TourDL />
          </div>
        </div>
        <div className="text-center">
          <Button type="primary" size="large" loading={false}>Tải thêm</Button>
        </div>
      </div>
    </div>

  )
}

export default TourList