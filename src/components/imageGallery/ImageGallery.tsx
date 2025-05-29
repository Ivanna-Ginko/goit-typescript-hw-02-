import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"
import { Result } from "../../App.types"

type Props = {
  results: Result[];
  handleClick: (item: string) => void;
}

 const ImageGallery = ({ results, handleClick }: Props) => {

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