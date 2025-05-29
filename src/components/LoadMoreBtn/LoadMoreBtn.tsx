import css from './LoadMoreBtn.module.css'

type Props = {
  nextPage: () => void;
}

const LoadMoreBtn = ({ nextPage }: Props) => {
    return (
        <div className={css.box}>
          <button className={css.btn} onClick={()=>nextPage()}>Load more</button>
        </div>
    )
}

//

export default LoadMoreBtn;