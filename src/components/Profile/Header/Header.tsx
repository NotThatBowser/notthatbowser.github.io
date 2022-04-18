import { ReactComponent as GitHubLogo } from "./github-brands.svg";
import { ReactComponent as LinkedInLogo } from "./linkedin-brands.svg";

export default function Header() {
  return (
    <header className="text-center">
      <h1 className="mt-8 text-4xl font-inter">Max Bowser</h1>
      <div className="mt-4 flex justify-center gap-8">
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
