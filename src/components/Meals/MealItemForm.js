import { useRef } from 'react';

import './MealItemForm.css';
import Input from '../UI/Input';


function MealItemForm(props){

    const amountInputRef = useRef();    

    function submitHandler (event){
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber >5){
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return(
        <form className="form" onSubmit={submitHandler}>
            <Input ref={amountInputRef} 
                label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1'
            }}>
            </Input>
            <button className="button-item">+ Add</button>
        </form>
    );
}

export default MealItemForm;