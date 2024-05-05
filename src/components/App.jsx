import { useEffect, useState } from 'react';
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

export const App = () => {
  /*-- state to zawsze objekt --*/
  // state = {
  //   // counter: 0,
  //   products: productsData,
  //   isOpenModal: false,
  //   modalData: null, //Dodawanie modalData pokazuje jakie dane chcemy zobaczyc w ModalWindow
  // };
  // const [products, setProducts] = useState(productsData);
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // const [modalData, setModalData] = useState(null);

  /*Metoda jak można jeszcze pracowac z hookami */
  const [products, setProducts] = useState(() => {
    //callback funckja i wewnątrz wpisac componentDidMount
    const stringifieldProducts = localStorage.getItem('products');
    const parsedProducts = JSON.parse(stringifieldProducts) ?? productsData;

    return parsedProducts;
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  //kod dla componentDidUpdate
  useEffect(() => {
    const stringifieldProducts = JSON.stringify(products);
    localStorage.setItem('products', stringifieldProducts);
  }, [products]);

  /* Trzeba ze sobą zsynchronizowac produkty z state z lokalnym magazynem */

  // componentDidMount() {
  //   const stringifieldProducts = localStorage.getItem('products');
  //   const parsedProducts = JSON.parse(stringifieldProducts) ?? productsData;

  //   this.setState({ products: parsedProducts });
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.products !== this.state.products) {
  //     const stringifieldProducts = JSON.stringify(this.state.products);
  //     localStorage.setItem('products', stringifieldProducts);
  //   }
  // }

  const handleDeleteProduct = productId => {
    //[{id: "1"}, {id: "2"}, {id: "3"}]

    setProducts(products.filter(product => product.id !== productId));
    //   this.setState({
    //     products: this.state.products.filter(product => product.id !== productId),
    //   });
  };

  /* Tworzymy Callback aby dodac produkt i trzeba to dodac do Formy niżej*/
  const handleAddProduct = productData => {
    const hasDuplicate = products.some(
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

    setProducts(prevState => [...prevState, finalProduct]);
    // this.setState(prevState => ({
    //   products: [...prevState.products, finalProduct],
    // }));
  };

  /* Dwie metody na ModalWindow */

  const openModal = someDataModal => {
    setIsOpenModal(true);
    setModalData(someDataModal);

    // this.setState({
    //   isOpenModal: true,
    //   modalData: someDataModal,
    // });
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
    // this.setState({
    //   isOpenModal: false,
    //   modalData: null,
    // });
  };

  //Umowa do sortowania produktów aby zacząc od zniżki
  const sortedProducts = [...products].sort((a, b) => b.discount - a.discount);

  return (
    <div>
      <Section>
        <h1>Taco Shop 🌮</h1>
      </Section>{' '}
      {/* w sekcji trzeba wpisac forme ktorą piszemy */}
      <Section title="Product Form">
        <ProductForm handleAddProduct={handleAddProduct} />
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
                handleDeleteProduct={handleDeleteProduct}
                openModal={openModal}
              />
            );
          })}
        </div>
      </Section>
      {/* Tworzymy ModalWindow dla towarów aby zobaczyc wiecej szczegółów zamówienia */}
      {isOpenModal && <Modal closeModal={closeModal} modalData={modalData} />}
    </div>
  );
};
