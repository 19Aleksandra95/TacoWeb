import React, { useEffect, useState } from 'react';
import { StyledModal } from './Modal.styled';

//Przepisujemy całosc z class na funckję

const Modal = ({ modalData, closeModal }) => {
  // state = {
  //   counter: 1,
  // };

  const [counter, setCounter] = useState(1);

  /* componentDidMount to funkcja jaka react wykorzysta gdy bedzie tego potrzebowac */

  // WYKORZYSTANIE USEEFFECT

  useEffect(() => {
    console.log('ADDEVENTLISTENER USE EFFECT');
    //to przerobienie kodu componentDidMount na useEffect
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    //  componentDidMount
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      // componentWillUnmount() {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  //Spróbujemy emulowaty componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('Product counter value: ' + counter);
  }, [counter]);

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  //   /* kod dla którego scroll działa ale gdy się modalka załączy przestaje */
  //   document.body.style.overflow = 'hidden';
  // }

  // componentDidUpdate(prevprops, prevState) {
  //   console.log('Modal was update (PROPS) or STATE changed');

  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  //      /* kod dla którego scroll działa ale gdy się modalka załączy przestaje */
  //      document.body.style.overflow = 'auto';

  const handleIcrementProduct = () => {
    // this.setState(prevState => ({ counter: prevState.counter + 1 }));
    //Trzeba zwrócic się do funkcji jaka będzie zmieniac stan są 2 sposoby
    setCounter(prevState => prevState + 1); //Callback funckja
    // 2) setCounter(counter + 1);
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  /* Kod dla zamknięcia modalnego okna na Escape, aby działał trzeba go dopisac do componentDidMount */

  // const handleKeyDown = event => {
  //     if (event.code === 'Escape') {
  //       closeModal();
  //     }
  //   };

  return (
    <StyledModal onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={closeModal} className="closeBtn">
          &times;
        </button>
        <h2>Product Details</h2>
        <div>
          <h3>Title:{modalData.title}</h3>
          <p>Price:{modalData.price}$</p>
          <p>Discount:{modalData.discount}$</p>
          <button onClick={handleIcrementProduct}>
            Add product: {counter}
          </button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
