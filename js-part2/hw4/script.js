const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchAsyncTodos() {
  console.log("Started....");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const userId1 = 20;

  let text = "";
  for (let i = 0; i < userId1; i++) {
    

    text += `
  <div class="g_1"><a>UseId: ${data[i].userId}<br>ID: ${data[i].id}</br> ${data[i].body}</a></div>`;
  }
  document.getElementById("ulist").innerHTML = text;
}

fetchAsyncTodos();

