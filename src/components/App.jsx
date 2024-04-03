import { Product } from './Product/Product';
import Section from './Section/Section';
import css from './App.module.css';
import { Component } from 'react';
import ProductForm from './ProductForm/ProductForm';
const productsData = [
  {
    id: '3',
    title: 'Tacos With Lime',
    price: 5.85,
    discount: 15,
  },
  {
    id: '4',
    title: 'Tacos With Lime Large',
    price: 10.99,
    discount: 30,
  },
  {
    id: '5',
    title: 'Tacos With Lime Small',
    price: 6.99,
    discount: null,
  },
  {
    id: '6',
    title: 'Tacos With Spicy Paprica',
    price: 15.99,
    discount: 15,
  },
  {
    id: '7',
    title: 'Tacos With Cheese',
    price: 6.99,
    discount: null,
  },
];

export class App extends Component {
  /*-- state to zawsze objekt --*/
  state = {
    // counter: 0,
    products: productsData,
  };

  handleDeleteProduct = productId => {
    //[{id: "1"}, {id: "2"}, {id: "3"}]

    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  render() {
    //Umowa do sortowania produktów aby zacząc od zniżki
    const sortedProducts = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );

    return (
      <div>
        <Section>
          <h1>Taco Shop 🌮</h1>
        </Section>{' '}
        {/* w sekcji trzeba wpisac forme ktorą piszemy */}
        <Section title="Product Form">
          <ProductForm />
        </Section>
        <Section title="Product list">
          <div className={css.productList}>
            {sortedProducts.map(product => {
              return (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  handleDeleteProduct={this.handleDeleteProduct}
                />
              );
            })}
          </div>
        </Section>
      </div>
    );
  }
}
