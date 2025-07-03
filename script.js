const container = document.getElementById("user-container");
const reloadButton = document.getElementById("reload-btn");

function loadUsers() {
  
  container.innerHTML = `<p style="text-align:center; font-weight:bold;">Loading...</p>`;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      container.innerHTML = ""; 

      users.forEach(user => {
        const div = document.createElement("div");
        div.className = "user-card";
        div.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Fetch error:", error);
      container.innerHTML = `<p style="color: red; text-align:center;">Failed to load users. Please check your connection.</p>`;
    });
}


window.addEventListener("load", loadUsers);


reloadButton.addEventListener("click", loadUsers);
