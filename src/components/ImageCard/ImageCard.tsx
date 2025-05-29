import css from './ImageCard.module.css'
import { Result } from '../../App.types';


type Props = {
    item: Result;
    handleClick: (item: string) => void;
};

const ImageCard = ({ handleClick, item }: Props) => {
    return (
      <div>
        <img className={css.img} src={item.urls.small} alt={item.alt_description} 
          onClick={() => handleClick(item.urls.regular)}/>
      </div>
    );
  };

  export default ImageCard