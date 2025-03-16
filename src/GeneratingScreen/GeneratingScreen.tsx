import { useState } from "react"
import {Back, Auto, Title, Category, GenerateButton} from './GeneratingScreenStyle'
import { ArrowLeft, ChevronDown, Shuffle } from "lucide-react"
import {Link} from 'react-router-dom'
import { Button } from "components/ui/button"
import { Switch } from "components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu"

function GeneratingScreen() {
  const [category, setCategory] = useState<string>('Wybierz kategorię');
  return (
    <div className="page">
      <Back>
        <Link to='/'>
          <Button> <ArrowLeft /> Powrót</Button>
        </Link>
      </Back>
      <Auto> 
        <Switch />
        <p>Autorozwiązywanie</p>
      </Auto>
      <div className="content">
        <Title>
            <h2>Wygeneruj Captche Obrazkową</h2>
        </Title>
        <Category>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{category} <ChevronDown /> </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup
            value={category} 
            onValueChange={setCategory}
            >
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="middle">Middle</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="chomik">Chomik</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
            <Button> <Shuffle /> </Button>
        </Category>
        <GenerateButton>
          <Link to={`/captchaPhotos?category=${category}`}>
            <Button className="px-8 py-4 text-lg h-14">GENERUJ CAPTCHE</Button>
          </Link>
        </GenerateButton>
      </div>
    </div>
  );
}

export default GeneratingScreen;