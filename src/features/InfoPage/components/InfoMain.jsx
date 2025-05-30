import React from "react";
import AnimeCardSkeleton from "../../../components/AnimeCardSkeleton";
import AnimeRankBar from "../../../components/AnimeRankBar";
import AnimeRankSkeleton from "../../../components/AnimeRankSkeleton";
import PostBox from "../../../components/PostBox";
import AnimeCard from "../../../components/AnimeCard";
import { useNavigate } from "react-router-dom";
import InfoTemplateSkeleton from "../../../components/InfoTemplateSkeleton";
import InfoTemplate from "../../../components/InfoTemplate";

const InfoMain = ({ animeRec, anime, ranks, showContactModal, isLoading, isRanksLoading,}) => {
  const navigate = useNavigate();

  return (
    <>
      <section id="home-main">
        <div className={`home__container ${showContactModal && "hide"}`}>
          <div className="home__row">
            <div className="anime-tab anime-info-tab">
              <div className="anime__contents">
                {isLoading ? (
                  <InfoTemplateSkeleton />
                ) : ( anime
                  ?
                  <InfoTemplate
                    showContactModal={showContactModal}
                    anime={anime}
                    navigate={navigate}
                  />
                  : 
                  < InfoTemplateSkeleton />
                )}
                <div
                  className={`anime__recommendations--content ${
                    showContactModal && "hide"
                  }`}
                >
                  <h2 className="anime__recommendations--header">
                    Recommended for you
                  </h2>
                  <div className="anime__remains--content">
                    {isLoading
                      ? Array.from({ length: 8 }).map((_, index) => (
                          <AnimeCardSkeleton key={index} />
                        ))
                      : animeRec.length > 0
                      ? animeRec
                          .map((anime, index) => (
                            <AnimeCard
                              id={anime?.entry[0]?.mal_id}
                              animeImg={
                                anime?.entry[0]?.images?.webp?.image_url
                              }
                              animeTitle={anime?.entry[0]?.title}
                              animeSynopsis={anime?.synopsis}
                              key={index}
                            />
                          ))
                          .slice(0, 8)
                      : Array.from({ length: 8 }).map((_, index) => (
                          <AnimeCardSkeleton key={index} />
                        ))}
                  </div>
                </div>
              </div>
              <div className={`featured ${showContactModal && "hide"}`}>
                <div className="anime__top-10">
                  <h1 className="anime__top-10--header">Top 10</h1>
                  <div className="anime__top-10--content">
                    {isRanksLoading
                      ? Array.from({ length: 10 }).map((_, index) => (
                          <AnimeRankSkeleton key={index} />
                        ))
                      : ranks.length > 0
                      ? ranks
                          .map((rank, index) => (
                            <AnimeRankBar
                              key={index}
                              index={index}
                              id={rank?.mal_id}
                              rankImg={rank?.images?.webp?.image_url}
                              rankTitle={rank?.title}
                              rankTitleEnglish={rank?.title_english}
                              rankTitleJapanese={rank?.title_japan}
                            />
                          ))
                          .slice(0, 10)
                      : Array.from({ length: 10 }).map((_, index) => (
                          <AnimeRankSkeleton key={index} />
                        ))}
                  </div>
                </div>
                <PostBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoMain;
