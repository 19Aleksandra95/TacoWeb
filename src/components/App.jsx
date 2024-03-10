import { Product } from "./Product";


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
];

export const App = () => {
  return (
    <section>
      <h1>Hello World</h1>
      {productsData.map(product => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        );
      })}
      {/* <--tutaj wyklikaliśmy komponent produktu --> */}
      {/* <Product title="Taco with lime" price="10.99" discount={null} />
      <Product title="Taco Large" price="12.99" discount={2} />
      <Product title="Taco Small" price="4.99" discount={4} /> */}
    </section>
  );
};

/*--- KOMPONENT PRODUKTU ----*/
