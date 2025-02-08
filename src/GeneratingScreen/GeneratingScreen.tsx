import {Auto, Title, Category, Button} from './GeneratingScreenStyle'
import {Link} from 'react-router-dom'


function GeneratingScreen() {
  return (
    <div className="page">
      <Button>
        <Link to='/'>
          ← Powrót
        </Link>
      </Button>
      <Auto>
          <p>Autorozwiązywanie</p>
      </Auto>
      <div className="content">
        <Title>
            <h2>Wygeneruj Captche Obrazkową</h2>
        </Title>
        <Category>
            <p>wybierz kategorię</p>
            <button>random</button>
        </Category>
        <Button>
            GENERUJ CAPTCHE
        </Button>
      </div>
    </div>
  );
}

export default GeneratingScreen;