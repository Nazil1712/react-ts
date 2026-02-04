import "./App.css";
import Card from "./components/Card";
import ChaiCard from "./components/ChaiCard";
import ChaiList from "./components/ChaiList";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm";
import type { Chai } from "./types";

const chaiData: Chai[] = [
  {
    id: 1,
    name: "Masala Chai",
    price: 20,
  },
  {
    id: 2,
    name: "Ginger Chai",
    price: 25,
  },
  {
    id: 3,
    name: "Elaichi Chai",
    price: 30,
  },
  {
    id: 4,
    name: "Kashmiri Kahwa",
    price: 40,
  },
  {
    id: 5,
    name: "Green Tea Chai",
    price: 35,
  },
];

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <ChaiCard name={"Masala Chai"} price={20} isSpecial={true} /> */}
      {/* <ChaiCard name={"Ginger Chai"} price={35} isSpecial={true} /> */}

      {/* <Counter /> */}

      {/* <ChaiList items={chaiData}/> */}

      {/* <OrderForm 
        onSubmit={(order)=>{
          console.log("Placed - ",order.name)
        }}
      /> */}

      <Card 
        title="Chai aur typescript"
        footer={<p>Me footer hu</p>}
      />
    </>
  );
}

export default App;
