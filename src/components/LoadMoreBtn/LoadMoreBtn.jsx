import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({  nextPage, page }) => {
    return (
        <div className={css.box}>
          <button className={css.btn} onClick={()=>nextPage(page+1)}>Load more</button>
        </div>
    )
}

export default LoadMoreBtn;