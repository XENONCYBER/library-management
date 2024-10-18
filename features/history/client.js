async function fetchHistory() {
  try {
    const response = await fetch("http://localhost:5500/api/history");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const historyData = await response.json();
    displayHistory(historyData);
  } catch (error) {
    console.error("Error fetching history data:", error);
  }
}

function displayHistory(historyData) {
  const historyContainer = document.getElementById("history-container");
  if (!historyContainer) {
    console.error("History container not found");
    return;
  }
  historyContainer.innerHTML = "";

  historyData.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("history-item");
    itemElement.innerHTML = `
      <div class="left_data">
        <p style="font-size:20px; margin-bottom:10px" ><strong>Book Name:</strong> ${
          item.bookName || "N/A"
        }</p>
        <p><strong>Book Code:</strong> ${item.bookCode || "N/A"}</p>
      </div>
      <div class="right_data" style="margin-right: 10px;">
        <p style="font-size:20px; margin-bottom:10px" ><strong>USN:</strong> ${
          item.usn || "N/A"
        }</p>
        <p><strong>Designation:</strong> ${item.designation || "N/A"}</p>
        <p><strong>Borrowed At:</strong> ${item.borrowedAt || "N/A"}</p>
        <p><strong>Returned At:</strong> ${item.returnedAt || "N/A"}</p>
      </div>
    `;
    historyContainer.appendChild(itemElement);
  });
}

// Fetch and display history data when the page loads
document.addEventListener("DOMContentLoaded", fetchHistory);
