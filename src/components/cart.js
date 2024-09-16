function Cart() {
  const monsteraPrice = 8
  const lierrePrice = 10
  const bouquetPrice = 15
  return (
    <div>
      <h2>Votre panier</h2>
      <ul>
        <li>Un monstera - {monsteraPrice}€</li>
        <li>Un lierre - {lierrePrice}€</li>
        <li>Un bouquet de fleurs - {bouquetPrice}€</li>
      </ul>
      <p><strong>Prix total : { monsteraPrice + lierrePrice + bouquetPrice}€</strong></p>
    </div>)
}

export default Cart
