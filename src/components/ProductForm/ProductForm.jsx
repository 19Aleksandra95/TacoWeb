// import React, { useState } from 'react';
// import css from './ProductForm.module.css';
// const ProductForm = ({ handleAddProduct }) => {
//   /* Aby funkcjonował ProductForm trzeba dodac przetwarzanie martwego html*/
//   /* Tworzymy formę kontrolowaną */

//   // state = {
//   //   title: '',
//   //   price: '',
//   //   hasDiscount: false,
//   //   discount: '',
//   // };
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [hasDiscount, setHasDiscount] = useState(false);
//   const [discount, setDiscount] = useState('');

//   const handleInputChange = event => {
//     const value =
//       event.target.type === 'checkbox'
//         ? event.target.checked
//         : event.target.value;

//     const name = event.target.name;

//     switch (name) {
//       case 'title': {
//         setTitle(value);
//         return;
//       }
//       case 'price': {
//         setPrice(value);
//         return;
//       }
//       case 'hasDiscount': {
//         setHasDiscount(value);
//         return;
//       }
//       case 'discount': {
//         setDiscount(value);
//         return;
//       }

//       default:
//         return;
//     }
//   };
//   //   this.setState({
//   //     /*dzięki temu że damy nazwę w [] bedzie czytało go jako dynamiczny klucz czyli bedzie się podstawiała nazwa jaka w danym momencie będzie potrzebna */
//   //     [name]: value,
//   //   });
//   // };

//   /* To forma niekontrolowana */
//   const handleSubmit = event => {
//     event.preventDefault();

//     const productData = {
//       title,
//       price: Number.parseFloat(price),
//       discount: hasDiscount ? Number.parseFloat(discount) : null,
//     };

//     /* z App handleAddProduct trzeba dodac do Formy aby zapracowało */
//     handleAddProduct(productData);
//     /* Dodawanie formy do oczyszczania formy */
//     setTitle('');
//     setPrice('');
//     setHasDiscount(false);
//     setDiscount('');
//     //   this.setState({
//     //     title: '',
//     //     price: '',
//     //     hasDiscount: false,
//     //     discount: '',
//     //   });
//     // };

//     return (
//       /* Tu w formie wynosimy dane z App.js z const ProductData które chcemy uwidocznic na stronie */
//       /* handleSubmit dodajemy w formę dlatego że dzięi temu możemy zapisac coś nie naciskając button a wciskając już enter */
//       <form onSubmit={handleSubmit} className={css.form}>
//         {title === 'Spaghetti' && (
//           <h2>Congratulation! You won a promocode #Re34FG!</h2>
//         )}
//         <label className={css.formLabel}>
//           <p className={css.labelText}>Title:</p>
//           <input
//             type="text"
//             name="title"
//             onChange={handleInputChange}
//             value={title}
//           />
//         </label>
//         <label className={css.formLabel}>
//           <p className={css.labelText}>Price:</p>
//           <input
//             type="text"
//             name="price"
//             onChange={handleInputChange}
//             value={price}
//           />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="hasDiscount"
//             chacked={hasDiscount}
//             onChange={handleInputChange}
//           />
//           Have you discount?
//         </label>
//         {hasDiscount && (
//           <label className={css.formLabel}>
//             <p className={css.labelText}>Discount</p>
//             <input
//               type="text"
//               name="discount"
//               onChange={handleInputChange}
//               value={discount}
//             />
//           </label>
//         )}
//         <button type="submit">Add Product</button>
//       </form>
//     );
//   };
// };

// export default ProductForm;

import React, { useState } from 'react';

import css from './ProductForm.module.css';

const ProductForm = ({ handleAddProduct }) => {
  /* Aby funkcjonował ProductForm trzeba dodac przetwarzanie martwego html*/
  /* Tworzymy formę kontrolowaną */
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discount, setDiscount] = useState('');

  /* To forma niekontrolowana */
  const handleSubmit = event => {
    event.preventDefault();

    const productData = {
      title,
      price: Number.parseFloat(price),
      discount: hasDiscount ? Number.parseFloat(discount) : null,
    };

    /* z App handleAddProduct trzeba dodac do Formy aby zapracowało */
    handleAddProduct(productData);
    /* Dodawanie formy do oczyszczania formy */
    setTitle('');
    setPrice('');
    setHasDiscount(false);
    setDiscount('');
  };

  const handleInputChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    const name = event.target.name; // 'price'

    switch (name) {
      case 'title': {
        setTitle(value);
        return;
      }
      case 'price': {
        setPrice(value);
        return;
      }
      case 'hasDiscount': {
        setHasDiscount(value);
        return;
      }
      case 'discount': {
        setDiscount(value);
        return;
      }
      default:
        return;
    }
  };

  return (
    /* Tu w formie wynosimy dane z App.js z const ProductData które chcemy uwidocznic na stronie */
    /* handleSubmit dodajemy w formę dlatego że dzięi temu możemy zapisac coś nie naciskając button a wciskając już enter */
    <form onSubmit={handleSubmit} className={`${css.form} ${css.formLarge}`}>
      {title === 'Spaghetti' && (
        <h2>Congrats! You won a promocode!! - #R3E2A1🎉</h2>
      )}
      <label className={css.formLabel}>
        <p className={css.labelText}>Title:</p>
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={title}
        />
      </label>
      <label className={css.formLabel}>
        <p className={css.labelText}>Price:</p>
        <input
          type="text"
          name="price"
          onChange={handleInputChange}
          value={price}
        />
      </label>
      <label className={css.formLabel}>
        <input
          type="checkbox"
          name="hasDiscount"
          onChange={handleInputChange}
          checked={hasDiscount}
        />{' '}
        Do you have discount?
      </label>
      {hasDiscount && (
        <label className={css.formLabel}>
          <p className={css.labelText}>Discount:</p>
          <input
            type="text"
            name="discount"
            onChange={handleInputChange}
            value={discount}
          />
        </label>
      )}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
