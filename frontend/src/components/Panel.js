import Modal from 'react-modal';
import { useState } from 'react';
import { updateTransaction } from '../features/transactions/transactionSlice'
import { useDispatch } from 'react-redux'

function Panel({modalIsOpen, closeModal, transaction}) {
  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount);
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      _id: transaction._id,
      text,
      amount: +amount
    }

    dispatch(updateTransaction(newTransaction));

  }

  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    ariaHideApp={false}
  >
    <h3>Edit transaction</h3>
    <button onClick={closeModal} className='close-btn'>x</button>
  <form onSubmit={onSubmit}>
    <div className="form-control">
      <label htmlFor="text">Text</label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
    </div>
    <div className="form-control">
      <label htmlFor="amount"
        >AAmount  (negative: expense, positive: income)</label
      >
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
    </div>
    <button className="btn">Update transaction</button>
  </form>
  </Modal>
  )
}
export default Panel