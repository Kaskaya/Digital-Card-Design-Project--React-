import Twitter from "./logos/Twitter Icon.png";
import Facebook from "./logos/Facebook Icon.png";
import Instagram from "./logos/Instagram Icon.png";
import Github from "./logos/GitHub Icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={Twitter} />
      <img src={Facebook} />
      <img src={Instagram} />
      <img src={Github} />
    </footer>
  );
}
