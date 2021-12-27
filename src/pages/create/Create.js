// tools
import { useState, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

// styles
import './Create.css';

export default function Create() {
  // form states
  const [ title, setTitle ] = useState('');
  const [ method, setMethod ] = useState('');
  const [ time, setTime ] = useState('');
  const [ newIng, setNewIng ] = useState('');
  const [ ings, setIngs ] = useState([]);
  // a refrence for keeping the focus on input field
  const ingInput = useRef(null);
  // data-posting requirements
  const url = 'http://localhost:3000/recipes';
  const { postData, error, isPending } = useFetch(url, 'POST');
  // redirect
  const navigate = useNavigate();


  // submiting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, ings, method, time);

    // creating object for post
    postData({ title, method, cookingTime: time + ' minutes', ingredients: ings });
    setTimeout(() => navigate('/'), 1000);

  };

  // adding ingredients
  const handleAdd = (e) => {
    e.preventDefault();
    // if user input had some space
    const ing = newIng.trim();

    // check if user already added an ingredient
    if (ing && !ings.includes(ing)) {
      setIngs(prevIngs => [ ...prevIngs, ing ]);
    }

    // clear the field and keeping the focus on input field
    setNewIng('');
    ingInput.current.focus();
  };

  return (
    <div className='form-container'>
      <h3 className='page-title'>Create a recipe</h3>
      <form onSubmit={ handleSubmit }>

        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            required
            onChange={ (e) => setTitle(e.target.value) }
            value={ title }
          />
        </label>

        <label>
          <span>Ingredients:</span>
          <div className='ingredients'>
            <input
              type="text"
              onChange={ (e) => setNewIng(e.target.value) }
              value={ newIng }
              ref={ ingInput }
            />
            <button className='btn' onClick={ handleAdd }>Add</button>
          </div>
          <p>{ ings.map(ing => `${ing}, `) }</p>
        </label>

        <label>
          <span>How to cook: </span>
          <textarea
            required
            onChange={ (e) => setMethod(e.target.value) }
            value={ method }
          />
        </label>

        <label>
          <span>Cooking time:</span>
          <input
            type="number"
            required
            onChange={ (e) => setTime(e.target.value) }
            value={ time }
          />
        </label>
        { error && <p>{ error }</p> }
        { isPending && <p>Please wait a moment</p> }

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}
