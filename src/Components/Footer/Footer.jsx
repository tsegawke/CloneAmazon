import clases from "./Footer.module.css";
import logo from "../../assets/images/amazon_PNG11.png";
import flag from "../../assets/images/flag.png";
const Footer = () => {
  return (
    <div className={clases.footer__container}>
      <section className={clases.footer__backToTop}>
        <a href="">Back to top</a>
      </section>

      <section className={clases.footer__links}>
        <div>
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#">See More Make Money with Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </section>
      {/* <hr className={clases.hr} /> */}
      <section className={clases.footer__bottom}>
        <section className={clases.logo}>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </section>
        <div>
          <a href="">English</a>
        </div>
        <div>
          <a href=""></a>$ USD - U.S. Dollar
        </div>
        <div>
          <a href="">
            <img src={flag} alt="" className={clases.flag} />
            United States
          </a>
        </div>
      </section>
      <section className={clases.footer__end}>
        <div className={clases.footer__endLeft}>
          <div>
            <ul>
              <li>
                <a href="">Amazon Music Stream millions of songs</a>
              </li>
              <li>
                <a href="">Amazon Business Everything For Your Business</a>
              </li>
              <li>
                <a href="">IMDbPro Get Info Entertainment Professionals Need</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">
                  Amazon Ads Reach customers wherever they spend their time
                </a>
              </li>
              <li>
                <a href="">AmazonGlobal Ship Orders Internationally</a>
              </li>
              <li>
                <a href="">
                  Kindle Direct Publishing Indie Digital & Print Publishing Made
                  Easy
                </a>
              </li>
              <li>
                <a href="">eero WiFi Stream 4K Video in Every Room</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">6pm Score deals on fashion brands</a>
              </li>
              <li>
                <a href="">
                  Amazon Web Services Scalable Cloud Computing Services
                </a>
              </li>
              <li>
                <a href="">Prime Video Direct Video Distribution Made Easy</a>
              </li>
              <li>
                <a href="">Blink Smart Security for Every Home</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">AbeBooks Books, art & collectibles</a>
              </li>
              <li>
                <a href="">
                  Audible Listen to Books & Original Audio Performances
                </a>
              </li>
              <li>
                <a href="">Shopbop Designer Fashion Brands</a>
              </li>
              <li>
                <a href="">Neighbors App Real-Time Crime & Safety Alerts</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">ACX Audiobook Publishing Made Easy</a>
              </li>
              <li>
                <a href="">Box Office Mojo Find Movie Box Office Data</a>
              </li>
              <li>
                <a href="">Woot! Deals and Shenanigans</a>
              </li>
              <li>
                <a href="">
                  Amazon Subscription Boxes Top subscription boxes – right to
                  your door
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Sell on Amazon Start a Selling Account</a>
              </li>
              <li>
                <a href="">Goodreads Book reviews & recommendations</a>
              </li>
              <li>
                <a href="">Zappos Shoes & Clothing</a>
              </li>
              <li>
                <a href="">PillPack Pharmacy Simplified</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Veeqo Shipping Software Inventory Management</a>
              </li>
              <li>
                <a href="">IMDb Movies, TV & Celebrities</a>
              </li>
              <li>
                <a href="">Ring Smart Home Security Systems</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={clases.footer__endRight}>
          <div className={clases.footer__endLinks}>
            <ul>
              <li>
                <a href="">Conditions of Use</a>
              </li>
              <li>
                <a href="">Privacy Notice</a>
              </li>
              <li>
                <a href="">Consumer Health Data Privacy</a>
              </li>
              <li>
                <a href="">Disclosure Your Ads Privacy Choices</a>
              </li>
            </ul>
          </div>
          <div>© 1996-2025, Amazon.com, Inc. or its affiliates</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
