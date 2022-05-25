let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let apiKey = "OVY9pVRAEqE1feED7iFvWMNckc4dkwVfQvlL3gbl";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML += "<br><br>Title</br>" ;
  document.querySelector("#content").innerHTML +=data.title;
  document.querySelector("#content").innerHTML += "<br>" ;
  document.querySelector("#content").innerHTML += "<br><br>Date</br>" ;
  document.querySelector("#content").innerHTML +=data.date;
  document.querySelector("#content").innerHTML += "<br>" ;
  document.querySelector("#content").innerHTML += "<br><br>Description:<br><br>" ;
  document.querySelector("#content").innerHTML += data.explanation;
  document.querySelector("#content").innerHTML += "<br><br>" ;
  document.querySelector("#content").innerHTML += "<br><br>Image:<br><br>" ;
  document.querySelector("#content").innerHTML += `<img src = "${data.url}">`;
  document.querySelector("#content").innerHTML += "<br><br>" ;


}
