import { Banner } from "./commponents/Banner/Banner";
import { Promo } from "./commponents/Promo/Promo";
import { PopularCards } from "./commponents/CardsList/PopularCardsList/PopularCardsList"; 
import { NewCard } from "./commponents/CardsList/NewCardsList/NewCardsList"; 
import"./page.module.css";


export default function Home() {
  return (
    <main className="main">
   <Banner />
    <PopularCards />
    <NewCard />
   <Promo />
  </main>
  );
}
