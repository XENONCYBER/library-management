async function fetchRecommendations() {
  const query = document.getElementById("query").value;
  if (query.length < 1) {
    document.getElementById("recommendations").innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`http://localhost:5500/search?q=${query}`);
    const results = await response.json();
    displayRecommendations(results);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
}

function displayRecommendations(results) {
  const recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = "";
  results.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="book-info">
      <div>
        <div class="book-title-container">
          <div class="book-title">${book.title}</div>
          <div class="book-year">(${book.year})</div>
        </div>
        <div class="book-author">${book.author}</div>
        <div class="book-genre">${book.genre}</div>
      </div>
      <div class="book-rating">${book.rating}</div>
    </div>
    `;
    recommendations.appendChild(li);
  });
}
