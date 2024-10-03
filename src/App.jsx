import { Nav, Hero, CardGenerator, CardValidator } from "./sections";

const App = () => {
  return (
    <main className="container mx-auto">
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <CardGenerator />
      </section>
      <section>
        <CardValidator />
      </section>
    </main>
  );
};

export default App;
