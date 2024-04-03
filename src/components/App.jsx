import { Product } from './Product/Product';
import Section from './Section/Section';
import css from './App.module.css';
import { Component } from 'react';
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

  // handleIncrement = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };
  // /*można zrobc dwoma sposobami*/

  // // this.setState(state => {
  // //   return {
  // //     counter: state.counter + 1;
  // //   }
  // // }) ✅

  // // this.setState({counter: this.state.counter + 1}); ✅

  // handleDecrement = () => {
  //   if (this.state.counter === 0) {
  //     alert('Please, stop! Counter value is already decremented.');
  //     return;
  //   }

  //   this.setState({ counter: this.state.counter - 1 });
  // };

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
          {/* <button onClick={this.handleIncrement}>Increment</button>
          <b>Counter: {this.state.counter}</b>
          <button onClick={this.handleDecrement}>Decrement</button>

          {this.state.counter >= 5 && (
            <div>Congrats! You won the discount promocode 20% OFF! #RT2ER</div>
          )} */}
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
