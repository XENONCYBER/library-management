document.addEventListener("DOMContentLoaded", () => {
  const leftarrow = document.querySelector("#leftarrow");
  const rightarrow = document.querySelector("#rightarrow");
  const sidebar = document.querySelector("#sidebar");

  leftarrow.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    leftarrow.style.display = "none";
    rightarrow.style.display = "block";
  });

  rightarrow.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    rightarrow.style.display = "none";
    leftarrow.style.display = "block";
  });
});
