import { getGamesByCategory } from "./Data/data-utils";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardList } from "./components/CardList/CardList";

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />
      <CardList id="popular" title="Популярные" data={popularGames} />
      <CardList id="new" title="Новые" data={newGames} />
      <Promo />
    </main>
  );
}
