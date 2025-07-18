import AnimeCardSkeleton from "../../../components/AnimeCardSkeleton";
import AnimeCard from "../../../components/AnimeCard";
import AnimeRankBar from "../../../components/AnimeRankBar";
import AnimeRankSkeleton from "../../../components/AnimeRankSkeleton";
import PostBox from "../../../components/PostBox";

const Main = ({
  animes,
  ranks,
  setCurrentPage,
  showContactModal,
  isLoading,
  isRanksLoading,
  searchQuery,
}) => {
  const totalPages = 5;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
      <section id="home-main">
        <div className={`home__container ${showContactModal && "hide"}`}>
          <div className="home__row">
            <div className="anime-tab">
              <div className="anime__contents">
                <div className="anime__first-4">
                  <h1 className="anime__first-4--header">{searchQuery? `Showing results for "${searchQuery}"` : "Anime" }</h1>
                  <div className="anime__first-4--content">
                    {isLoading
                      ? Array.from({ length: 4 }).map((_, index) => (
                          <AnimeCardSkeleton key={index} />
                        ))
                      : (animes || []).length > 0
                      ?           
                      animes
                          .map((anime, index) => (
                            <AnimeCard
                              id={anime?.mal_id}
                              animeImg={anime?.images.jpg.image_url}
                              animeTitle={anime?.title}
                              animeTitleEnglish={anime?.title_english}
                              animeTitleJapanese={anime?.title_japan}
                              animeSynopsis={anime?.synopsis}
                              key={index}
                              animeAdultRated= {anime?.genres?.some(genre => genre.name === "Hentai" || genre.name === "Ecchi" || genre.name === "Erotica")}
                              animeCensor = {anime?.genres?.some(genre => genre.name === "Hentai")}
                            />
                          ))
                          .slice(0, 4)
                      : 
                      Array.from({ length: 4 }).map((_, index) => (
                          <AnimeCardSkeleton key={index} />
                        ))
                        }
                  </div>
                </div>
                <div className="anime__remains">
                  <h1 className="anime__remains--header">The Rest</h1>
                  <div className="anime__remains--content">
                    {isLoading
                      ? Array.from({ length: 21 }).map((_, index) => (
                          <AnimeCardSkeleton key={index} />
                        ))
                      : (animes || []).length > 0
                      ? 
                      animes
                          .map((anime, index) => (
                            <AnimeCard
                              id={anime?.mal_id}
                              animeImg={anime?.images.jpg.image_url}
                              animeTitle={anime?.title}
                              animeTitleEnglish={anime?.title_english}
                              animeTitleJapanese={anime?.title_japan}
                              animeSynopsis={anime?.synopsis}
                              key={index}
                              animeAdultRated= {anime?.genres?.some(genre => genre.name === "Hentai" || genre.name === "Ecchi" || genre.name === "Erotica")}
                              animeCensor = {anime?.genres?.some(genre => genre.name === "Hentai")}
                            />
                          ))
                          .slice(4, 25)
                      :
                       Array.from({ length: 21 }).map((_, index) => (
                          <AnimeCardSkeleton key={index} />
                        ))
                        }
                  </div>
                </div>
                <div className="anime__pagination">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className="anime__pagination--wrapper anime__next-page clickable"
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div className="featured">
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
                              rankImg={rank?.images.jpg.image_url}
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

export default Main;
