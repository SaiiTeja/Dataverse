const cards = document.querySelectorAll(".project-page .custom-card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Tilt calculation
    const rotateX = ((y - midY) / midY) * 12;
    const rotateY = ((x - midX) / midX) * 12;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // Update shine position
    card.style.setProperty("--shine-x", `${x}px`);
    card.style.setProperty("--shine-y", `${y}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.setProperty("--shine-x", `50%`);
    card.style.setProperty("--shine-y", `50%`);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const spans = document.getElementsByClassName("proname");
  const storedUser = localStorage.getItem('proname');
  const span = document.querySelector('.proname');
if (span) span.innerText = storedUser;


  if (storedUser && spans.length > 0) {
    for (let i = 0; i < spans.length; i++) {
      spans[i].innerText = storedUser; // set the username
    }
  }
});

// Datasets and code dictionary
window.datasets = [
  "iris data sets",
  "digits datasets",
  "wine datasets",
  "20 Newsgroups Dataset",
  "Diabetes Dataset",
  "Boston Housing Dataset",
  "Olivetti Faces Dataset",
  "Covtype Dataset",
  "fetch_kddcup99",
  "make_circles",

  // newly added datasets 👇
  "Bitcoin Rates Dataset",
  "BMW Car Sales Dataset",
  "Brain Tumor Detection Dataset",
  "Breast Cancer Classification Dataset",
  "Clothing Sizes Dataset",
  "Credit Card Fraud Detection Dataset",
  "Data Related Jobs Dataset",
  "World Development Indicator Dataset",
  "World Education Modality Dataset",
  "Energy Consumption Dataset",
  "World Exchange Rates Dataset",
  "Global Health Statistics Dataset",
  "Netflix Movie Recommendation Dataset",
  "Amazon Reviews Dataset",
  "Road Accidents Dataset",
  "Spotify Music Recommendation Dataset",
  "Taxi Fare Rates Dataset",
  "Global Temperature Dataset",
  "Titanic Survival Prediction Dataset",
  "World Bank Gender Statistics Dataset",
  "World Population Dataset",
  "World Ranking Dataset",
  "World Weather Dataset",
  "YouTube Famous Channels Dataset"
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

window.showText = (content) => {
  // If a popup already exists, don’t create another
  if (document.querySelector(".slide-in-text")) return;

  const defaultText = `This website provides datasets for ML/DL problems in multiple formats, including sklearn predefined datasets and also provide the machine learning model to clean and preprocess the datasets `;
  const popupContent = content || defaultText;

  const textDiv = document.createElement("div");
  textDiv.className = "slide-in-text";

  textDiv.innerHTML = `
    <span class="close-btn">❌</span>
    <div class="popup-content">${popupContent}</div>
  `;

  // Style the popup
  Object.assign(textDiv.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    maxWidth: "90%",
    maxHeight: "80%",
    overflowY: "auto",
  });

  // Style the close button
  const closeBtn = textDiv.querySelector(".close-btn");
  Object.assign(closeBtn.style, {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  });

  // Append to body
  document.body.appendChild(textDiv);

  // Optional slide-in animation
  setTimeout(() => textDiv.classList.add("show"), 10);

  // Close event
  closeBtn.addEventListener("click", () => {
    textDiv.remove();
  });

  return textDiv;
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

  if (!datasetsDiv || !urlDiv) {
    console.warn("Missing #datasets or #links element.");
    return;
  }

  // parse index (data-value from cards is 1-based string)
  const idx = Number.parseInt(value, 10);

  // toast helper
  const showMessage = (msg, duration = 1400) => {
    const t = document.createElement("div");
    t.textContent = msg;
    Object.assign(t.style, {
      position: "fixed",
      top: "18px",
      right: "18px",
      padding: "8px 12px",
      background: "#222",
      color: "#fff",
      borderRadius: "8px",
      zIndex: 99999,
      fontSize: "13px",
      boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
    });
    document.body.appendChild(t);
    setTimeout(() => t.remove(), duration);
  };

  // download helper
  const forceDownload = async (url, filename) => {
    try {
      showMessage("⬇️ Downloading...");
      const resp = await fetch(url);
      if (!resp.ok) throw new Error("Network error");
      const blob = await resp.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
      showMessage("✅ Download complete");
    } catch (err) {
      console.error(err);
      showMessage("⚠️ Download failed");
    }
  };

  // raw base path (your existing pattern)
  const baseRaw = "https://raw.githubusercontent.com/SaiiTeja/mini_project/master/datasets/";

  // helper to build link UI block (raw link + copy button below)
  const buildLinkBlock = (label, rawUrl) => {
    const block = document.createElement("div");
    block.style.marginBottom = "12px";

    // raw link (full URL displayed)
    const a = document.createElement("a");
    a.href = rawUrl;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = rawUrl;              // show raw url text
    a.style.display = "block";
    a.style.wordBreak = "break-all";
    a.style.fontSize = "13px";
    a.style.marginBottom = "6px";

    // copy button only (below the raw link)
    const heading =document.createElement("h2")
    const copyBtn = document.createElement("button");
    heading.textContent="Links"
    copyBtn.textContent = "📋 Copy";
    copyBtn.title = `Copy ${label} URL`;
    Object.assign(heading.style, {
      cursor: "pointer",
      padding: "16px 18px",
      borderRadius: "6px",
      border: "1px solid #ede5e5ff",
      background: "#ece5e5f1",
      fontSize: "20px"
    });
    Object.assign(copyBtn.style, {
      cursor: "pointer",
      padding: "6px 8px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      background: "#fff",
      fontSize: "13px"
    });
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(rawUrl)
        .then(() => showMessage("Copied link to clipboard"))
        .catch(() => showMessage("⚠️ Copy failed"));
    };
    block.appendChild(heading)
    block.appendChild(a);
    block.appendChild(copyBtn);
    return block;
  };

  // Build the links area (left/urlDiv)
  urlDiv.innerHTML = ""; // clear previous
  const linksWrapper = document.createElement("div");
  linksWrapper.style.padding = "8px";

  // Only proceed when index valid and > 0; else show fallback
  if (!Number.isNaN(idx) && idx >= 1) {
    // always show File1 raw link
    const file1Url = `${baseRaw}${idx}.csv`;
    linksWrapper.appendChild(buildLinkBlock("File1.csv", file1Url));

    // show File2 raw link only for 1..10
    if (idx <= 10) {
      const file2Url = `${baseRaw}${idx}.5.csv`;
      linksWrapper.appendChild(buildLinkBlock("File2.csv", file2Url));
    }
  } else {
    const info = document.createElement("div");
    info.textContent = "No file links available for this selection.";
    linksWrapper.appendChild(info);
  }

  urlDiv.appendChild(linksWrapper);

  // Build the datasets panel (right side) — show title + download symbol buttons
  datasetsDiv.innerHTML = ""; // clear previous

  const panel = document.createElement("div");
  Object.assign(panel.style, {
    padding: "14px",
    borderRadius: "8px",
    background: "#fff",
    border: "1px solid #e9e9e9"
  });

  const title = document.createElement("h3");
  title.innerHTML = `<center>${name || "Dataset"}</center>`;
  title.style.marginTop = "0";
  panel.appendChild(title);

  // downloads container
  const downloads = document.createElement("div");
  downloads.style.display = "flex";
  downloads.style.gap = "10px";
  downloads.style.justifyContent = "center";
  downloads.style.alignItems = "center";
  downloads.style.marginTop = "14px";

  // helper to create a download-icon button
  const createDownloadButton = (label, url) => {
    const btn = document.createElement("button");
    btn.innerHTML = `⬇️ <span style="margin-left:6px;font-size:13px">${label}</span>`;
    btn.title = `Download ${label}`;
    Object.assign(btn.style, {
      cursor: "pointer",
      padding: "8px 12px",
      borderRadius: "8px",
      border: "none",
      background: "#007bff",
      color: "#fff",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "6px"
    });
    btn.onclick = () => forceDownload(url, `${(name || "dataset").replace(/\s+/g, "_")}_${label.replace(/\s+/g, "_")}.csv`);
    return btn;
  };

  if (!Number.isNaN(idx) && idx >= 1) {
    // File1
    const f1 = `${baseRaw}${idx}.csv`;
    downloads.appendChild(createDownloadButton("File1", f1));

    // File2 for 1..10
    if (idx <= 10) {
      const f2 = `${baseRaw}${idx}.5.csv`;
      downloads.appendChild(createDownloadButton("File2", f2));
    }
  } else {
    const note = document.createElement("div");
    note.textContent = "No downloadable files for this selection.";
    downloads.appendChild(note);
  }

  panel.appendChild(downloads);

  // optional quick copy-of-both links row (small icons) - unobtrusive
  const quickRow = document.createElement("div");
  quickRow.style.marginTop = "12px";
  quickRow.style.display = "flex";
  quickRow.style.justifyContent = "center";
  quickRow.style.gap = "8px";

  if (!Number.isNaN(idx) && idx >= 1) {
    const quickCopy1 = document.createElement("button");
    quickCopy1.textContent = "Copy File1 URL";
    quickCopy1.onclick = () => {
      navigator.clipboard.writeText(`${baseRaw}${idx}.csv`).then(() => showMessage("File1 link copied"));
    };
    quickRow.appendChild(quickCopy1);

    if (idx <= 10) {
      const quickCopy2 = document.createElement("button");
      quickCopy2.textContent = "Copy File2 URL";
      quickCopy2.onclick = () => {
        navigator.clipboard.writeText(`${baseRaw}${idx}.5.csv`).then(() => showMessage("File2 link copied"));
      };
      quickRow.appendChild(quickCopy2);
    }
  }

  panel.appendChild(quickRow);

  datasetsDiv.appendChild(panel);
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
// project.js — username & logout handling (drop-in)

// ========================== USER LOGIN HANDLING ==========================

// Called when user logs in; updates storage and UI
window.handleLoginSuccess = (username) => {
  const spans = document.getElementsByClassName("proname");
  if (!spans || spans.length === 0) return;

  // Prefer using the passed username, fallback to stored value
  const proname = username || localStorage.getItem("proname");

  for (let i = 0; i < spans.length; i++) {
    spans[i].innerText = proname || ""; // replace "Sai Teja" if needed
  }

  console.log(proname);
};

// Logout — remove stored username and close the page
window.logout = () => {
  localStorage.removeItem('proname');

  // Try to close the page; fallback to redirect if blocked
  try {
    window.close();
    setTimeout(() => {
      if (!window.closed) window.location.href = '/';
    }, 400);
  } catch (e) {
    window.location.href = '/';
  }
};

// Toggle inline logout button next to username
window.showLogoutButton = () => {
  const spans = document.getElementsByClassName('proname');
  if (!spans || spans.length === 0) return;

  // We'll attach the logout button after the first span
  const usernameSpan = spans[0];
  let logoutBtn = document.getElementById('logout-btn');

  if (!logoutBtn) {
    // create logout button
    logoutBtn = document.createElement('button');
    logoutBtn.id = 'logout-btn';
    logoutBtn.type = 'button';
    logoutBtn.textContent = 'Logout';
    logoutBtn.className = 'btn btn-sm btn-outline-danger ms-2';
    logoutBtn.style.cursor = 'pointer';
    logoutBtn.addEventListener('click', window.logout);

    usernameSpan.insertAdjacentElement('afterend', logoutBtn);
  } else {
    // toggle visibility
    logoutBtn.style.display = logoutBtn.style.display === 'none' ? 'inline-block' : 'none';
  }
};

// ========================== INITIALIZATION ==========================

document.addEventListener('DOMContentLoaded', () => {
  const spans = document.getElementsByClassName('proname');
  if (!spans || spans.length === 0) return;

  // Make username clickable to toggle logout button
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.cursor = 'pointer';
    spans[i].addEventListener('click', window.showLogoutButton);
  }

  // Set stored username if exists
  const storedUser = localStorage.getItem('proname');
  if (storedUser) {
    window.handleLoginSuccess(storedUser);
  }
});
