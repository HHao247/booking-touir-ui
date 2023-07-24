import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'
import Button from '../shared/Button';

function ArticleLatest() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">

        <MainTitle>Tour trong nước</MainTitle>

        <div className="latest-news__list spacing">

          <div className="latest-news__card">
            <ArticleItem />
          </div>

          <div className="latest-news__card">
            <ArticleItem />
          </div>

          <div className="latest-news__card">
            <ArticleItem />
          </div>
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          <div className="latest-news__card">
            <ArticleItem />
          </div>
          <div className="latest-news__card">
            <ArticleItem />
          </div>
        </div>
        <div className="text-center">
          <Button type="primary" size="large" loading={true}>Tải thêm</Button>
        </div>
      </div>
    </div>

  )
}

export default ArticleLatest