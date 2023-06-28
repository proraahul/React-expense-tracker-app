import './Components/Header';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import './App.css';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
          <div className='container'>
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
          </div>
    </GlobalProvider>
  );
}

export default App;
