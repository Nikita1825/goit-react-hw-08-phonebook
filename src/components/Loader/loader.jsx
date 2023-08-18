import { BallTriangle } from 'react-loader-spinner';
import css from './loader.module.css'

export const Loader = () => {
  return (
    <div className={css.loader}>

      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="rgba(255, 199, 0, 1)"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
        
        />
        </div>
    
  );
};
