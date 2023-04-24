import { Component } from 'react';
import { getImages } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImage: '',
    tags: '',
    total: 0,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }
  getImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return toast.error("We didn't find anything for this search");
      }
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  onOpenModal = (largeImage, tags) => {
    this.setState({ showModal: true, largeImage, tags });
  };

  onCloseModal = () => {
    this.setState({ showModal: false, largeImage: '', tags: '' });
  };

  render() {
    const { images, isLoading, showModal, total, error, largeImage, tags } =
      this.state;
    const totalPage = total / images.length;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery gallery={images} onOpenModal={this.onOpenModal} />
        )}
        {totalPage > 1 && !isLoading && images.length !== 0 && (
          <Button onClick={this.onLoadMore} />
        )}
        {showModal && (
          <Modal
            largeImage={largeImage}
            tags={tags}
            onCloseModal={this.onCloseModal}
          />
        )}
        {error && <p>We didn't find anything for this search</p>}
        <ToastContainer autoClose={1000} />
      </div>
    );
  }
}
