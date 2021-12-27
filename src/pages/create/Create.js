// tools
import { useState, useRef } from 'react';

// styles
import './Create.css';

export default function Create() {
  const [ title, setTitle ] = useState('');
  const [ method, setMethod ] = useState('');
  const [ time, setTime ] = useState('');
  const [ newIng, setNewIng ] = useState('');
  const [ ings, setIngs ] = useState([]);
  const ingInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, ings, method, time);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIng.trim();

    if (ing && !ings.includes(ing)) {
      setIngs(prevIngs => [ ...prevIngs, ing ]);
    }

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

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}
