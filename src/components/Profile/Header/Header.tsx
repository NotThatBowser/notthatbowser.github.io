import "./Header.css";
import { ReactComponent as GitHubLogo } from "./github-brands.svg";
import { ReactComponent as LinkedInLogo } from "./linkedin-brands.svg";

export default function Header() {
  return (
    <header>
      <h1>Max Bowser</h1>
      <div>
        <a href="https://github.com/NotThatBowser">
          <GitHubLogo title="GitHub" width={32} height={32} />
        </a>
        <a href="https://linkedin.com/in/maxbowser">
          <LinkedInLogo title="LinkedIn" width={32} height={32} />
        </a>
      </div>
    </header>
  );
}
