import React from "react";
import AnimeCard from "./components/ui/AnimeCard";
import AnimeRankBar from "./components/ui/AnimeRankBar";

const Main = () => {
  return (
    <>
      <section id="home-main">
        <div className="home__container">
          <div className="home__row">
            <div className="anime-tab">
              <div className="anime__contents">
                <div className="anime__first-4">
                  <h1 className="anime__first-4--header">Anime</h1>
                  <div className="anime__first-4--content">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <AnimeCard key={index} />
                    ))}
                  </div>
                </div>
                <div className="anime__remains">
                  <h1 className="anime__remains--header">The Rest</h1>
                  <div className="anime__remains--content">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <AnimeCard key={index} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="anime__top-10">
                <h1 className="anime__top-10--header">Top 10</h1>
                <div className="anime__top-10--content">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <AnimeRankBar index={index} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
