// tools
import { Link } from "react-router-dom";

// styles
import './Card.css';

export default function Card({ recipe }) {
  return (
    <div className='card'>
      <h3>{ recipe.title }</h3>

      <p>Takes: { recipe.cookingTime } to cook</p>
      <div>
        { recipe.method.substring(0, 100) } ...
      </div>

      <Link to={ `/recipes/${recipe.id}` } className='btn'>Cook this ...</Link>
    </div>
  );
}
