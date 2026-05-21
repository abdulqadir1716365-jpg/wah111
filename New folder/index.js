// function getBtn() {
//   const query = document.getElementById("searchInput").value.trim();

//   if (!query) {
//     document.getElementById("result").innerHTML = "Please enter something";
//     return;
//   }

//   fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${query}`)
//     .then(res => {
//       if (!res.ok) throw new Error("API error");
//       return res.json();
//     })
//     .then(data => {
//       const recipes = data.data.recipes;
//       const resultDiv = document.getElementById("result");

//       resultDiv.innerHTML = "";

//       if (!recipes || recipes.length === 0) {
//         resultDiv.innerHTML = "No recipes found";
//         return;
//       }

//       recipes.forEach(recipe => {
//         resultDiv.innerHTML += `
//           <div style="border:1px solid #ddd; margin:10px; padding:10px;">
//             <h3>${recipe.title}</h3>
//             <img src="${recipe.image_url}" width="150">
//             <p>${recipe.publisher}</p>
//             <a href="${recipe.source_url}" target="_blank">View Recipe</a>
//           </div>
//         `;
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       document.getElementById("result").innerHTML = "Error loading data";
//     });
// }





















// function getBtn() {
//   const query = document.getElementById("searchInput").value.trim();

//   if (!query) {
//     document.getElementById("result").innerHTML = "Please enter something";
//     return;
//   }

//   fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${query}`)
//     .then(res => {
//       if (!res.ok) throw new Error("API error");
//       return res.json();
//     })
//     .then(data => {
//       const recipes = data.data.recipes;
//       const resultDiv = document.getElementById("result");

//       resultDiv.innerHTML = "";

//       if (!recipes || recipes.length === 0) {
//         resultDiv.innerHTML = "No recipes found";
//         return;
//       }

//       recipes.forEach(recipe => {
//         resultDiv.innerHTML += `
//           <div style="border:1px solid #ddd; margin:10px; padding:10px;">
//             <h3>${recipe.title}</h3>
//             <img src="${recipe.image_url}" width="150">
//             <p>${recipe.publisher}</p>
//             <a href="${recipe.source_url}" target="_blank">View Recipe</a>
//           </div>
//         `;
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       document.getElementById("result").innerHTML = "Error loading data";
//     });
// }

// // module style binding
// document.getElementById("btn").addEventListener("click", getBtn);









function getBtn() {
  const query = document.getElementById("searchInput").value.trim();

  if (!query) {
    document.getElementById("result").innerHTML = "Please enter something";
    return;
  }

  fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${query}`)
    .then(res => {
      if (!res.ok) throw new Error("API error");
      return res.json();
    })
    .then(data => {
      const recipes = data.data.recipes;
      const resultDiv = document.getElementById("result");

      resultDiv.innerHTML = "";

      if (!recipes || recipes.length === 0) {
        resultDiv.innerHTML = "No recipes found";
        return;
      }

      recipes.forEach(recipe => {
        resultDiv.innerHTML += `
          <div style="border:1px solid #ddd; margin:10px; padding:10px;">
            <h3>${recipe.title}</h3>
            <img src="${recipe.image_url}" width="150">
            <p>${recipe.publisher}</p>
            <a href="${recipe.source_url}" target="_blank">View Recipe</a>
          </div>
        `;
      });
    })
    .catch(err => {
      console.log(err);
      document.getElementById("result").innerHTML = "Error loading data";
    });
}

// ❌ OLD WRONG (ye module me mat use karo)
// document.getElementById("btn").onclick = getBtn;

// ✔️ CORRECT MODULE WAY
document.getElementById("btn").addEventListener("click", getBtn);