import MainTitle from '../components/shared/MainTitle';
import { getNameSearch } from '../helpers';
import TourItem from '../components/TourItem';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchSearchTourAsync } from '../store/post/actions';

function SearchPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const keySearch = location.search;
  const keyword = getNameSearch(keySearch);
  useEffect(() => {
    dispatch(actFetchSearchTourAsync(keySearch));
  }, [keySearch]);
  const postsSearch = useSelector(state => state.POST.postsSearch);
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {postsSearch.length} kết quả tìm kiếm với từ khóa "{keyword}"
        </MainTitle>
        <div className="latest-news__list spacing">
        {postsSearch.map((item,index) => {
          return (
            <div className="latest-news__card" key={index}>
              <TourItem keyword={keyword} data={item} />
            </div>
          )
        })}
        </div>
        {/* <div className="text-center">
          <Button type="primary" size="large">
            Xem thêm
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default SearchPage;
