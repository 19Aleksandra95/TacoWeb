import React, { Component } from 'react';
import css from './ProductForm.module.css';

export default class ProductForm extends Component {
  /* Aby funkcjonował ProductForm trzeba dodac przetwarzanie martwego html*/

  handleSubmit = event => {
    event.preventDefault();
    const title = event.currentTarget.elements.title.value;
    const price = event.currentTarget.elements.price.value;
    const discount = event.currentTarget.elements.discount.value;
    const hasDiscount = event.currentTarget.elements.hasDiscount.value;

    const productData = {
      title,
      price: Number.parseFloat(price),
      discount: hasDiscount ? Number.parseFloat(discount) : null,
    };

    console.log('Form Succesfully Submit', productData);
  };

  render() {
    return (
      /* Tu w formie wynosimy dane z App.js z const ProductData które chcemy uwidocznic na stronie */
      /* handleSubmit dodajemy w formę dlatego że dzięi temu możemy zapisac coś nie naciskając button a wciskając już enter */
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Title:</p>
          <input type="text" name="title" />
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Price:</p>
          <input type="text" name="price" />
        </label>
        <label>
          <input type="checkbox" name="hasDiscount" />
          Have you discount?
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Discount</p>
          <input type="text" name="discount" />
        </label>
        <button type="submit">Add Product</button>
      </form>
    );
  }
}
