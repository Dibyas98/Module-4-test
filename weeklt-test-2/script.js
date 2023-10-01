const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = `
        <div class="cursor">
        ${event.clientX}
        <h4>Mouse X Prosition(px)</h4>
      </div>
      <div class="cursor">
        ${event.clientY}
        <h4>Mouse Y Prosition(px)</h4>
      </div>
  `;
});
