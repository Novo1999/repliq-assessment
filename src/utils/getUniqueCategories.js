// getting unique categories
const getUniqueCategories = (products) => {
  const categories = Array.from(
    new Set(products?.map((product) => product.category))
  )

  return categories
}

export default getUniqueCategories
