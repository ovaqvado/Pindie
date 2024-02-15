import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardList } from "./components/CardList/CardList";
import { NewCardsFragment } from "./components/CardList/NewCardsFragment";
import { PopularCardsFragment } from "./components/CardList/PopularCardsFragment";

export default function Home() {
  return (
    <main className="main">
      <Banner />

      <CardList id="popular" title="Популярные">
        <PopularCardsFragment />
      </CardList>

      <CardList id="new" title="Новые">
        <NewCardsFragment />
      </CardList>



      <Promo />
    </main>
  );
}
