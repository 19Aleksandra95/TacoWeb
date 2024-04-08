import React, { Component } from 'react';
import { StyledModal } from './Modal.styled';

export default class Modal extends Component {
  state = {
    counter: 1,
  };

  /* componentDidMount to funkcja jaka react wykorzysta gdy bedzie tego potrzebowac */

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    /* kod dla którego scroll działa ale gdy się modalka załączy przestaje */
    document.body.style.overflow = 'hidden';
  }

  // componentDidUpdate(prevprops, prevState) {
  //   console.log('Modal was update (PROPS) or STATE changed');

  // }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
       /* kod dla którego scroll działa ale gdy się modalka załączy przestaje */
       document.body.style.overflow = 'auto';
  }

  handleIcrementProduct = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  /* Kod dla zamknięcia modalnego okna na Escape, aby działał trzeba go dopisac do componentDidMount */

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <StyledModal onClick={this.handleOverlayClick}>
        <div className="modal">
          <button onClick={this.props.closeModal} className="closeBtn">
            &times;
          </button>
          <h2>Product Details</h2>
          <div>
            <h3>Title:{this.props.modalData.title}</h3>
            <p>Price:{this.props.modalData.price}$</p>
            <p>Discount:{this.props.modalData.discount}$</p>
            <button onClick={this.handleIcrementProduct}>
              Add product: {this.state.counter}
            </button>
          </div>
        </div>
      </StyledModal>
    );
  }
}
