import PropTypes from 'prop-types';
import { ImageGalleyItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export const ImageGallery = ({ gallery, onOpenModal }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, tags, largeImageURL, webformatURL }) => (
        <ImageGalleyItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
