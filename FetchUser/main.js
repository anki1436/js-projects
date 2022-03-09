document.getElementById("fetchUser").addEventListener("click", (e) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let html = "";
        data.forEach((user) => {
          html += ` <tr style="border-bottom: 1px solid black">
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
             
              </tr>    `;
          document.getElementById("tablebody").innerHTML = html;
        });
      });
  });
  