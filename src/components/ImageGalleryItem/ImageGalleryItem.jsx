import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export const ImageGalleyItem = ({
  tags,
  webformatURL,
  largeImageURL,
  onOpenModal,
}) => {
  return (
    <li className="ImageGalleryItem">
      <div onClick={() => onOpenModal(largeImageURL, tags)}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </div>
    </li>
  );
};

ImageGalleyItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
