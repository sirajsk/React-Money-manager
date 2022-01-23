import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './App.css';
import AddBudgetModal from './components/AddBudgetModal';
import BudgetCard from './components/BudgetCard';
import { useBudgets } from './contexts/BudgetContext';

function App() {

  const [showAddBudgetModal,setshowAddBudgetModal]=useState(false)
  const {budgets}= useBudgets()
  return (
  <>
   <Container className='my-4'>
    <Stack direction='horizontal' gap="2" className='mb-4'>
      <h1 className='me-auto'>Budgets</h1>
      <Button variant='primary' onClick={()=>setshowAddBudgetModal(true)}>Add Budget</Button> 
      <Button variant='outline-primary'>Add Expense</Button>
    </Stack>
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
      gap:"1rem",
      alignItems:"flex-start"

    }}>
      {budgets.map(budget =>(

      <BudgetCard name={budget.name} 
      gray amount={budget.amount} max={budget.max}></BudgetCard>
      ))}
    </div>
  </Container>
  <AddBudgetModal show={showAddBudgetModal} handleClose={()=>setshowAddBudgetModal()} />
  </>
  )
    
}

export default App;
