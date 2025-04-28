import React from "react";
import AnimeCardSkeleton from "../../../components/AnimeCardSkeleton";
import AnimeRankBar from "../../../components/AnimeRankBar";
import AnimeRankSkeleton from "../../../components/AnimeRankSkeleton";
import PostBox from "../../../components/PostBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import ShareBox from "../../../components/ShareBox";
import AnimeCard from "../../../components/AnimeCard";
import { useNavigate } from "react-router-dom";
import SkeletonImg from "../../../assets/Skeleton.jpg"

const InfoMain = ({ anime, ranks, showContactModal }) => {
  const navigate = useNavigate();

  console.log(anime);

  return (
    <>
      <section id="home-main">
        <div className={`home__container ${showContactModal && "hide"}`}>
          <div className="home__row">
            <div className="anime-tab anime-info-tab">
              <div className="anime__contents">
                <div className="template__content">
                  <img
                    className="template__cover-bg"
                    src={anime?.images?.webp?.large_image_url}
                    alt=""
                  />
                  <button
                    onClick={() => navigate("/home")}
                    className="back__btn"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                  </button>
                  <figure className="template__img--wrapper">
                    <div className="template__g-rating">18+</div>
                    <img
                      src={anime?.images?.webp?.image_url}
                      alt=""
                      className="template__img"
                    />
                  </figure>
                  <div className="template__title">
                    <h2 className="template__title-text">
                      {anime?.title_english ||
                        anime?.title ||
                        anime?.title_japan}
                    </h2>
                    <div className="template__glass"></div>
                  </div>
                  <button className="add-to-list--btn">
                    <FontAwesomeIcon icon={faPlus} />
                    Add To List
                  </button>
                  <div className="template__details">
                    <div className="template__summary">{anime?.synopsis}</div>
                    <div className="template__self-promo">
                      Anithon is the best site to keep track of all of your
                      favorite anime! Or manga, shows, and movies! Whatever you
                      decide, it will be here.
                    </div>
                    <div className="template__share">
                      <ShareBox />
                    </div>
                    <div className="template__extra">
                      <p>
                        <b>Japanese:</b>{" "}
                        {anime?.title_japanese || "Currently Not Found"}
                      </p>
                      <p>
                        <b>Synonyms:</b>{" "}
                        {anime?.title_synonyms === ""
                          ? anime.title_synonyms
                          : "Currently Not Found"}
                      </p>
                      <p>
                        <b>Aired:</b>{" "}
                        {anime?.aired?.string || "Currently Not Found"}
                      </p>
                      <p>
                        <b>Duration:</b>{" "}
                        {anime?.duration || "Currently Not Found"}
                      </p>
                      <p>
                        <b>Status:</b> {anime?.status || "Currently Not Found"}
                      </p>
                      <p>
                        <b>MAL Score:</b>{" "}
                        {anime?.score || "Currently Not Found"}
                      </p>
                      <p>
                        <b>Genres:</b>{" "}
                        {anime?.genres?.length > 0
                          ? anime.genres.map((genre) => genre.name).join(", ")
                          : "Currently Not Found"}
                      </p>
                      <p>
                        <b>Studios:</b>{" "}
                        {anime?.studios?.length > 0
                          ? anime.studios
                              .map((studio) => studio.name)
                              .join(", ")
                          : "Currently Not Found"}
                      </p>
                      <p>
                        <b>Producers:</b>{" "}
                        {anime?.producers?.length > 0
                          ? anime.producers
                              .map((producer) => producer.name)
                              .join(", ")
                          : "Currently Not Found"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="template__content">
                  <img
                    className="template__cover-bg"
                    src={SkeletonImg}
                    alt=""
                  />
                  <button
                    onClick={() => navigate("/home")}
                    className="back__btn"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                  </button>
                  <figure className="template__img--wrapper">
                    <div className="template__g-rating">18+</div>
                    <img
                      src={SkeletonImg}
                      alt=""
                      className="template__img"
                    />
                  </figure>
                  <div className="template__title">
                    <h2 className="template__title-text">

                    </h2>
                    <div className="template__glass"></div>
                  </div>
                  <button className="add-to-list--btn">
                    <FontAwesomeIcon icon={faPlus} />
                    Add To List
                  </button>
                  <div className="template__details">
                    <div className="template__summary"></div>
                    <div className="template__self-promo"></div>
                    <div className="template__share">
                      <ShareBox />
                    </div>
                    <div className="template__extra">
                      <p>
                        <b>Japanese:</b>{" "}
                      </p>
                      <p>
                        <b>Synonyms:</b>{" "}
                      </p>
                      <p>
                        <b>Aired:</b>{" "}
                      </p>
                      <p>
                        <b>Duration:</b>{" "}
                      </p>
                      <p>
                        <b>Status:</b>{" "}
                      </p>
                      <p>
                        <b>MAL Score:</b>{" "}
                      </p>
                      <p>
                        <b>Genres:</b>
                      </p>
                      <p>
                        <b>Studios:</b>
                      </p>
                      <p>
                        <b>Producers:</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="anime__recommendations--content">
                  <h2 className="anime__recommendations--header">
                    Recommended for you
                  </h2>
                  <div className="anime__remains--content">
                    <AnimeCard />
                  </div>
                </div>
              </div>
              <div className="featured">
                <div className="anime__top-10">
                  <h1 className="anime__top-10--header">Top 10</h1>
                  <div className="anime__top-10--content">
                    {ranks.length > 0
                      ? ranks
                          .map((rank, index) => (
                            <AnimeRankBar
                              key={index}
                              index={index}
                              mal_id={rank?.mal_id}
                              rankImg={rank?.images?.jpg?.image_url}
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
