import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import RemainingBudget from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            <div classname='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className='col-sm'>
                                <RemainingBudget />
                                </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <div className="col-sm">
                                <ExpenseTotal />
                                </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            <div className="col-sm">
                                <ExpenseList />
                                </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            <div className="col-sm">
                                <ExpenseItem />
                                </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className="col-sm">
                                <AllocationForm />
                                </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
