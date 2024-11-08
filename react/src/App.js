// ./src/App.js
import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

import blogImage1 from './assets/blog-image-1.jpg';
import blogImage2 from './assets/blog-image-2.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image={blogImage1}
          altText="Fashionable people on the street in Brooklyn"
          content="Cray ipsum, dolor sit amet consectetur adipisicing elit..."
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image={blogImage2}
          altText="Vintage fashion in Vogue"
          content="Selfies sunt, dolor sit amet consectetur adipisicing elit..."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
