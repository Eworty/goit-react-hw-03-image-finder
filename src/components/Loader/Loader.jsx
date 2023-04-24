import { RotatingLines } from 'react-loader-spinner';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="ContainerLoader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
