import { useState } from "react";

interface OrderFormProp {
  onSubmit(order: { name: string; cups: number }): void;
}

const OrderForm = ({ onSubmit }: OrderFormProp) => {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    onSubmit({name, cups})
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Chai Name</label>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />

        <label htmlFor="">Chai Cups</label>
        <input
          type="number"
          value={cups}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCups(Number(e.target.value) || 0)
          }
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default OrderForm;
