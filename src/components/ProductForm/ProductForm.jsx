import React, { Component } from 'react';
import css from './ProductForm.module.css';

export default class ProductForm extends Component {
  /* Aby funkcjonował ProductForm trzeba dodac przetwarzanie martwego html*/
  /* Tworzymy formę kontrolowaną */

  state = {
    title: '',
    price: '',
    hasDiscount: false,
    discount: '',
  };
  handleInputChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    const name = event.target.name;
    this.setState({
      /*dzięki temu że damy nazwę w [] bedzie czytało go jako dynamiczny klucz czyli bedzie się podstawiała nazwa jaka w danym momencie będzie potrzebna */
      [name]: value,
    });
  };

  /* To forma niekontrolowana */
  handleSubmit = event => {
    event.preventDefault();

    const hasDiscount = this.state.hasDiscount;

    const productData = {
      title: this.state.title,
      price: Number.parseFloat(this.state.price),
      discount: hasDiscount ? Number.parseFloat(this.state.discount) : null,
    };

    /* z App handleAddProduct trzeba dodac do Formy aby zapracowało */
    this.props.handleAddProduct(productData);
  };

  render() {
    return (
      /* Tu w formie wynosimy dane z App.js z const ProductData które chcemy uwidocznic na stronie */
      /* handleSubmit dodajemy w formę dlatego że dzięi temu możemy zapisac coś nie naciskając button a wciskając już enter */
      <form onSubmit={this.handleSubmit} className={css.form}>
        {this.state.title === 'Spaghetti' && <h2>Congratulation! You won a promocode #Re34FG!</h2>}
        <label className={css.formLabel}>
          <p className={css.labelText}>Title:</p>
          <input
            type="text"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Price:</p>
          <input
            type="text"
            name="price"
            onChange={this.handleInputChange}
            value={this.state.price}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="hasDiscount"
            chacked={this.state.hasDiscount}
            onChange={this.handleInputChange}
          />
          Have you discount?
        </label>
        {this.state.hasDiscount && <label className={css.formLabel}>
          <p className={css.labelText}>Discount</p>
          <input
            type="text"
            name="discount"
            onChange={this.handleInputChange}
            value={this.state.discount}
          />
        </label>}
        <button type="submit">Add Product</button>
      </form>
    );
  }
}
