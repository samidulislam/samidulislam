import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Samid</title>
      </Head>
      <div className="home">
        <div className="container">
          <main>
            <div className="left">
              <span className="sub-title">Hi There!</span>
              <h1>
                I'M <span>SAMIDUL ISLAM</span>
              </h1>
              <p>Frontend Developer.</p>
            </div>
            <div className="right">
              <img src="web_developer.svg" alt="" />
            </div>
          </main>
        </div>
        <div className="short-bio">
          <h2>SHORT INTRODUCTION</h2>
          <div className="wrapper">
            <div className="left-bottom">
              <img src="avatar.jpg" alt="" />
            </div>
            <div className="right-top">
              <p>
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️ I am fluent in JavaScript, React.js,
                Next.js and HTML/CSS. My field of Interest's are building new
                Web Applications and Product. Whenever possible, I also apply my
                passion for developing products with Node.js and Modern
                Javascript Library and Frameworks like React.js and Next.js
              </p>
              <Link href={"/about"}>
                <button>Know About Me</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
