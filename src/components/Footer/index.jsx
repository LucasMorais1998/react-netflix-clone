import './style.css';

const Footer = () => {
  return (
    <footer>
      <p>
        Feito com{' '}
        <span role="img" aria-label="coração">
          &#128150;
        </span>{' '}
        por Lucas
      </p>

      <p>
        Direitos de imagem para{' '}
        <a href="https://about.netflix.com/en" target="_blank">
          Netflix
        </a>
      </p>

      <p>
        Dados obtidos do site{' '}
        <a href="https://www.themoviedb.org/" target="_blank">
          themoviedb.org
        </a>
      </p>
    </footer>
  );
};

export default Footer;
