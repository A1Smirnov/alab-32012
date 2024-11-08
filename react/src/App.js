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
          content="Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi?Veniam amet rerum ducimus est ea at neque alias.Temporibus perspiciatis at impedit 
                voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam 
                quo ab molestiae."
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image={blogImage2}
          altText="Vintage fashion in Vogue"
          content="Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi?Veniam amet rerum ducimus est ea at neque alias.Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur r"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
