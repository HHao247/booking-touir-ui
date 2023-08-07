import './article-item.css';
import cls from 'classnames';
import TourItemThumb from './TourItemThumb';
import TourItemTitle from './TourItemTitle';
import TourItemInfo from './TourItemInfo';
export default function TourItem({ isStyleRow = false, isStyleCard = false, isShowAvatar = true }) {
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow
  });

  return (
    <article className={classes}>
      <TourItemThumb />
      <div className="article-item__content">
        <TourItemTitle />
        <TourItemInfo isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}
