import { numberWithCommas } from '../utils/format';

export const Balance = ({ transactions }) => {

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  )
}
