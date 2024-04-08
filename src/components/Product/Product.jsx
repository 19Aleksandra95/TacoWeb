import css from './Product.module.css';

export const Product = ({
  title,
  price,
  discount,
  handleDeleteProduct,
  id,
  openModal,
}) => {
  const productBg = discount ? '#8cecaa' : '#c43b4e';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <img
        className={css.productImg}
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width="640"
      />
      {/*-- Zamiast nazwy Taco With Lime - piszemy {props.name} albo {title} --*/}
      <h2>{title}</h2>
      {/*--ta  umowa mówi nam że jezeli jest znizka, wtedy pokazuj ile jej jest--*/}
      {discount ? (
        <h3 className={css.discountBage}>Discount:{discount}$</h3>
      ) : (
        <p className={css.apology}>
          Sorry but discount on this type of product has expired ☹️
        </p>
      )}
      <p>Price: {price}$</p>
      <button className={css.buttonAdd} type="button">
        Add to cart
      </button>
      <button
        onClick={() => openModal({ title, price, discount })}
        className={css.buttonAdd}
        type="button"
      >
        See the details
      </button>
      <button
        onClick={() => handleDeleteProduct(id)}
        className={css.buttonAdd}
        type="button"
      >
        &times;
      </button>
    </div>
  );
};
