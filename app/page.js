import { Banner } from "./components/Banner/Banner"; 
import { Promo } from "./components/Promo/Promo";
import { PopularCardsList } from "./components/CardList/PopularCardsList";
import { NewCardsList } from "./components/CardList/NewCardsList";
export default function Home() {
  return (
    <main className="main">
   <Banner />
    <PopularCardsList />
    <NewCardsList />
    <Promo />
  </main>
  );
}
