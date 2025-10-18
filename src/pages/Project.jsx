import React from 'react';
import '../utils/project.js';
import '../styles/project/project.css';
import '../styles/project/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Project() {
  return (
    <div className='project-page'>
      {/* Fixed header */}
      <header className="fixed-top pnav">
        <h2 className="display-3 text-primary saiteja d-flex align-items-center justify-content-center heading">
          <img className="img" id="image" src="/images/photo.gif" alt="Logo" /> Dataverse
        </h2>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
          <div className="container-fluid" >
            <a className="navbar-brand" href="#">
              <h2 className='text-white'>Dataverse</h2>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" href="project.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => window.showText()}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => window.toggleSideBox()}>AI Box</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacts">Contact</a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-link d-flex align-items-center" href="#" onClick={() => window.showLogoutButton()}>
                    <img src="/images/user.jpeg" id="user" alt="User" />
                    <span id="user_name" className="ms-2">Sai Teja</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
      {/* Spacer to push main content below fixed header */}
      <div style={{ height: '10px' ,paddingTop: '160px' }}></div>


      {/* Main content */}
   <main className="container mt-5 pt-5" id="main_anchor">
  <div className="parent custom-card-container">
    {[
      { id: "iris", img: "/images/iris.jpeg", title: "Iris Dataset", text: "This dataset is ideal for multi-class classification problems with three classes, offering features that distinguish between them effectively." },
      { id: "digits", img: "/images/second.jpeg", title: "Written Digit Dataset", text: "This dataset is ideal for classifying handwritten digits, offering features tailored to this specific task." },
      { id: "wine", img: "/images/third.jpeg", title: "Wine Dataset", text: "This dataset is designed for logistic regression, effectively handling multiclass classification tasks." },
      { id: "news", img: "/images/fourth.png", title: "20 News Dataset", text: "This dataset contains 20 categories of news articles, making it ideal for building text classification models." },
      { id: "diabetes", img: "/images/fifth.jpeg", title: "Diabetes Dataset", text: "This dataset is tailored for regression tasks, specifically predicting the progression of diabetes over time." },
      { id: "house", img: "/images/sixth.jpg", title: "House Price Dataset", text: "This dataset is crafted for predictive analysis, focusing on estimating real estate pricing based on various influencing factors." },
      { id: "face", img: "/images/seventh.jpeg", title: "Face Recognition Dataset", text: "This dataset is designed for facial recognition, enabling the identification of individuals with high precision." },
      { id: "forest", img: "/images/eight.jpg", title: "Forest Cover Dataset", text: "This dataset is ideal for predicting forest cover types, supporting robust classification models." },
      { id: "network", img: "/images/nine.png", title: "Network Intrusion Dataset", text: "This dataset is designed for detecting malicious activity through network traffic analysis." },
      { id: "circle", img: "/images/ten.png", title: "Circle Dataset", text: "This dataset is suited for building advanced models, offering features ideal for tackling non-linear classification tasks." },

  { id: "bitcoin_rates", img: "/images/bitcoin rates.jpg", title: "Bitcoin Rates", text: "Historical and real-time data of Bitcoin prices for financial analysis and prediction models." },
  { id: "bmw_sales", img: "/images/bmw car sales.jpg", title: "BMW Car Sales", text: "Dataset detailing BMW car sales over time, useful for sales forecasting and market analysis." },
  { id: "brain_tumor", img: "/images/brain.jpg", title: "Brain Tumor Dataset", text: "Medical imaging dataset for brain tumor detection and classification using AI models." },
  { id: "breast_cancer", img: "/images/cancer.jpg", title: "Breast Cancer Dataset", text: "Dataset for predicting breast cancer presence based on patient features." },
  { id: "clothe_sizes", img: "/images/clothes.jpg", title: "Clothing Sizes", text: "Dataset mapping human measurements to clothing sizes, useful for fashion and retail applications." },
  { id: "credit_card_fraud", img: "/images/credit card.jpg", title: "Credit Card Fraud Detection", text: "Transaction data for detecting fraudulent credit card activity using machine learning models." },
  { id: "data_jobs", img: "/images/data related jobs.jpg", title: "Data-Related Jobs", text: "Dataset containing information on data science and analytics job postings." },
  { id: "world_development", img: "/images/development indicator.jpg", title: "World Development Indicators", text: "Global socio-economic and development indicators for research and analysis." },
  { id: "world_education", img: "/images/education .jpg", title: "World Education Modality", text: "Dataset detailing education metrics across countries and regions." },
  { id: "energy_consumption", img: "/images/energy consume.jpg", title: "Energy Consumption", text: "Global energy consumption data across different sectors for predictive analysis." },
  { id: "world_exchange", img: "/images/exchange rates.jpg", title: "World Exchange Rates", text: "Historical exchange rates between global currencies for financial modeling." },
  { id: "global_health", img: "/images/global health.jpg", title: "Global Health Dataset", text: "Health metrics from around the world, including disease prevalence and life expectancy." },
  { id: "movie_netflix", img: "/images/movie recommandation.jpg", title: "Movie Recommendation Netflix", text: "Dataset of Netflix movie ratings and metadata for building recommendation systems." },
  { id: "amazon_reviews", img: "/images/reviews.jpg", title: "Amazon Reviews", text: "Customer reviews of Amazon products for sentiment analysis and recommendation models." },
  { id: "road_accidents", img: "/images/road accidents.jpg", title: "Road Accidents Dataset", text: "Dataset of global road accident incidents for safety analysis and predictive modeling." },
  { id: "spotify_recommendation", img: "/images/spotify.jpg", title: "Spotify Recommendation", text: "Music listening patterns and song features for building recommendation systems." },
  { id: "taxi_rates", img: "/images/taxies.jpg", title: "Taxi Rates", text: "Historical taxi fare data including locations, times, and trip details." },
  { id: "temperature", img: "/images/temperature.jpg", title: "Temperature Dataset", text: "Global temperature data for climate analysis and forecasting." },
  { id: "titanic", img: "/images/titanic.jpg", title: "Titanic Dataset", text: "Passenger data for predicting survival on the Titanic." },
  { id: "world_bank_gender", img: "/images/world bank geneder.jpg", title: "World Bank Gender Dataset", text: "Gender-related statistics from the World Bank for socio-economic studies." },
  { id: "world_population", img: "/images/world population.jpg", title: "World Population", text: "Population statistics of countries across the world for demographic analysis." },
  { id: "world_ranking", img: "/images/world ranking.jpg", title: "World Rankings", text: "Global rankings in various fields such as education, economy, and sports." },
  { id: "world_weather", img: "/images/world weather.jpg", title: "World Weather", text: "Global weather data including temperature, precipitation, and extreme events." },
  { id: "youtube_channels", img: "/images/youtube famous.jpg", title: "YouTube Famous Channels", text: "Dataset of popular YouTube channels with statistics on subscribers, views, and content type." }


    ].map((dataset, index) => (
      <a
        key={dataset.id}
        href="#heading"
        id={dataset.id}
        data-value={(index + 1).toString()}
        className="custom-card"
      >
        <img src={dataset.img} alt={dataset.title} />
        <h3 className="custom-card-title">{dataset.title}</h3>
        <p className="custom-card-short-content"></p>
        <p className="custom-card-full-content">{dataset.text}</p>
      </a>
    ))}
  </div>
