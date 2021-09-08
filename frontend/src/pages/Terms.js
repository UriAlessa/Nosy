import { useState } from "react";
import styles from "../styles/terms.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {

  document.title = 'Terms | Nosy'
  const [items, setItems] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
  });

  const showOne = () => {
    if (!items.one) {
      setItems({
        ...items,
        one: true,
      });
    } else {
      setItems({
        ...items,
        one: false,
      });
    }
    console.log(items);
  };

  const showTwo = () => {
    if (!items.two) {
      setItems({
        ...items,
        two: true,
      });
    } else {
      setItems({
        ...items,
        two: false,
      });
    }
  };
  const showThree = () => {
    if (!items.three) {
      setItems({
        ...items,
        three: true,
      });
    } else {
      setItems({
        ...items,
        three: false,
      });
    }
  };
  const showFour = () => {
    if (!items.four) {
      setItems({
        ...items,
        four: true,
      });
    } else {
      setItems({
        ...items,
        four: false,
      });
    }
  };
  const showFive = () => {
    if (!items.five) {
      setItems({
        ...items,
        five: true,
      });
    } else {
      setItems({
        ...items,
        five: false,
      });
    }
  };
  const showSix = () => {
    if (!items.six) {
      setItems({
        ...items,
        six: true,
      });
    } else {
      setItems({
        ...items,
        six: false,
      });
    }
  };
  const showSeven = () => {
    if (!items.seven) {
      setItems({
        ...items,
        seven: true,
      });
    } else {
      setItems({
        ...items,
        seven: false,
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Header className={styles.header} />
        <h1>Terms of use</h1>
        <dl>
          <dd>
            <div className={styles.title} onClick={showOne}>
              <svg
                className={items.one ? styles.roteDown : styles.roteUp}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
              <h5 onClick={showOne}>1. Terms and conditions</h5>
            </div>
            {items.one && (
              <span>
                <p>Version September 4 of 2021</p>
                <p>
                  Welcome to the web site operated by Daniel San Team (the
                  "Company"), accessible at{` `}
                  <a href="https://nosy.com/">https://nosy.com/</a>. "Site"
                  means web sites of the Company and its affiliates, including
                  any web sites on which these terms and conditions of use are
                  posted.
                </p>
                <p>
                  If you do not agree, you are forbid to play and/or access Nosy
                  game.
                </p>
                <p>
                  We reserve the right to change at any time the Terms and
                  Conditions and the Privacy Policy.
                </p>
                <p>
                  Your continued use of the website after changes to this policy
                  will be deemed as your acceptance of such changes.
                </p>
                <p>
                  The materials contained on this site are protected by
                  applicable copyright and trademark law.
                </p>
                <p>
                  A minor (anyone under 13 years of age) should seek consent of
                  their legal guardian (s) prior to use the website and/or the
                  Nosy game.
                </p>
                <p>
                  Nosy encourages parents to instruct their children to never
                  share their personal information online. Parents concerned
                  about the transferring of personal information of their
                  children can contact us.
                </p>
              </span>
            )}
          </dd>
          <dd>
            <div className={styles.title} onClick={showTwo}>
              <svg
                className={items.two ? styles.roteDown : styles.roteUp}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
              <h5>2. License of use</h5>
            </div>
            {items.two && (
              <span>
                <p>You agree to use the Site only for lawful purposes:</p>
                <p>
                  (a) Specifically you agree not to do any of the following:{" "}
                </p>
                <p className={styles.marginleft}>
                  (1) upload to or transmit on the Site any defamatory,
                  indecent, obscene, harassing, violent or otherwise
                  objectionable material, or any material that is, or may be,
                  protected by copyright, without permission from the copyright
                  owner;
                </p>
                <p className={styles.marginleft}>
                  (2) use the Site to violate the legal rights (including the
                  rights of publicity and privacy) of others or to violate the
                  laws of any jurisdiction.
                </p>
                <p>
                  (b) Any content and/or opinions uploaded, expressed or
                  submitted to a message board, blog, chatroom or any other
                  publicly available section of the Site (including
                  password-protected areas), and all articles and responses to
                  questions, other than the content provided by the Company, are
                  solely the opinions and responsibility of the person or entity
                  submitting them and do not necessarily reflect the opinions of
                  the Company.
                </p>
              </span>
            )}
          </dd>
          <dd>
            <div className={styles.title} onClick={showThree}>
              <svg
                className={items.three ? styles.roteDown : styles.roteUp}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
              <h5>3. Limitations</h5>
            </div>
            {items.three && (
              <span>
                <p>
                  In no event will Nosy or its suppliers be liable for any
                  direct, indirect, incidental, special or consequential damages
                  resulting from the inability to use the game. We do not accept
                  any responsibility for external links sent to third parties.
                  The inclusion of these links does not mean that we endorse the
                  material or the content of these websites. We are not liable
                  for any loss, damage or inconvenience you may suffer as a
                  consequence of the Nosy website becoming temporarily or
                  permanently unavailable for maintenance or due techrycal
                  problems.
                </p>
              </span>
            )}
          </dd>
          <dd>
            <div className={styles.title} onClick={showFour}>
              <svg
                className={items.four ? styles.roteDown : styles.roteUp}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
              <h5>4. Applicable law</h5>
            </div>
            {items.four && (
              <span>
                <p>
                  These terms and conditions are ruled and construed in
                  accordance with the laws of Brazil, and you irrevocably submit
                  yourself to the exclusive jurisdiction of the courts in this
                  State or place.
                </p>
              </span>
            )}
          </dd>
          <dd>
            <div className={styles.title} onClick={showFive}>
              <svg
                className={items.five ? styles.roteDown : styles.roteUp}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
              <h5>5. Advertisements</h5>
            </div>
            {items.five && (
              <span>
                <p>
                  If you click on any advertisement you'll be dealing with
                  outside companies responsible for that ads. We do not control
                  the actions of these companies, nor do we control the content
                  of their sites. Report any ads that you find offensive or
                  inappropriate at team@gartic.com. If we find that these ads
                  violate our advertising standards, we will take necessary
                  actions. We do not accept any responsibility for third-party
                  ads that may appear on the Stopot.S website.
                </p>
              </span>
            )}
          </dd>
          <dd>
            <div className={styles.title} onClick={showSix}>
              <svg
                className={items.six ? styles.roteDown : styles.roteUp}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
              <h5>6. User Conduct</h5>
            </div>
            {items.six && (
              <span>
                <p>
                  You must treat all users with respect, and you must comply
                  with all terms, conditions and policies connected to the
                  website as it is updated. Respect other users of the game.
                  Inappropriate language and / or inappropriate behavior are
                  prohibited. We are not responsible for user content, posts,
                  chat and / or communication methods. Users are responsible for
                  their own actions and all consequences that may arise from
                  there.
                </p>
                <p>You agree to not take any action such as:</p>
                <p>
                  a) Distribute, make available, write in chat or in the field
                  of answers, and / or design any content that we deem to be:
                  defamatory, abusive, harassing, insulting, threatening,
                  intolerant, vulgar or sexually explicit; defending illegal
                  activities or discrimination whether it is motivated by
                  social, religious, racial, sexual, political, sport, age,
                  origin, nationality, color, disease, religion or belief,
                  marital status, family situation or any characteristic that
                  socially excludes the person, or that it causes embarrassment
                  directed to any player, family, friends or any other person
                  outside the website.
                </p>
                <p>
                  b) Post, distribute, make available or transmit any
                  information, text, message or other material that violates any
                  right of a third-party or any national or international law,
                  rule or regulation, including but not limiting to:
                </p>
                <p className={styles.marginleft}>
                  - Copyrights, patents, trademarks, or other proprietary
                  rights;
                </p>
                <p className={styles.marginleft}>
                  - Right to privacy (specifically, you shall not distribute
                  personal information of another person without the express
                  permission of them) or publicity,
                </p>
                <p>
                  c) Advertise or sell products, services or any other
                  kind(for-profit or non-profit purposes);
                </p>
                <p>
                  d) Post, distribute, make available or transmit any software
                  or other computer file that contains a virus or other harmful
                  component;
                </p>
                <p>
                  e) Represent any person or entity or misrepresent its identity
                  with any person or entity,
                </p>
                <p>f) Engage in an antisocial or a destructive behaviour:</p>
                <p> g) Create or use ay server emulator;</p>
                <p>
                  h) Delete any legal notices, exemptions or proprietary
                  notices, such as copyright or trademark symbols, or modif y
                  any logo that you donot have or have express permission to
                  modify,
                </p>
                <p>
                  i) Use nicknames we consider offensive, inappropriate or if
                  you are not authorized to use, in each case you may be banned
                  from the website.
                </p>
                <p>
                  6.1 A player may be kicked out of a room by other users' votes
                  in a match, we will be not liable for any inconvenience caused
                  by player's actions;
                </p>
              </span>
            )}
          </dd>
          <dd className={styles.seven}>
            <div className={styles.title} onClick={showSeven}>
              <svg
                className={items.seven ? styles.roteDown : styles.roteUp}
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
              <h5>7. Copyright retrictions/use of content</h5>
            </div>
            {items.seven && (
              <span>
                <p>
                  The entire contents of this Site (including all information,
                  text, displays, images and audio and any software made
                  available through or in connection with the Site) and the
                  design, selection and arrangement thereof, are proprietary to
                  the Company or its affiliates or licensors and are protected
                  by Chile and Argentina and international laws regarding
                  copyrights, trademarks, trade secrets and other proprietary
                  rights.
                </p>
              </span>
            )}
          </dd>
        </dl>
      </div>
      <Footer />
    </>
  );
};

export default Terms;

// 1. Terms and conditions
