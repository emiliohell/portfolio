export default () => (
  <div className="social">
    <a
      href="https://github.com/emiliohell/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/github.svg" alt="GitHub " className="logo" />
    </a>
    <a href="mailto:me@emilioh.se" target="_blank" rel="noopener noreferrer">
      <img src="/images/send.svg" alt="Mail" className="logo" />
    </a>
    <a
      href="https://www.linkedin.com/in/emiliohell/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/linkedin.svg" alt="LinkedIn" className="logo" />
    </a>
    <style jsx>{`
      .social {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .social > a {
        margin: 1.5rem;
      }

      .logo {
        width: 3rem;
      }
    `}</style>
  </div>
);
