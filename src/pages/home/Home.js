// tools
import { useFetch } from '../../hooks/useFetch';

// styles & components
import './Home.css';
import Card from '../../components/Card';


export default function Home() {
  const url = 'http://localhost:3000/recipes';
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
