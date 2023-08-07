import Button from '../components/shared/Button';
import MainTitle from '../components/shared/MainTitle';
import { getQueryStr } from '../helpers';
import TourDL from '../components/TourDL';

function SearchPage() {
  const queryStr = getQueryStr('q');

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">10 kết quả tìm kiếm với từ khóa "{queryStr}"</MainTitle>

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
          <div className="latest-news__card">
            <TourDL />
          </div>
        </div>
        <div className="text-center">
          <Button type="primary" size="large">
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
