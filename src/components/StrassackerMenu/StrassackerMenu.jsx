import MenuItem from "./MenuItem";
import { Button } from "./Button";
import "./StrassackerMenu.css";

const menuData = [
  {
    mtitle: "Sakral",
    imgScr:
      "https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/2023-01-13_strassacker_tobias-froehner-photography_1004.png/37998c6148ede57a878b3dd24d942903.webp",
    heading: "Sakral",
    text: "Symbole und Ritualelemente für eine besondere Erinnerungskultur",
    logo: "https://www.strassacker.com/icons/archiv/lemonize/logos/sakral-logo.svg"
  },
  {
    mtitle: "Edition",
    imgScr:
      "https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/bronzebuste-fragment-ii-jamie-salmon-4.png/78b3a6beccf8d7a9e1e5d04b21b6652f.webp",
    heading: "Edition",
    text: "Limitierte Skulpturen-Editionen international renommierter Künstler",
    logo: "https://www.strassacker.com/icons/archiv/lemonize/logos/edition-logo.svg"
  },
  {
    mtitle: "Manufaktur",
    imgScr:
      "https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/2023-01-13_strassacker_tobias-froehner-photography_1017.png/9aee3e9db830a4bfbfd9ec9a21ca57bb.webp",
    heading: "Manufaktur",
    text: "Visionen Form geben",
    logo: "https://www.strassacker.com/icons/archiv/lemonize/logos/edition-logo.svg"
  }
];

export default function StrassackerMenu() {
  return (
    <>
      <div className="d-flex flex-align-center flex-column s-menu__container">
        <div className="d-flex flex-align-center s-menu">
          <MenuItem menuData={menuData} />
        </div>
        <div className="s-menu__container-btn">
          <Button text="Über uns" />
        </div>
      </div>
    </>
  );
}
