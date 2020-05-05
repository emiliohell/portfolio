import Social from "./social";

const Placeholder = ({}) => (
  <div className="container">
    <h1>Hello World!</h1>
    <h1>
      I'm <span className="gradient-pink-peach">Emilio Hellberg</span>
    </h1>
    <p>A Front End Dev & Designer student.</p>
    <Social />

    <style jsx>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
      }

      p {
        text-align: center;
        margin-top: 0.5em;
      }

      h1 {
        text-align: center;
      }

      @media screen and (min-width: 620px) {
        .container {
          font-size 1.75em;
        }
      }

      @media screen and (min-width: 1100px) {
        .container {
          font-size: 2em;
        }
      }

      @media only screen and (min-width: 1500px) {
        .container {
          font-size: 2.5em;
        }
        
      }
    `}</style>
  </div>
);

export default Placeholder;
