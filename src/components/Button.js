import MailLogo from "./logos/Icon.png";
import Linkedin from "./logos/Vector.png";

export default function Button() {
  return (
    <div className="button">
      <button className="email-button">
        <img src={MailLogo} />
        Email
      </button>
      <button className="linkedin-button">
        <img src={Linkedin} />
        Linkedin
      </button>
    </div>
  );
}
