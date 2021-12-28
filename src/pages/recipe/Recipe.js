// tools
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

// styles
import './Recipe.css';

export default function Recipe() {
  // search bar params
  const { id } = useParams();

  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, error, isPending } = useFetch(url);

  // context hook value
  const { theme } = useTheme();

  return (
    <div className={ `details ${theme}` }>
      { isPending && <p className='loading'>Loading</p> }
      { error && <p className={ error }>{ error }</p> }
      { recipe && (
        <div>
          <h3>{ recipe.title }</h3>
          <p>Takes { recipe.cookingTime } to cook</p>
          <ul>
            { recipe.ingredients.map(ing => (
              <li key={ ing }>{ ing }</li>
            )) }
          </ul>
          <p className='method'>{ recipe.method }</p>
        </div>
      ) }
    </div>
  );
}
