// Carousal.js
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";

const Carousal = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=edc3993b53f8473cb9c2021cb5ef73cd`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch news on component mount
    fetchNews();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>

      <div className="carouselContainer">
      <br />
      <br />
        <h1>Latest News</h1>
        <br />
        <br />
        <Carousel autoplay infinite={true} className="carousel">
          {articles.map((element) => (
            <div key={element.url} className="carouselItem">
              {/* Render other fields on the other side */}
              <div className="carouselText">
                <u><h2 className="carouselTextTitle">{element.title}</h2></u>
                <br />
                <p style={{ fontWeight: "500" }}>"{element.description}"</p>
                <br />
                <p>{element.content}</p>
                <br />
               <b> <p>{element.publishedAt}</p></b>
                {/* Add more details if needed */}
              </div>

              {/* Render image on one side */}
              {element.urlToImage && (
                <img
                  src={element.urlToImage}
                  alt="News Thumbnail"
                  className="carouselImage"
                  style={{
                    width: "40%",
                    height: "40%",
                    float: "right",
                    padding: "2rem",
                  }}
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carousal;
