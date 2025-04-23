import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import HomeNavbar from "../layouts/Navbar";
import AnimeRankBar from "../features/HomePage/components/AnimeRankBar";

const HomePage = () => {
  return (
    <>
      <Banner page={"main"} />
      <HomeNavbar />
      <section>
        <div className="home__container">
          <div className="home__row">
            <div className="anime-tab">
              <div className="anime__contents">
                <div className="anime__first-4">
                  <h1 className="anime__first-4--header">
                    Anime
                  </h1>
                  <div className="anime__first-4--content">
                    anime card
                  </div>
                </div>
                <div className="anime__remains">
                  <h1 className="anime__remains--header">
                    The Rest
                  </h1>
                  <div className="anime__remains--content">
                    anime card
                  </div>
                </div>
              </div>
              <div className="anime__top-10">
                <h1 className="anime__top-10--header">
                  Top 10
                </h1>
                <div className="anime__top-10--content">
                  <AnimeRankBar />
                  <AnimeRankBar />
                  <AnimeRankBar />
                  <AnimeRankBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Footer />
    </>
  );
};

export default HomePage;
