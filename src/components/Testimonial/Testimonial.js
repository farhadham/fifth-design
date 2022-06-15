import React from "react";
import styles from "./Testimonial.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Container from "../Container/Container";
import "swiper/css/autoplay";
import {
  CA,
  CZ,
  IL,
  MY,
  NL,
  NZ,
  US,
  TT,
  IT,
  GB,
  TR,
  FR,
  AE,
  ES,
  CH,
} from "country-flag-icons/react/3x2";

const Testimonial = ({ color, lines }) => {
  return (
    <div className={styles.wrapper}>
      <Container lines={lines}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Testimonials</h2>
          <div className={styles.total}>
            <Swiper
              spaceBetween={50}
              slidesPerView={window.innerWidth > 720 ? 2 : 1}
              autoplay={{ disableOnInteraction: true }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    Thegirltate{" "}
                    <US title="United States" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    “My request was a bit of a strange one and I'm not someone
                    with much knowledge of musical terms, but despite me not
                    knowing how to exactly communicate what I wanted, my result
                    was above and beyond what I could've hoped for. It was
                    prompt, completely custom, and all of my requests were
                    reflected in the final product. I love it and would
                    definitely recommend this seller to others.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    justisrendon{" "}
                    <US title="United States" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Far was an absolute pleasure to work with at every step of
                    the way! Understood all the requirements, executed on them
                    well, and made all the many revisions we had until it was
                    exactly how we wanted it! Cannot recommend this service
                    enough. Communication was also fast, clear, and was always
                    precise! I will certainly be booking this service in the
                    future as he has earned the credibility from me 100%!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    missedthepar473{" "}
                    <CA title="Canada" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "It's always fun working with Far such a incredible person
                    and he's always making high quality songs. Thanks again. If
                    you need work this is your guy to go to you won't be
                    disappointed!!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    civilpsych <US title="US" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "“Far” is an incredible talent! We had great communication
                    and he worked hard to meet our needs. We look forward to
                    future projects!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    padronhosnai <CZ title="CZ" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Very clear communication, great skills, awesome delivery.
                    Exceeded my expectations!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    wantedz <NZ title="NZ" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Extremely talented composer and a pleasure to work with. I
                    highly recommend Far."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    israelidanny <IL title="IL" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "I couldn't be happier! All my instructions were taken into
                    account and the result is absolutely amazing."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    w04m00 <MY title="MY" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Great gig! I got my audio file real fast, he understood
                    clearly what I wanted; no revisions needed. I liked what I
                    got."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    jolleberlikum <NL title="NL" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "I really like that I got what I was looking for. Definitely
                    worth it! Thank you for your effort."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    vishaldreamweav <TT title="TT" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Well done, excellent composer with attention to detail"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    simonelungarell <IT title="IT" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Mi è piaciuta molto la sua attenzione ai dettagli e a far
                    in modo che il cliente sia soddisfatto del risultato finale,
                    a prescindere dal numero di revisioni."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    reginabashta980 <GB title="GB" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Great job! He took the time to ask questions before
                    starting and got it right the first time. Very very happy
                    with the product."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    mcwalz <US title="US" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Amazing finished project and super easy to work with!
                    Wonderful instrumentation and created a beautiful track for
                    my needs. Worked fast through revisions and was open to
                    feedback!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    woahzone <US title="US" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "An absolute pleasure, this experience is forever in my
                    heart. Patient and quick to understand and make. Makes no
                    judgment on changes and very understanding. Looking for a
                    job well done? This is a job done with supreme excellence. I
                    look forward to working with again and again should ever the
                    need arise."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    muratbatmaz <TR title="TR" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "This is my second order with faraji2000. Yesterday, he
                    delivered exactly the song I had envisioned. I'm not a
                    musician. I just gave him a sample of what I like and then
                    asked for minor additions and modifications. He understood
                    my brief immediately and delivered in less than 12 hours.
                    Today, after listening to the song a hundred times, I had to
                    come back and ask for another song -- again, the result is
                    fantastic. He is creative and understanding. Thank you."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    koperia <FR title="FR" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "Awesome job! Faraji was able to start working on my
                    emergency project very quickly and I got the perfect result
                    that I wanted. Thank you very much for your hard work!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    elhabtiproduct <AE title="AE" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "He was extremely collaborative and fun to work with. He's
                    extremely fast and went above and beyond to provide an
                    excellent service. He provided the finished track in 36
                    hours which is less than half the time advertised. I look
                    forward to working with him again in the future."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    galagracia274 <ES title="ES" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>
                    "It was a great experience, he is very kind and helpful. He
                    works hard until he gets what you are looking for. I would
                    highly recommend him and I will definitely repeat!"
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.cont}>
                  <p className={styles.user}>
                    terencedufresne <CH title="CH" className={styles.flag} />
                  </p>
                  <p className={styles.where} style={{ color }}>
                    Fiverr.com
                  </p>
                  <p className={styles.desc}>"Very happy, great work!"</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
