// Datasets and code dictionary
window.datasets = [
  "iris data sets", "digits datasets", "wine datasets", "20 Newsgroups Dataset", "Diabetes Dataset",
  "Boston Housing Dataset", "Olivetti Faces Dataset", "Covtype Dataset", "fetch_kddcup99", "make_circles"
];
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.custom-card');

  cards.forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      const offset = 100; // Adjust based on your fixed header height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
});
window.dictonary = {
  1: `from sklearn.datasets import load_iris <br>
       iris = load_iris() <br>
       X = iris.data <br>
       y = iris.target <br>
       print("Feature names:", iris.feature_names) <br>
       print("Target names:", iris.target_names) <br>
       print("First five rows of features:\\n", X[:5]) <br>
       print("First five labels:", y[:5])`,
  2: `from sklearn.datasets import load_digits<br>
       digits = load_digits()<br>
       X = digits.data  <br>
       y = digits.target  <br>
       print("Number of features:", X.shape[1]) <br>
       print("Target classes:", digits.target_names)<br>
       print("First five rows of features:\\n", X[:5])  <br>
       print("First five labels:", y[:5])`,
  3: `from sklearn.datasets import load_wine<br>
       wine = load_wine()<br>
       X = wine.data  <br>
       y = wine.target  <br>
       print("Feature names:", wine.feature_names)<br>
       print("Target names:", wine.target_names) <br>
       print("First five rows of features:\\n", X[:5])  <br>
       print("First five labels:", y[:5])`,
  4: `from sklearn.datasets import fetch_20newsgroups<br>
       newsgroups = fetch_20newsgroups(subset='all', shuffle=True, random_state=42)<br>
       X = newsgroups.data  <br>
       y = newsgroups.target  <br>
       print("Target names (categories):", newsgroups.target_names)<br>
       print("Number of articles:", len(X))<br>
       print("First article (snippet):\\n", X[0][:500]) <br>
       print("First article label (category):", newsgroups.target_names[y[0]])`,
  5: `from sklearn.datasets import load_diabetes<br>
       diabetes = load_diabetes()<br>
       X = diabetes.data<br>
       y = diabetes.target<br>
       print("Feature names:", diabetes.feature_names)<br>
       print("First five rows of features:\\n", X[:5])<br>
       print("First five labels:", y[:5])`,
  6: `from sklearn.datasets import fetch_california_housing<br>
       housing = fetch_california_housing()<br>
       X = housing.data<br>
       y = housing.target<br>
       print("Feature names:", housing.feature_names)<br>
       print("First five rows of features:\\n", X[:5])<br>
       print("First five target values (house prices):", y[:5])`,
  7: `from sklearn.datasets import fetch_olivetti_faces<br>
       faces = fetch_olivetti_faces()<br>
       X = faces.data<br>
       y = faces.target<br>
       print("Number of features:", X.shape[1])<br>
       print("Number of samples:", X.shape[0])<br>
       print("First five labels (person IDs):", y[:5])`,
  8: `from sklearn.datasets import fetch_covtype<br>
       forest = fetch_covtype()<br>
       X = forest.data<br>
       y = forest.target<br>
       print("Number of features:", X.shape[1])<br>
       print("Number of samples:", X.shape[0])<br>
       print("First five rows of features:\\n", X[:5])<br>
       print("First five labels (Cover Types):", y[:5])`,
  9: `from sklearn.datasets import fetch_kddcup99<br>
       kdd = fetch_kddcup99()<br>
       X = kdd.data<br>
       y = kdd.target<br>
       print("Number of features:", X.shape[1])<br>
       print("Number of samples:", X.shape[0])<br>
       print("First five rows of features:\\n", X[:5])<br>
       print("First five labels (attack types):", y[:5])`,
  10: `from sklearn.datasets import make_circles<br>
       X, y = make_circles(n_samples=100, noise=0.05, random_state=42)<br>
       print("First five rows of features:\\n", X[:5])<br>
       print("First five labels:", y[:5])`
};
/* 
// User Name and Welcome Message
window.userName = localStorage.getItem("userName");
const change_name = document.getElementById("user_name");
if (change_name && window.userName) change_name.innerHTML = window.userName;

if (window.userName) {
  const welcomeDiv = document.createElement("div");
  welcomeDiv.textContent = `Hello, ${window.userName}! Great to see you here 🎉`;
  Object.assign(welcomeDiv.style, {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px 20px",
    backgroundColor: "#1abc9c",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: "1000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "✖";
  Object.assign(cancelBtn.style, {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer"
  });
  cancelBtn.addEventListener("click", () => document.body.removeChild(welcomeDiv));
  welcomeDiv.appendChild(cancelBtn);
  document.body.appendChild(welcomeDiv);

  setTimeout(() => { if (document.body.contains(welcomeDiv)) document.body.removeChild(welcomeDiv); }, 90000000);
} */

