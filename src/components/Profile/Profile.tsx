import { devStory } from "../../data/dev-story";
import Details from "./Details";
import Header from "./Header";

export default function Profile() {
  return (
    <div className="container mx-auto lg:max-w-4xl">
      <Header />
      <Details devStory={devStory} />
    </div>
  );
}
