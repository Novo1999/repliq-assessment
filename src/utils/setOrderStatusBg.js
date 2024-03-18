export const setOrderStatsBg = (order) => {
  let common = 'rounded-lg'
  if (order.status === 'Pending') {
    common = common + ' bg-yellow-500'
  } else if (order.status === 'Shipped') {
    common = common + ' bg-blue-500'
  } else {
    common = common + ' bg-green-500'
  }
  return common
}
