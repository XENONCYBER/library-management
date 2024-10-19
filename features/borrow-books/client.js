document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("borrow-form");
  const submitButton = document.getElementById("submit-button");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    const bookCode = document.getElementById("book-code").value;
    const bookName = document.getElementById("book-name").value;
    const designation = document.getElementById("person-identification").value;
    const usn = document.getElementById("student-usn").value;

    const data = { bookCode, bookName, designation, usn };

    try {
      const response = await fetch("http://localhost:5500/api/borrow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Book Borrowed Successfully");
        submitButton.disabled = false;
      } else {
        alert("Error Borrowing Book");
        submitButton.disabled = false;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error Borrowing Book");
      submitButton.disabled = false;
    }
  });
});
