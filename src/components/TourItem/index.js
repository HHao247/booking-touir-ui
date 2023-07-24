import './article-item.css';
import cls from 'classnames';
import TourItemDesc from './TourItemDesc';
import TourItemThumb from './TourItemThumb';
import TourItemTitle from './TourItemTitle';
import TourItemInfo from './TourItemInfo';
import TourItemCategories from './TourItemCategories';
import TourItemStats from './TourItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  return (
    <article className={classes}>
      <TourItemThumb />
      <div className="article-item__content">

        {isShowCategoies && <TourItemCategories />}
        {isShowCategoies && <TourItemStats />}

        <TourItemTitle />

        {isShowDesc && <TourItemDesc />}

        <TourItemInfo isShowAvatar={isShowAvatar} />
      </div>
    </article>
  )
}