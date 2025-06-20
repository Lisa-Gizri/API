const form = document.getElementById("searchForm");
const resultDiv = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", async function (e) {
  e.preventDefault();
    // Get the search term entered by the user and trim extra spaces
  const term = document.getElementById("termInput").value.trim();

    // Construct the API URL with the search term
  const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${encodeURIComponent(term)}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ea653a046emshe0100a49a8fd89dp19dfbajsna2a87c431d39',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const definition = data.list?.[0]?.definition || "No definition found.";
    resultDiv.innerHTML = `<h2>${term}</h2><p>${definition}</p>`;
  } catch (error) {
    resultDiv.innerHTML = `<p class="error">Error fetching data.</p>`;
  }
});
