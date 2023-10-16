import React from "react";
import { Link } from "react-router-dom";
import { collection, features, how } from "../data";
import { Collection, WhyUsCard, HowItWorks } from "../components";

const Home = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero-heading">Great coffee made simple.</h1>
        <p className="hero-tagline">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to="plan" className="hero-button">
          Create your plan
        </Link>
      </section>
      <section className="collection">
        <h2 className="collection__heading">our collection</h2>
        <div className="collection__list">
          {collection.map((item) => (
            <Collection key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="why-us">
        <div className="why-us__choose">
          <h2 className="why-us__choose__heading">Why choose us?</h2>
          <p className="why-us__choose__description">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="why-us__features">
          {features.map((item) => (
            <WhyUsCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="how__wrapper">
        <h2 className="how__wrapper__heading">How It Works</h2>
        <div className="how-it-works">
          {how.map((item) => (
            <HowItWorks id={item.id} {...item} />
          ))}
        </div>
      </section>
      <div className="create-your-plan">
        <Link to="plan" className="hero-button button--center">
          Create your plan
        </Link>
      </div>
    </>
  );
};

export default Home;
