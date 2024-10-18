async function fetchHistory() {
  try {
    const response = await fetch("http://localhost:5500/api/borrowedList");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const borrowedData = await response.json();
    displayHistory(borrowedData);
  } catch (error) {
    console.error("Error fetching history data:", error);
  }
}

function displayHistory(borrowedData) {
  const borrowedContainer = document.getElementById("borrowed-container");
  if (!borrowedContainer) {
    console.error("borrowed container not found");
    return;
  }
  borrowedContainer.innerHTML = ""; // Clear any existing content

  borrowedData.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("borrowed-item");
    itemElement.innerHTML = `
      <div class="left_data">
        <p style="font-size:20px; margin-bottom:10px" ><strong>Book Name:</strong> ${item.bookName || "N/A"}</p>
        <p><strong>Book Code:</strong> ${item.bookCode || "N/A"}</p>
        <p><strong>Author:</strong> ${item.author || "N/A"}</p>
        <p><strong>Genre:</strong> ${item.genre || "N/A"}</p>
        <p><strong>Year:</strong> ${item.year || "N/A"}</p>
        <p><strong>Rating:</strong> ${item.rating || "N/A"}</p>
      </div>
      <div class="right_data">
        <p style="font-size:20px; margin-bottom:10px" ><strong>USN:</strong> ${item.usn || "N/A"}</p>
        <p><strong>Designation:</strong> ${item.designation || "N/A"}</p>
        <p><strong>Borrowed At:</strong> ${item.borrowedAt || "N/A"}</p>
      </div>
    `;
    borrowedContainer.appendChild(itemElement);
  });
}

// Fetch and display history data when the page loads
document.addEventListener("DOMContentLoaded", fetchHistory);
