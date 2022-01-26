import Navbar from "../components/Navbar";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <section className="hero">
        <div className="container about">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
