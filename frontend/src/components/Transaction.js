import { numberWithCommas } from '../utils/format';
import { deleteTransaction } from '../features/transactions/transactionSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import Panel from './Panel';


export const Transaction = ({ transaction }) => {
  const dispatch = useDispatch()
  const sign = transaction.amount < 0 ? '-' : '+';

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
      <button onClick={() => dispatch(deleteTransaction(transaction._id))} className="delete-btn"><i className="fas fa-trash-alt"></i></button>
      <button onClick={openModal} className="edit-btn"><i className="fas fa-pen-square"></i></button>
      <Panel modalIsOpen={modalIsOpen} closeModal={closeModal } transaction={transaction}/>
    </li>

  )
}
