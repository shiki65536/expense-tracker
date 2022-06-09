import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getTransactions,  reset } from '../features/transactions/transactionSlice'

import { Balance } from '../components/Balance';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { transactions, isLoading, isError, message } = useSelector(
    (state) => state.transactions
  )


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }
    dispatch(getTransactions())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <Balance transactions={transactions}/>
      </section>
      
      <IncomeExpenses transactions={transactions}/>


      <section className='content'>
        <TransactionList transactions={transactions}/>

      </section>
      <section>
        <AddTransaction />
      </section>
    </>
  )
}

export default Dashboard
