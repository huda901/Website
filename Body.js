import React from 'react';

function Body({ description, features, testimonials }) {
  return (
    <main>
      <section className="description">
        <h2>About Pantai Pandawa</h2>
        <p>{description}</p>
      </section>
      <section className="features">
        <h2>Features</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <p>"{testimonial.quote}"</p>
            <footer>- {testimonial.author}</footer>
          </blockquote>
        ))}
      </section>
    </main>
  );
}

export default Body;
