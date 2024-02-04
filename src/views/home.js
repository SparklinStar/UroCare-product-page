import React from "react";

import { Helmet } from "react-helmet";

import FeatureCard from "../components/feature-card";
import Question1 from "../components/question1";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>UroCare</title>
        <meta property="og:title" content="Urocare" />
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="home-navbar-interactive navbarContainer"
        >
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <img alt="image" src="/logo-200h.jpg" className="home-image" />
              <span className="home-nav12 bodySmall">About</span>
              <span className="home-nav2 bodySmall">Features</span>
              <span className="home-nav4 bodySmall">Team</span>
              <span className="home-nav5 bodySmall">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login buttonFlat">Login</button>
              <button className="home-register buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">UroCare</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span>About</span>
                <span className="home-nav21 bodySmall">Features</span>
                <span className="home-nav3 bodySmall">Pricing</span>
                <span className="home-nav41 bodySmall">Team</span>
                <span className="home-nav51 bodySmall">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">Welcome to UroCare</h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 buttonFilled">
                <a href="https://urocare-app-jhgjtpk7mbknmw5kawvcew.streamlit.app/">
                  Get Started
                </a>
              </button>
              <button className="home-hero-button2 buttonFlat">
                Learn More →
              </button>
            </div>
          </div>
          <img alt="image" src="/wellness-500w.jpg" className="home-image1" />
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="home-text14 overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Discover the Power of UroCare
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Experience the advanced features that make UroCare your
                      ultimate urological wellness companion
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Personalized Health Insights"
                subHeading="Get personalized insights and recommendations based on your urological health data"
                rootClassName="feature-card-root-class-name2"
              ></FeatureCard>
              <FeatureCard
                heading="24/7 Support"
                subHeading="Access round-the-clock support from urological experts and professionals"
                rootClassName="feature-card-root-class-name3"
              ></FeatureCard>
              <FeatureCard
                heading="Symptom Tracker"
                subHeading="Track and monitor your urological symptoms to better understand your health"
                rootClassName="feature-card-root-class-name"
              ></FeatureCard>
              <FeatureCard
                heading="Educational Resources"
                subHeading="Access a vast library of educational resources to learn more about urological conditions and treatments"
                rootClassName="feature-card-root-class-name1"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span>About us</span>
            <h2>WHY UROCARE?</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the full potential of UroCare with our flexible pricing
                  options
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text34 heading3">INSTANT ACCESS</span>
                <span>
                  Get immediate answers to your urological queries, 24/7.
                </span>
              </div>
              <div className="home-container07">
                <div className="home-container08">
                  <span className="home-text35">✔</span>
                  <span className="bodySmall">
                    24/7 access to health articles and Chatbot
                  </span>
                </div>
                <div className="home-container09">
                  <span className="home-text36">✔</span>
                  <span>
                    Talk to UroCare without any hesitation or fear of
                    embarrasment any moment 
                  </span>
                </div>
              </div>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container10">
                <span className="home-text37 heading3">
                  EDUCATIONAL rESOURCES
                </span>
                <span>
                  Explore a wealth of information on bladder health, kidney
                  function, prostate concerns, and more.
                </span>
              </div>
              <div className="home-container11">
                <div className="home-container12">
                  <span className="home-text38">✔</span>
                  <span>
                    Gain knowledge about several urological problems  
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text40">✔</span>
                  <span>
                    Delve into detailed information on various urological
                    topics.
                  </span>
                </div>
                <div className="home-container14">
                  <span className="home-text41">✔</span>
                  <span>
                    Strives to be a reliable source for accurate, up-to-date,
                    and easily understandable content
                  </span>
                </div>
              </div>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container15">
                <span className="home-text42 heading3">
                  <span>SYMPTOM CHECKER</span>
                  <br></br>
                </span>
                <span>
                  Identify potential issues with our intuitive symptom checker
                </span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text45">✔</span>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Talk with UroCare and get personalised remedies
                  </a>
                </div>
                <div className="home-container18">
                  <span className="home-text46">✔</span>
                  <span>Get to know when to consult a doctor</span>
                </div>
                <div className="home-container19">
                  <span className="home-text47">✔</span>
                  <span>Book appointments with recommended doctors</span>
                </div>
                <div className="home-container20">
                  <span className="home-text48">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
                <div className="home-container21"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Unveiling a New Era in Urological Health Management
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Discover a revolution in urological well-being with UroCare –
                  an advanced, AI-driven platform that goes beyond traditional
                  health information resources. UroCare is not just a chatbot;
                  it&apos;s your personalized urological health companion,
                  meticulously designed to empower you with knowledge, support,
                  and guidance.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container22">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text66 heading2">Common questions</h2>
              <span className="home-text67 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container23">
              <Question1
                answer="At UroCare, we understand that urological health is a sensitive and crucial aspect of overall well-being. Our chatbot is here to empower you with reliable information, answer your questions, and guide you through common urological concerns."
                question="What is UroCare?"
              ></Question1>
              <Question1
                answer="UroCare utilizes artificial intelligence to provide personalized knowledge, support, and guidance for urological well-being."
                question="How does UroCare work?"
              ></Question1>
              <Question1
                answer="With UroCare, you can expect to receive personalized information, support, and guidance for managing your urological health effectively."
                question="What can I expect from UroCare?"
              ></Question1>
              <Question1
                answer="Yes, UroCare is designed to be suitable for individuals of all ages and backgrounds who are interested in urological well-being."
                question="Is UroCare suitable for everyone?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container24">
            <span className="logo">UroCare</span>
            <nav className="home-nav1 bodySmall home-nav1">
              <span className="home-nav11 bodySmall">About</span>
              <span className="home-nav22 bodySmall">Features</span>
              <span className="home-nav42 bodySmall">Team</span>
              <span className="home-nav52 bodySmall">Blog</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container25">
            <span className="bodySmall home-text70">
              © 2023 myCompany, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
