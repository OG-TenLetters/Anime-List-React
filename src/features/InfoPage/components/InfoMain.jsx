import React from "react";

import AnimeCardSkeleton from "../../../components/AnimeCardSkeleton";
import AnimeRankBar from "../../../components/AnimeRankBar";
import AnimeRankSkeleton from "../../../components/AnimeRankSkeleton";
import PostBox from "../../../components/PostBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import ShareBox from "../../../components/ShareBox";
import TemplateImg from "../../../assets/Banner Piece 16.jpg";
import AnimeCard from "../../../components/AnimeCard";
import { useNavigate } from "react-router-dom";

const InfoMain = ({ animes, ranks, showContactModal }) => {
  const navigate = useNavigate();

  
  return (
    <>
      <section id="home-main">
        <div className={`home__container ${showContactModal && "hide"}`}>
          <div className="home__row">
            <div className="anime-tab anime-info-tab">
              <div className="anime__contents">
                <div>
                  <div className="template__content">
                    <img
                      className="template__cover-bg"
                      src={TemplateImg}
                      alt=""
                    />
                    <button onClick={() => navigate(-1)} className="back__btn">
                      <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </button>
                    <figure className="template__img--wrapper">
                      <div className="template__g-rating">18+</div>
                      <img src={TemplateImg} alt="" className="template__img" />
                    </figure>
                    <div className="template__title">
                      <h2 className="template__title-text">Dragon Ball</h2>
                      <div className="template__glass"></div>
                    </div>
                    <button className="add-to-list--btn">
                      <FontAwesomeIcon icon={faPlus} />
                      Add To List
                    </button>
                    <div className="template__details">
                      <div className="template__summary">
                        SON-Goku is a young boy who lives in the woods all
                        alone—that is, until a girl named Bulma runs into him in
                        her search for a set of magical objects called the
                        "Dragon Balls." Since the artifacts are said to grant
                        one wish to whoever collects all seven, Bulma hopes to
                        gather them and wish for a perfect boyfriend. Goku
                        happens to be in possession of a dragon ball, but
                        unfortunately for Bulma, he refuses to part ways with
                        it, so she makes him a deal: he can tag along on her
                        journey if he lets her borrow the dragon ball's power.
                        With that, the two set off on the journey of a lifetime.
                        They don't go on the journey alone. On the way, they
                        meet the old Muten-Roshi and wannabe disciple Kuririn,
                        with whom Goku trains to become a stronger martial
                        artist for the upcoming World Martial Arts Tournament.
                        However, it's not all fun and games; the ability to make
                        any wish come true is a powerful one, and there are
                        others who would do much worse than just wishing for a
                        boyfriend. To stop those who would try to abuse the
                        legendary power, they train to become stronger fighters,
                        using their newfound strength to help the people around
                        them along the way. [Written by MAL Rewrite]
                      </div>
                      <div className="template__self-promo">
                        Anithon is the best site to keep track of all of your
                        favorite anime! Or manga, shows, and movies! Whatever
                        you decide, it will be here.
                      </div>
                      <div className="template__share">
                        <ShareBox />
                      </div>
                      <div className="template__extra">
                        <p>
                          <b>Japanese:</b> ドラゴンボール{" "}
                        </p>
                        <p>
                          <b>Synonyms:</b> Dragonball, DB{" "}
                        </p>
                        <p>
                          <b>Aired:</b> Feb 26, 1986 to Apr 12, 1989{" "}
                        </p>
                        <p>
                          <b>Premiered:</b> Winter 1986
                        </p>
                        <p>
                          <b>Duration:</b> 24m{" "}
                        </p>
                        <p>
                          <b>Status:</b> Finished Airing{" "}
                        </p>
                        <p>
                          <b>MAL Score:</b> 8.02
                        </p>
                        <p>
                          <b>Genres:</b> Adventure Comedy Fantasy Martial Arts
                          Shounen Super Power{" "}
                        </p>
                        <p>
                          <b>Studios:</b> Toei Animation{" "}
                        </p>
                        <p>
                          <b>Producers:</b> Fuji TV, Toei Animation, Funimation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="anime__recommendations--content">
                  <h2 className="anime__recommendations--header">
                    Recommended for you
                  </h2>
                  <div className="anime__remains--content">
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
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

export default InfoMain;
