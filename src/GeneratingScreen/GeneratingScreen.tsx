import {
  Back,
  Auto,
  Title,
  Category,
  GenerateButton,
} from "./GeneratingScreenStyle";
import { ArrowLeft, ChevronDown, Shuffle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { Switch } from "components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";

function GeneratingScreen() {
  return (
    <div className="page">
      <Back>
        <Link to="/">
          <Button variant="rounded">
            {" "}
            <ArrowLeft /> Powrót
          </Button>
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
              <Button variant="roundedOutline">
                Wybierz kategorię <ChevronDown />{" "}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="middle">
                  Middle
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="rounded">
            {" "}
            <Shuffle />{" "}
          </Button>
        </Category>
        <GenerateButton>
          <Button variant="rounded" className="px-8 py-4 text-lg h-14">
            GENERUJ CAPTCHE
          </Button>
        </GenerateButton>
      </div>
    </div>
  );
}

export default GeneratingScreen;
