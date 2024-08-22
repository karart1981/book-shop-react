import { BasketItem } from "./BasketItem";

export const Basket = ({
  items,
  decreaseCount,
  increaseCount,
  deleteBasketItem,
  saleItems,
  saleApplied,
}) => {
  return (
    <div>
      <h3>BasketList</h3>
      {!saleApplied && <button onClick={() => saleItems()}>Sale</button>}
      <br />
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((elm) => (
            <BasketItem
              key={elm.id}
              {...elm}
              decreaseCount={decreaseCount}
              increaseCount={increaseCount}
              deleteBasketItem={deleteBasketItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
