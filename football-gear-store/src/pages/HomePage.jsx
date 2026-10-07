import Hero from '../components/Hero'

function HomePage() {
  return (
    <main>
      <Hero
        title="Gear Up for Game Day"
        subtitle="Shop quality football gear built for performance."
        buttonText="Shop Now"
      />

      <section className="home-intro">
        <h2>Why Shop With Us?</h2>
        <p>
          Football Gear Store provides quality football equipment for
          athletes who want to perform their best on game day. Browse our
          selection of helmets, gloves, cleats, protective equipment, and
          other football essentials.
        </p>
      </section>
    </main>
  )
}

export default HomePage