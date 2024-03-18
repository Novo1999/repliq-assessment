export const calculateCartTotal = (cart) => {
  return cart
    .reduce((acc, curr) => {
      return acc + curr.quantity * curr.price
    }, 0)
    .toFixed(2)
}
