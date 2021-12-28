// tools
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles & components
import Card from '../../components/Card';
import './Search.css';

export default function Search() {
  // searchbar string
  const queryString = useLocation().search;
  // split searchbar into chuncks and get the preferd param
  const queryParam = new URLSearchParams(queryString).get('q');
  // create a url with the param
  const url = 'http://localhost:3000/recipes?q=' + queryParam;
  // fetch the url
  const { data: recipes, error, isPending } = useFetch(url);

  return (
    <div className='card-grid'>
      { isPending && <p className='loading'>Loading</p> }
      { error && <p className='error'>{ error }</p> }
      { recipes && recipes.map((recipe => (
        <Card recipe={ recipe } key={ recipe.id } />
      ))) }
    </div>
  );
}