</main>



      {/* Dropdown */}
      <div className="dropdown">
        <button className="dropbtn">models</button>
        <div className="parent dropdown-content">
          <a id="iris" href="#heading" data-value="1">iris dataset</a>
          <a id="digits" href="#heading" data-value="2">written Digit dataset</a>
          <a id="wine" href="#heading" data-value="3">wine datasets for logistic regression</a>
          <a id="news" href="#heading" data-value="4">20 different news for classification</a>
          <a id="diabates" href="#heading" data-value="5">diabates dataset for regression</a>
          <a id="house" href="#heading" data-value="6">house price prediction</a>
          <a id="face" href="#heading" data-value="7">face recognition dataset</a>
          <a id="forest" href="#heading" data-value="8">classification for forest cover dataset</a>
          <a id="network" href="#heading" data-value="9">network intrusion dataset</a>
          <a id="circle" href="#heading" data-value="10">circle dataset for non-linear classification</a>
          <a className="nav-link" href="#" onClick={() => window.toggleSideBox()}>AI box</a>
        </div>
      </div>

      <div className="row main_div">
  <div
    className="container row"
    id="main"
    style={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}
  >
    {/* Datasets Column */}
    <div
      className="col-md-3 item design"
      id="datasets"
      style={{
        flex: 1,
        minWidth: '300px',
        height: '500px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '15px',
        backgroundColor: '#fdfdfd',
      }}
    ></div>

    {/* Links Column */}
    <div
      className="col-md-3 item design"
      id="links"
      style={{
        flex: 1,
        minWidth: '300px',
        height: '500px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '15px',
        backgroundColor: '#fdfdfd',
      }}
    ></div>

    {/* Code Box Column */}
    <div
      className="col-md-3 item first_item sklearn design"
      id="boxes"
      style={{
        flex: 1,
        minWidth: '300px',
        height: '500px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '15px',
        backgroundColor: '#fdfdfd',
      }}
    >
      <h3 id="heading"></h3>
      <div
        id="code"
        style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
      ></div>
    </div>
  </div>
</div>


      {/* Side Box */}
      <div className="container">
        <div id="side-box" className="side-box hidden">
          <button className="close-btnn" onClick={() => window.closeSideBox()}>X</button>
          <p>
            <img src="/images/logo.png" alt="Icon" className="box-image" />
            <span className="text-success display-6">AI bot</span>
          </p>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/OfHarSvhYyHsL8w3C08UJ"
            width="100%"
            style={{ height: '100%', minHeight: '700px' }}
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contacts">
        <div id="contacts-section">
          <form>
            <fieldset>
              <legend className="contact-title">Contact Us</legend>
              <footer className="professional-footer">
                <div className="footer-content">
                  <div className="contact-row">
                    <div className="contact-info">
                      <p><strong>Name:</strong> <span>B Gopal</span></p>
                      <p><strong>Email:</strong> <span>bomminenigopal@gmail.com</span></p>
                      <p><strong>Phone:</strong> <span>+91 7013639633</span></p>
                    </div>
                    <div className="contact-info">
                      <p><strong>Name:</strong> <span>N Sai Teja</span></p>
                      <p><strong>Email:</strong> <span>nallapanenisaiteja@gmail.com</span></p>
                      <p><strong>Phone:</strong> <span>+91 9121048098</span></p>
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="contact-info">
                      <p><strong>Name:</strong> <span>K Jagadeesh</span></p>
                      <p><strong>Email:</strong> <span>kondakajagadeesh@gmail.com</span></p>
                      <p><strong>Phone:</strong> <span>+91 9573725129</span></p>
                    </div>
                    <div className="contact-info">
                      <p><strong>Name:</strong> <span>B Venkata Ram</span></p>
                      <p><strong>Email:</strong> <span>banavathvenkataram@gmail.com</span></p>
                      <p><strong>Phone:</strong> <span>+91 9398344795</span></p>
                    </div>
                  </div>
                </div>
              </footer>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Project;
