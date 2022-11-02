import React from 'react';
import img from '../assets/img/math.png';

function Home() {
  return (
    <div className="home-section">
      <img alt="home icon" src={img} />
      <h2>Welcome to Our Page!</h2>
      <p>
        Math magicians sole focus is to provide fast, comprehensive, convenient, free online
        calculators in a plethora of areas. Currently, we have around 200 calculators to help you
        &quot;do the math&quot; quickly in areas such as finance, fitness, health, math, and others,
        and we
        are still developing more. Our goal is to become the one-stop, go-to site for people who
        need to make quick calculations. Additionally, we believe the internet should be a source
        of free information. Therefore, all of our tools and services are completely free,
        with no registration required.
      </p>
    </div>
  );
}

export default Home;
