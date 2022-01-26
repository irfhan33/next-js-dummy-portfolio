import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <section className="hero">
        <div className="container about">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/dribble1.jpg" className="portfolio-image" />
                <h1 className="portfolio-title">Icon Pack Aesthetic</h1>
                <p className="portfolio-category">Icon Design</p>
              </div>
              <div className="portfolio-item">
                <img src="/dribble2.jpg" className="portfolio-image" />
                <h1 className="portfolio-title">Dashboard Exploration</h1>
                <p className="portfolio-category">UI Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
