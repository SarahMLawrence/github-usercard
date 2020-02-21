/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const entry = document.querySelector('.cards');

axios.get('https://api.github.com/users/SarahMLawrence')

  .then((response) => {
    let newUserCard = userCard(response.data);

    entry.appendChild(newUserCard);

    const calendarDiv = document.createElement('div');
    entry.appendChild(calendarDiv);
    calendarDiv.classList.add("calendar");

    new GitHubCalendar(".calendar", "SarahMLawrence");
  })

  .catch((err) => {
    console.log(err)
  })





/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function userCard(data) {

  const newCard = document.createElement("div");//parent
  newCard.classList.add("card");

  const newImage = document.createElement("img");
  newImage.src = data.avatar_url;

  const newInfo = document.createElement("div"); //parent
  newInfo.classList.add("card-info");

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = data.name;

  //cant get username to show up??
  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = data.username;

  const location = document.createElement("p");
  location.textContent = `Location: ${data.location}`;


  const newProfile = document.createElement("p");//parent
  newProfile.textContent = "Profile: ";

  const newAddress = document.createElement('a');
  newAddress.setAttribute("href", data.html_url);
  newAddress.textContent = data.html_url;

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${data.followers}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${data.following}`;

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${data.bio}`;



  newCard.appendChild(newImage);
  newCard.appendChild(newInfo);
  newInfo.appendChild(name);
  newInfo.appendChild(username);
  newInfo.appendChild(location);
  newInfo.appendChild(newProfile);
  newProfile.appendChild(newAddress);
  newInfo.appendChild(followers);
  newInfo.appendChild(following);
  newInfo.appendChild(bio);
  // newCard.appendChild(calendar);


  return newCard;



}


let followersArray = [];
followersArray = ["AustinJHealy", "dustinmyers", "justsml", "luishrd", "bigknell"];
//followersArray = tetondan, dustinmyers, justsml, luishrd, bigknell, AustinJHealy;

followersArray.forEach(following =>
  axios.get(`https://api.github.com/users/${following}`)

    .then((response) => {

      entry.appendChild(userCard(response.data));

    })

    .catch((err) => {
      console.log(err)
    })


)


