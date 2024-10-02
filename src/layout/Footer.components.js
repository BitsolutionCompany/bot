import './style/Footer.modules.css';
import { useState, useEffect } from 'react';

function FOOTER() {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="data">
        de 17/02/2024 até {data.toLocaleDateString()}
      </div>
      <ul>
        <li>
          <h4>São Benedito</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/toutisaobenedito?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              Instagram
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Guaraciaba do Norte</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/toutiguaraciabadonorte?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h4>IPU</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/toutiipu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h4>Ipueiras</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/ipueirastouti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default FOOTER;