import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

 const ImageGallery = ({ results, handleClick }) => {

    return(
    <ul className={css.list}>

	{results.map(item => 
        <li key={item.id}>
          <div>
            <ImageCard item={item} handleClick={handleClick} />
            
          </div> 
        </li>)}
	 
    </ul>
    )
}

export default ImageGallery;