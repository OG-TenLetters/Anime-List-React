import React from "react";
import ShareBox from "../../../components/ShareBox";
import PostBox from "../../../components/PostBox";

const IntroInfo = () => {
  return (
    <section id="#Intro-Info">
      <div className="intro__info--container">
        <div className="intro__info--row">
          <div className="intro__info-box--box">
            <ShareBox />
            <div className="intro__info-box--contents">
              <div className="info-box__contents--info">
                <h1 className="contents__info--title">
                  The most user friendly place for keeping track of your list
                </h1>
                <p className="contents__info--para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  nam mollitia quas animi dolorem illum ducimus, fuga
                  consectetur laudantium, voluptate quos praesentium officia,
                  vel rerum vero aliquam id quisquam ad.
                </p>
                <p className="contents__info--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt aliquam eos similique iste, cumque vitae, maxime
                  deserunt autem commodi est qui sequi veritatis iusto
                  molestiae!
                </p>
                <h2 className="contents__info--list-title">
                  1. What is Anithon?
                </h2>
                <p className="contents__info--para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Totam quas expedita praesentium in architecto quis, molestiae
                  ipsum unde consectetur, modi voluptatibus sint sed. Veritatis
                  non ea nesciunt corrupti sunt temporibus dolorum quo amet
                  magnam quis minus totam velit aut sit laudantium accusantium
                  dolores dolor dolore, a fuga unde? Nisi, quibusdam!
                </p>
                <h2 className="contents__info--list-title">2. Is it Legal?</h2>
                <p className="contents__info--para">
                  Absolutely! Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Sapiente veritatis placeat, molestiae eius
                  atque iure voluptatum reprehenderit aliquam perspiciatis quis
                  consequuntur in expedita nostrum eligendi pariatur quos quia
                  recusandae quas.
                </p>
                <h2 className="contents__info--list-title">
                  3. Why is this site ideal for me?
                </h2>
                <p className="contents__info--para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates nostrum, ipsam quibusdam reiciendis aut saepe.
                  Commodi ab numquam quasi. Culpa impedit blanditiis nobis.
                </p>
                <p className="contents__info--para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates nostrum, ipsam quibusdam reiciendis aut saepe.
                  Commodi ab numquam quasi. Culpa impedit blanditiis nobis.
                </p>
                <p className="contents__info--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  sed et veniam totam possimus vero expedita vel natus minus
                  dolorum ab corporis beatae quo consectetur animi adipisci,
                  dolorem voluptatibus.
                </p>
                <p className="contents__info--para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  fugiat magnam praesentium voluptatibus quasi, veniam iste
                  minus omnis exercitationem cupiditate fugit laborum commodi
                  temporibus, nemo sunt facere delectus atque iure nobis,
                  accusantium cumque quidem.
                </p>
                <p className="contents__info--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  placeat consequuntur laborum quia quas excepturi. Adipisci
                  perferendis, aliquid deserunt hic autem totam doloremque.
                  Obcaecati eaque natus assumenda id alias nostrum suscipit
                  tempora sit consequuntur, qui animi repellat labore aliquid
                  rerum cupiditate nulla? Sed non inventore vel id quam ratione
                  cupiditate.
                </p>
                <p className="contents__info--para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  fugiat magnam praesentium voluptatibus quasi, veniam iste
                  minus omnis exercitationem cupiditate fugit laborum commodi
                  temporibus, nemo sunt facere delectus atque iure nobis,
                  accusantium cumque quidem.
                </p>
                <p className="contents__info--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  placeat consequuntur laborum quia quas excepturi. Adipisci
                  perferendis, aliquid deserunt hic autem totam doloremque.
                  Obcaecati eaque natus assumenda id alias nostrum suscipit
                  tempora sit consequuntur, qui animi repellat labore aliquid
                  rerum cupiditate nulla? Sed non inventore vel id quam ratione
                  cupiditate.
                </p>
              </div>

              <div className="intro__info-box--post-box">
                <h1 className="info-box__post-box--title">Trending Posts</h1>
                <div className="info-box__post-box--posts">
                  <PostBox />
                  <PostBox />
                  <PostBox />
                  <PostBox />
                  <PostBox />
                <button className="info-box__post-box--btn clickable">
                  Read More...
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroInfo;