// Global Functions
window.copycode = () => {
  navigator.clipboard.writeText(document.getElementById("code").innerText);
  alert("Code copied to clipboard");
};

window.showText = () => {
  if (document.getElementById("slideText")) return;
  const textDiv = document.createElement("div");
  textDiv.id = "slideText";
  textDiv.className = "slide-in-text show";
  textDiv.innerHTML = `
    <span class="close-btn" onclick="window.hideText()">❌</span>
    This website provides datasets for ML/DL problems in multiple formats, including sklearn predefined datasets.
  `;
  document.body.appendChild(textDiv);
  setTimeout(() => textDiv.classList.add("show"), 10);
};

window.hideText = () => {
  const textDiv = document.getElementById("slideText");
  if (textDiv) {
    textDiv.classList.remove("show");
    setTimeout(() => textDiv.remove(), 500);
  }
};

window.copy = (num) => {
  navigator.clipboard.writeText(`https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/login/project/datasets/${num}.csv`)
    .then(() => alert("Copied to clipboard"));
};

window.copy2 = (num) => {
  navigator.clipboard.writeText(`https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/login/project/datasets/${num}.5.csv`)
    .then(() => alert("Copied to clipboard"));
};

window.load_datasets = (name, value, program) => {
  const urlDiv = document.getElementById("links");
  
  const datasetsDiv = document.getElementById("datasets");
  datasetsDiv.innerHTML = `
    <h2><center>${name}</center></h2>
    <h3>1. File 1 <a href="datasets/${value}.csv" download class="fa fa-download text-dark"></a></h3>
    <h3>2. File 2 <a href="datasets/${value}.5.csv" download class="fa fa-download text-dark"></a></h3>
    <p>Note: File 1 contains 10,000 rows; File 2 contains 1,000 rows.</p>
    <h6>Python Example:</h6>
    <p>
      from sklearn.ensemble import RandomForestClassifier<br>
      import pandas as pd<br>
      df = pd.read_csv("datasets/1.csv")<br>
      print(df.head())<br>
      model = RandomForestClassifier()
    </p>
  `;
  urlDiv.innerHTML = `
    <h3>Links for datasets</h3>
    <p>File1: <a href="#" onclick="window.copy(${value})">Copy Link</a></p>
    <p>File2: <a href="#" onclick="window.copy2(${value})">Copy Link</a></p>
  `;
  
};

window.toggleSideBox = () => {
  const sideBox = document.getElementById("side-box");
  if (sideBox.classList.contains("hidden")) {
    sideBox.classList.remove("hidden");
    setTimeout(() => sideBox.classList.add("active"), 0);
  } else {
    sideBox.classList.remove("active");
    setTimeout(() => sideBox.classList.add("hidden"), 300);
  }
};

window.closeSideBox = () => {
  const sideBox = document.getElementById("side-box");
  sideBox.classList.remove("active");
  setTimeout(() => sideBox.classList.add("hidden"), 300);
};



window.showLogoutButton = () => {
  if (document.getElementById("logout-btn")) {
    document.getElementById("logout-btn").remove();
  } else {
    const logoutBtn = document.createElement("button");
    logoutBtn.id = "logout-btn";
    logoutBtn.textContent = "Logout";
    Object.assign(logoutBtn.style, {
      padding: "10px 20px",
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: "10px"
    });
    document.getElementById("username-display").appendChild(logoutBtn);
    logoutBtn.addEventListener("click", window.logout);
  }
};

window.logout = () => {
  localStorage.removeItem("userName");
  alert("You have been logged out!");
  window.close();
};

// Attach dataset card clicks
window.addEventListener("load", () => {
  document.querySelectorAll(".parent a").forEach(a => {
    const dataValue = a.getAttribute("data-value");
    a.addEventListener("click", () => {
      
      // Show all items
      document.querySelectorAll(".item").forEach(item => item.style.display = "inline");
      
      // Load datasets dynamically
      window.load_datasets(window.datasets[dataValue-1], dataValue, window.dictonary[dataValue]);
      
      // Update heading
      const head = document.getElementById("heading");
      head.innerHTML = `
        python program using predefined modules
        <fieldset style="float:right;width:300px;text-align:right">
          <p>copy the code here <a class="btn fa-solid fa-copy text-dark" href="#" onclick="window.copycode()"></a></p>
        </fieldset>
      `;
      
      // Add classes
      ["datasets", "links", "main"].forEach(id => {
        document.getElementById(id).classList.add(id === "main" ? "boxes2" : "boxes");
      });

      // === ADD TOP MARGIN TO CARDS ===
      const navbar = document.querySelector('.navbar');       // get the fixed navbar
      const cardsContainer = document.querySelector('.custom-card-container'); // or your cards wrapper
      if (navbar && cardsContainer) {
        const navbarHeight = navbar.offsetHeight;             // actual navbar height
        cardsContainer.style.marginTop = `${navbarHeight + 400}px`; // push cards down
      }

    });
  });
});
