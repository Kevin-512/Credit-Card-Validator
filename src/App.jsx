import { Nav, Hero, CardGenerator, CardValidator } from "./sections";

const App = () => {
  return (
    <main className=" bg-slate-200">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="padding">
        <CardGenerator />
      </section>
      <section className="padding">
        <CardValidator />
      </section>
    </main>
  );
};

export default App;
