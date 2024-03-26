
const currencyFormat = (number: number) => {
  const format = new Intl.NumberFormat(undefined, {style: "currency", currency : "CAD"})
  return format.format(number)
}

export default currencyFormat