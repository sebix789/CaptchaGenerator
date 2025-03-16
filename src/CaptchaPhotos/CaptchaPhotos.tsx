
import { useLocation } from "react-router-dom";
import {Back, Auto, Category, Main, Photos, Title, Result} from './CaptchaPhotosStyle'
import { ArrowLeft, ChevronDown, Shuffle } from "lucide-react"
import {Link} from 'react-router-dom'
import { Button } from "components/ui/button"
import { Badge } from 'components/ui/badge'
import { Switch } from "components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu"



function CaptchaPhotos(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category")
    
    return(
        <div className="page">
            <Back>
                <Link to='/generatingScreen'>
                <Button> <ArrowLeft /> Powrót</Button>
                </Link>
            </Back>
            <Auto> 
                <Switch />
                <p>Autorozwiązywanie</p>
            </Auto>
            <div className="content">
                <Category>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">{category} <ChevronDown /> </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuRadioGroup
                            >
                                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="middle">Middle</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">Chomik</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button> <Shuffle /> </Button>
                </Category>
                <Main>
                    <Badge>
                        <Title>
                            <p>Wybierz wszystkie zdjęcia na których są: </p>
                            <p>{category}</p>
                        </Title>
                    </Badge>
                    <Photos>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                        <Badge variant='outline'>
                            <img src="./images/Chomik.jpg" alt='captcha'></img>
                        </Badge>
                    </Photos>
                </Main>
                <Result>
                    <Button> Pokaż rozwiązanie </Button>
                </Result>
            </div>
        </div>
    );
}

export default CaptchaPhotos;