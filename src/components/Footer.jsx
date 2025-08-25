

const Footer = () => {
  return (
    <footer>

            <div className="jumbotron">
        <div className="terms-and-right">

          <div className="columns">
            <div>
              <h1 className="title">Dc Comics</h1>
              <ul className="terms">
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
            </div>

            <div>
              <h1 className="title">Shop</h1>
              <ul className="terms">
                <li>Shop DC</li>
                <li>Shop Collectibles</li>
              </ul>
            </div>

            <div>
              <h1 className="title">DC</h1>
              <ul className="terms">
                <li>Terms Of Use</li>
                <li>Privacy Policy</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
              </ul>
            </div>
          </div>

        
          <div className="right-logo">
            <img src="../src/assets/img/dc-logo-bg.png" alt="DC Logo" />
          </div>

        </div>
      </div>


      <div className="footer-infos">
        <div className="btn-space">
          <button className="sign">Sign-up Now!</button>
        </div>
        <div className="socials-icons">
          <a href="#">Follow Us</a>
          <img src="../src/assets/img/footer-facebook.png" alt="" />
          <img src="../src/assets/img/footer-twitter.png" alt="" />
          <img src="../src/assets/img/footer-youtube.png" alt="" />
          <img src="../src/assets/img/footer-pinterest.png" alt="" />
          <img src="../src/assets/img/footer-periscope.png" alt="" />
        </div>
      </div>

      
    </footer>
  )
}

export default Footer
