document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("return-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const bookCode = document.getElementById("book-code").value;
    const designation = document.getElementById("person-identification").value;
    const usn = document.getElementById("student-usn").value;

    const data = { bookCode, designation, usn };

    try {
      const response = await fetch("http://localhost:5500/api/return", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Book Returned Successfully");
      } else {
        alert("Error Returned Book");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error Returned Book");
    }
  });
});
