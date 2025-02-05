import footerLinks from "../../data/footerLinks";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <ul>
            <li>
              <img src="/img/buy-comics-digital-comics.png" alt="" />
              <a href="#">digital comics</a>
            </li>
            <li>
              <img src="/img/buy-comics-merchandise.png" alt="" />
              <a href="#">dc merchandise</a>
            </li>
            <li>
              <img src="/img/buy-comics-shop-locator.png" alt="" />
              <a href="#">subscription</a>
            </li>
            <li>
              <img src="/img/buy-comics-subscriptions.png" alt="" />
              <a href="#">comic shop locator</a>
            </li>
            <li>
              <img src="/img/buy-dc-power-visa.svg" alt="" />
              <a href="#">dc power visa</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-mid">
        <div className="container logo-bg">
          <div className="link-info">
            {footerLinks.map((footerCol) => {
              return (
                <div className="col" key={footerCol.id}>
                  <h3>{footerCol.category}</h3>
                  <ul>
                    {footerCol.links.map((link) => {
                      return (
                        <li key={link.id}>
                          <a href={link.url}>{link.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="footer-bot"></div>
    </footer>
  );
}
