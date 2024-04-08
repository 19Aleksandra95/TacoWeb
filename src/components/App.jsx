import { Component } from 'react';
import css from './App.module.css';
import ProductForm from './ProductForm/ProductForm';
import { Product } from './Product/Product';
import Section from './Section/Section';
import { nanoid } from 'nanoid';
import Modal from './Modal/Modal';
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
    isOpenModal: false,
    modalData: null, //Dodawanie modalData pokazuje jakie dane chcemy zobaczyc w ModalWindow
  };

  /* Trzeba ze sobą zsynchronizowac produkty z state z lokalnym magazynem */

  componentDidMount() {
    const stringifieldProducts = localStorage.getItem('products');
    const parsedProducts = JSON.parse(stringifieldProducts) ?? productsData;

    this.setState({ products: parsedProducts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.products !== this.state.products) {
      const stringifieldProducts = JSON.stringify(this.state.products);
      localStorage.setItem('products', stringifieldProducts);
    }
  }

  handleDeleteProduct = productId => {
    //[{id: "1"}, {id: "2"}, {id: "3"}]

    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  /* Tworzymy Callback aby dodac produkt i trzeba to dodac do Formy niżej*/
  handleAddProduct = productData => {
    const hasDuplicate = this.state.products.some(
      product => product.title === productData.title
    );
    /* kod dla poszuku danego towaru czy jest na stronie */
    if (hasDuplicate) {
      alert(`Ups, product with this title ${productData.title} already exist!`);
      return;
    }
    /*Kod dla dodawania nowego productu*/
    const finalProduct = {
      ...productData,
      id: nanoid(),
    };

    this.setState(prevState => ({
      products: [...prevState.products, finalProduct],
    }));
  };

  /* Dwie metody na ModalWindow */

  openModal = someDataModal => {
    this.setState({
      isOpenModal: true,
      modalData: someDataModal,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      modalData: null,
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
          <ProductForm handleAddProduct={this.handleAddProduct} />
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
                  openModal={this.openModal}
                />
              );
            })}
          </div>
        </Section>
        {/* Tworzymy ModalWindow dla towarów aby zobaczyc wiecej szczegółów zamówienia */}
        {this.state.isOpenModal && (
          <Modal
            closeModal={this.closeModal}
            modalData={this.state.modalData}
          />
        )}
      </div>
    );
  }
}
