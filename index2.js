const notesColumn = document.querySelector(".notes-column");
const addNote = document.getElementById("addNote");
const textArea = document.getElementById("input");
const comments = document.querySelector('.comments');

const addNoteToColumn = (e) => {
  e.preventDefault();
  // get the value of the text area field
  if (textArea.value !== "") {
    notesColumn.insertAdjacentHTML(
      "beforeend",
      `<span class="ital">[${textArea.value}] </span>`
    );
    textArea.value = "";
  }
};

addNote.addEventListener("click", addNoteToColumn);

// // save the contents of the notes column to the comments section
// const addToComments = (e) => {
//   // get the contents of the notes column
//   const clonedNotes = notesColumn.cloneNode(true);
//   // add the contents to the comments section
//   comments.appendChild(clonedNotes);
// };



// // save comments to localStorage
// const saveToStorage = e => {
//   const localComments = localStorage.getItem('comments');
//   if (localComments !== null) {
//     const obj = JSON.parse(localComments);
//     console.log(localComments);
//   } else {
//     const entries = {
//       comments: [
//         { entry1: {time: TIME, content: comments.outerHTML} }
//       ]
//     };
//     localStorage.setItem('comments', JSON.stringify(entries));
//   }
//   // check localstorage for previously saved comments
//   // if it doesn't exist, create create object to store comments
//   // JSON.stringify object
//   // save stringified object to local storage
   
// }
 


// comments.addEventListener('click', saveToStorage);

// get localstorage on page load
// const test = localStorage.getItem('comments');
// comments.appendChild(test);



// Copy this code for each entry and change the name of the variables for buttons
const button2212151 = document.getElementById("add2212151");
const addEntry2212151 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;10:42AM 
  (<button class="button weather-button" onclick="showWeather(221215)">12.15.22</button> 
  <a href="javascript:;" id="image-linkR-2212151" onclick="showImageR(event, 2212151)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212151)" class="weather-imageR" id="weather-imageR-2212151" 
  src="https://drive.google.com/uc?export=view&id=1U8Mz1axVx4D998XWXlfZErUH8WpaB3DC"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212151.addEventListener("click", addEntry2212151);

const button2212152 = document.getElementById("add2212152");
const addEntry2212152 = (e) => {
  e.preventDefault();
  const content = `Underwater video filmed through a glass 
  (<button class="button weather-button" onclick="showWeather(221215)">12.15.22</button> 
  <a href="javascript:;" id="video-linkR-2212151" onclick="showVideoR(event, 2212151)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212151)" class="weather-videoR" id="weather-videoR-2212151">
  <source src="https://drive.google.com/uc?export=view&id=1_zazk-5cWGcAOSCiRt-dZT0mkp63zYDW" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212152.addEventListener("click", addEntry2212152);

const button2212153 = document.getElementById("add2212153");
const addEntry2212153 = (e) => {
  e.preventDefault();
  const content = `Camera tests filming through water 
  (<button class="button weather-button" onclick="showWeather(221215)">12.15.22</button> 
  <a href="javascript:;" id="video-linkR-2212152" onclick="showVideoR(event, 2212152)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212152)" class="weather-videoR" id="weather-videoR-2212152">
  <source src="https://drive.google.com/uc?export=view&id=1VByAS0nFDmqJSOQjY5MAZsWMUS38hioH" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212153.addEventListener("click", addEntry2212153);

const button2212154 = document.getElementById("add2212154");
const addEntry2212154 = (e) => {
  e.preventDefault();
  const content = `Tornado that tore through New Orleans 
  (<button class="button weather-button" onclick="showWeather(221215)">12.15.22</button> 
  <a href="javascript:;" id="video-linkR-2212153" onclick="showVideoR(event, 2212153)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212153)" class="weather-videoR" id="weather-videoR-2212153">
  <source src="https://drive.google.com/uc?export=view&id=1npKEOjHJhGeOYBR8PmuNvWb6dW7Fbn10" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212154.addEventListener("click", addEntry2212154);

const button2212155 = document.getElementById("add2212155");
const addEntry2212155 = (e) => {
  e.preventDefault();
  const content = `Urban Ecology Center bird walk 
  (<button class="button weather-button" onclick="showWeather(221215)">12.15.22</button> 
  <a href="https://calendar.urbanecologycenter.org/" target="_blank" rel="noopener noreferrer" class="url-link"> 
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212155.addEventListener("click", addEntry2212155);

//

const button2212141 = document.getElementById("add2212141");
const addEntry2212141 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;2:32PM 
  (<button class="button weather-button" onclick="showWeather(221214)">12.14.22</button> 
  <a href="javascript:;" id="image-linkR-2212141" onclick="showImageR(event, 2212141)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212141)" class="weather-imageR" id="weather-imageR-2212141" 
  src="https://drive.google.com/uc?export=view&id=1Z5Ar9KirCF09aDa9oI8BYq03QepNN9LM"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212141.addEventListener("click", addEntry2212141);

const button2212142 = document.getElementById("add2212142");
const addEntry2212142 = (e) => {
  e.preventDefault();
  const content = `“Madam, I never saw an ugly thing in my life, but light, shade, or perspective would always make it beautiful” 
  (<button class="button weather-button" onclick="showWeather(221214)">12.14.22</button> 
  <a href="javascript:;" id="image-linkR-2212142" onclick="showImageR(event, 2212142)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212142)" class="weather-imageR" id="weather-imageR-2212142" 
  src="https://drive.google.com/uc?export=view&id=1rA7qx4udwWdqCFM9ysd3FXmFEJPz9gdS"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212142.addEventListener("click", addEntry2212142);

const button2212143 = document.getElementById("add2212143");
const addEntry2212143 = (e) => {
  e.preventDefault();
  const content = `Floods and landslides kill scores of people in Kinshasa 
  (<button class="button weather-button" onclick="showWeather(221214)">12.14.22</button> 
  <a href="https://www.theguardian.com/world/2022/dec/13/floods-and-landslides-kill-people-kinshasa-heavy-rain-congo" target="_blank" rel="noopener noreferrer" class="url-link"> 
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212143.addEventListener("click", addEntry2212143);

const button2212144 = document.getElementById("add2212144");
const addEntry2212144 = (e) => {
  e.preventDefault();
  const content = `Strong wind creating ground blizzard conditions in Lusk, Wyoming 
  (<button class="button weather-button" onclick="showWeather(221214)">12.14.22</button> 
  <a href="javascript:;" id="video-linkR-2212141" onclick="showVideoR(event, 2212141)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212141)" class="weather-videoR" id="weather-videoR-2212141">
  <source src="https://drive.google.com/uc?export=view&id=1hE3hjkySUedYQD_B_82yt5iOgViqCQ_a" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212144.addEventListener("click", addEntry2212144);

const button2212145 = document.getElementById("add2212145");
const addEntry2212145 = (e) => {
  e.preventDefault();
  const content = `A tornado was spotted crossing a highway in New Iberia, Louisiana 
  (<button class="button weather-button" onclick="showWeather(221214)">12.14.22</button> 
  <a href="javascript:;" id="video-linkR-2212142" onclick="showVideoR(event, 2212142)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212142)" class="weather-videoR" id="weather-videoR-2212142">
  <source src="https://drive.google.com/uc?export=view&id=1xIdbCs33Vdolwch6l1UiSTXUpIUItnW2" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212145.addEventListener("click", addEntry2212145);

const button2212146 = document.getElementById("add2212146");
const addEntry2212146 = (e) => {
  e.preventDefault();
  const content = `Bunny sitting in the cold rain 
  (<button class="button weather-button" onclick="showWeather(221214)">12.14.22</button> 
  <a href="javascript:;" id="image-linkR-2212143" onclick="showImageR(event, 2212143)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212143)" class="weather-imageR" id="weather-imageR-2212143" 
  src="https://drive.google.com/uc?export=view&id=1OXczDEtHL1qOYuh9RpnkiXXjwRpOfMlV"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212146.addEventListener("click", addEntry2212146);

//

const button2212131 = document.getElementById("add2212131");
const addEntry2212131 = (e) => {
  e.preventDefault();
  const content = `Lower East Side, Milwaukee, WI&#8212;12:32PM 
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="javascript:;" id="image-linkR-2212131" onclick="showImageR(event, 2212131)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212131)" class="weather-imageR" id="weather-imageR-2212131" 
  src="https://drive.google.com/uc?export=view&id=1nBwWOJ0FBRgyePzP6C6yTtSQj8vnPBv7"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212131.addEventListener("click", addEntry2212131);

const button2212132 = document.getElementById("add2212132");
const addEntry2212132 = (e) => {
  e.preventDefault();
  const content = `Artist friend who goes to document Lake Michigan everyday 
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="http://www.melanieariens.com/" target="_blank" rel="noopener noreferrer" class="url-link"> 
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212132.addEventListener("click", addEntry2212132);

const button2212133 = document.getElementById("add2212133");
const addEntry2212133= (e) => {
  e.preventDefault();
  const content = `A tornado spotted in Fort Worth, Texas 
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="javascript:;" id="video-linkR-2212131" onclick="showVideoR(event, 2212131)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212131)" class="weather-videoR" id="weather-videoR-2212131">
  <source src="https://drive.google.com/uc?export=view&id=1sQ54f3RwZCo4GFzNL2eJG9Hik-X958Q2" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212133.addEventListener("click", addEntry2212133);

const button2212134 = document.getElementById("add2212134");
const addEntry2212134 = (e) => {
  e.preventDefault();
  const content = `A man found himself in the path of an apparent tornado near Grapevine, Texas 
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="javascript:;" id="video-linkR-2212132" onclick="showVideoR(event, 2212132)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212132)" class="weather-videoR" id="weather-videoR-2212132">
  <source src="https://drive.google.com/uc?export=view&id=1nmWoV8S8oNezrMX4uFa-KVzudQOpMwd6" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212134.addEventListener("click", addEntry2212134);

const button2212135 = document.getElementById("add2212135");
const addEntry2212135 = (e) => {
  e.preventDefault();
  const content = `Powerful, severe winds in Forney, Texas 
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="javascript:;" id="video-linkR-2212133" onclick="showVideoR(event, 2212133)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212133)" class="weather-videoR" id="weather-videoR-2212133">
  <source src="https://drive.google.com/uc?export=view&id=15AuRYrmkV_ymBJHEpoP2x7GsHkFxDc_a" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212135.addEventListener("click", addEntry2212135);

const button2212136 = document.getElementById("add2212136");
const addEntry2212136 = (e) => {
  e.preventDefault();
  const content = `Heavy snow and wind making for near whiteout conditions on Colorado’s northeastern Plains 
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="javascript:;" id="video-linkR-2212134" onclick="showVideoR(event, 2212134)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212134)" class="weather-videoR" id="weather-videoR-2212134">
  <source src="https://drive.google.com/uc?export=view&id=1ajLJKLtaGWsUV6oBDe_4aWbRFt7zrVfE" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212136.addEventListener("click", addEntry2212136);

const button2212137 = document.getElementById("add2212137");
const addEntry2212137 = (e) => {
  e.preventDefault();
  const content = `Snow goose 
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="javascript:;" id="sound-linkR-2212131" onclick="showSoundR(event, 2212131)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212131)" class="weather-soundR" id="weather-soundR-2212131">
  <source src="https://drive.google.com/uc?export=view&id=1HbrNrenVcNy9I1VUiB7FVceC7J2V3RUs" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212137.addEventListener("click", addEntry2212137);

const button2212138 = document.getElementById("add2212138");
const addEntry2212138 = (e) => {
  e.preventDefault();
  const content = `Swans
  (<button class="button weather-button" onclick="showWeather(221213)">12.13.22</button> 
  <a href="javascript:;" id="sound-linkR-2212132" onclick="showSoundR(event, 2212132)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212132)" class="weather-soundR" id="weather-soundR-2212132">
  <source src="https://drive.google.com/uc?export=view&id=1sH0XGAeB_a2MZheTTt9b83Y5Dqpi0LZa" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212138.addEventListener("click", addEntry2212138);

//

const button2212121 = document.getElementById("add2212121");
const addEntry2212121 = (e) => {
  e.preventDefault();
  const content = `Lower East Side, Milwaukee, WI&#8212;12:59PM 
  (<button class="button weather-button" onclick="showWeather(221212)">12.12.22</button> 
  <a href="javascript:;" id="image-linkR-2212121" onclick="showImageR(event, 2212121)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212121)" class="weather-imageR" id="weather-imageR-2212121" 
  src="https://drive.google.com/uc?export=view&id=1z_CSseJI4UqNVzA9Kc_FH41UAuo2RHL2"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212121.addEventListener("click", addEntry2212121);

const button2212122 = document.getElementById("add2212122");
const addEntry2212122 = (e) => {
  e.preventDefault();
  const content = `Illustrations of cumulus clouds from Thomas Forster’s book 
  (<button class="button weather-button" onclick="showWeather(221212)">12.12.22</button> 
  <a href="javascript:;" id="image-linkR-2212122" onclick="showImageR(event, 2212122)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212122)" class="weather-imageR" id="weather-imageR-2212122" 
  src="https://drive.google.com/uc?export=view&id=1rvHYQ_SQX-e3qzUJN0eVly0eiOlt1zfG"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212122.addEventListener("click", addEntry2212122);

const button2212123 = document.getElementById("add2212123");
const addEntry2212123 = (e) => {
  e.preventDefault();
  const content = `Tornado sweeps through New Orleans 
  (<button class="button weather-button" onclick="showWeather(221212)">12.12.22</button> 
  <a href="javascript:;" id="video-linkR-2212121" onclick="showVideoR(event, 2212121)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212121)" class="weather-videoR" id="weather-videoR-2212121">
  <source src="https://drive.google.com/uc?export=view&id=1VHsDDHkhMx28HJvnMOtN39mWwHMqg9dB" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212123.addEventListener("click", addEntry2212123);

const button2212124 = document.getElementById("add2212124");
const addEntry2212124 = (e) => {
  e.preventDefault();
  const content = `Northern shrike 
  (<button class="button weather-button" onclick="showWeather(221212)">12.12.22</button> 
  <a href="javascript:;" id="sound-linkR-2212121" onclick="showSoundR(event, 2212121)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212121)" class="weather-soundR" id="weather-soundR-2212121">
  <source src="https://drive.google.com/uc?export=view&id=1v28yq1j96UCSkU0WRaGt_Mvq8uHkRvDS" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212124.addEventListener("click", addEntry2212124);

const button2212125 = document.getElementById("add2212125");
const addEntry2212125 = (e) => {
  e.preventDefault();
  const content = `Peregrine falcon 
  (<button class="button weather-button" onclick="showWeather(221212)">12.12.22</button> 
  <a href="javascript:;" id="sound-linkR-2212122" onclick="showSoundR(event, 2212122)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212122)" class="weather-soundR" id="weather-soundR-2212122">
  <source src="https://drive.google.com/uc?export=view&id=1l7UPTHMJUmZItKuZaeQaNEb02wpPTQJw" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212125.addEventListener("click", addEntry2212125);

//

const button2212111 = document.getElementById("add2212111");
const addEntry2212111 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;11:37AM 
  (<button class="button weather-button" onclick="showWeather(221211)">12.11.22</button> 
  <a href="javascript:;" id="image-linkR-2212111" onclick="showImageR(event, 2212111)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212111)" class="weather-imageR" id="weather-imageR-2212111" 
  src="https://drive.google.com/uc?export=view&id=10FE75xVRZLBQBWvwYpKhtb9JKZDegqrB"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212111.addEventListener("click", addEntry2212111);

const button2212112 = document.getElementById("add2212112");
const addEntry2212112 = (e) => {
  e.preventDefault();
  const content = `Audio Long Read episode on flood resilience 
  (<button class="button weather-button" onclick="showWeather(221211)">12.11.22</button> 
  <a href="javascript:;" id="sound-linkR-2212111" onclick="showSoundR(event, 2212111)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212111)" class="weather-soundR" id="weather-soundR-2212111">
  <source src="https://drive.google.com/uc?export=view&id=10xHiNhcekW1txaPGsuHwUiVlvKCk9IiL" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212112.addEventListener("click", addEntry2212112);

const button2212113 = document.getElementById("add2212113");
const addEntry2212113 = (e) => {
  e.preventDefault();
  const content = `National Geographic article about a Canadian river being granted legal personhood 
  (<button class="button weather-button" onclick="showWeather(221211)">12.11.22</button> 
  <a href="https://www.nationalgeographic.com/travel/article/these-rivers-are-now-considered-people-what-does-that-mean-for-travelers" target="_blank" rel="noopener noreferrer" class="url-link"> 
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212113.addEventListener("click", addEntry2212113);

const button2212114 = document.getElementById("add2212114");
const addEntry2212114 = (e) => {
  e.preventDefault();
  const content = `Concerns of more landslides in Southern California after portion of cliff collapses onto beach 
  (<button class="button weather-button" onclick="showWeather(221211)">12.11.22</button> 
  <a href="javascript:;" id="video-linkR-2212111" onclick="showVideoR(event, 2212111)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212111)" class="weather-videoR" id="weather-videoR-2212111">
  <source src="https://drive.google.com/uc?export=view&id=1sUivGRkuW7d7aBhhdQ-4nir0VtuUgAbN" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212114.addEventListener("click", addEntry2212114);

const button2212115 = document.getElementById("add2212115");
const addEntry2212115 = (e) => {
  e.preventDefault();
  const content = `Black-legged kittiwake 
  (<button class="button weather-button" onclick="showWeather(221211)">12.11.22</button> 
  <a href="javascript:;" id="sound-linkR-2212112" onclick="showSoundR(event, 2212112)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212112)" class="weather-soundR" id="weather-soundR-2212112">
  <source src="https://drive.google.com/uc?export=view&id=1pj_aEFNB6761BBsLUXMzR-PjvNUWdCck" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212115.addEventListener("click", addEntry2212115);

//

const button2212101 = document.getElementById("add2212101");
const addEntry2212101 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;10:41AM 
  (<button class="button weather-button" onclick="showWeather(221210)">12.10.22</button> 
  <a href="javascript:;" id="image-linkR-2212101" onclick="showImageR(event, 2212101)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212101)" class="weather-imageR" id="weather-imageR-2212101" 
  src="https://drive.google.com/uc?export=view&id=1j2SzOnSbvfKR-4RW8BMlq2ewLeWQBIp4"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212101.addEventListener("click", addEntry2212101);

const button2212102 = document.getElementById("add2212102");
const addEntry2212102 = (e) => {
  e.preventDefault();
  const content = `Two more small bird feeders installed outside&#8212;one made out of an old prescription bottle 
  (<button class="button weather-button" onclick="showWeather(221210)">12.10.22</button> 
  <a href="javascript:;" id="image-linkR-2212102" onclick="showImageR(event, 2212102)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212102)" class="weather-imageR" id="weather-imageR-2212102" 
  src="https://drive.google.com/uc?export=view&id=1E0x-roML1StB0lZzRrUMjp454Eclrj42"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212102.addEventListener("click", addEntry2212102);

const button2212103 = document.getElementById("add2212103");
const addEntry2212103 = (e) => {
  e.preventDefault();
  const content = `Ring-necked pheasant 
  (<button class="button weather-button" onclick="showWeather(221210)">12.10.22</button> 
  <a href="javascript:;" id="sound-linkR-2212101" onclick="showSoundR(event, 2212101)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212101)" class="weather-soundR" id="weather-soundR-2212101">
  <source src="https://drive.google.com/uc?export=view&id=1DaEr72nc1QzEuURnd3NZqqyjfLtdk9Sm" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212103.addEventListener("click", addEntry2212103);

const button2212104 = document.getElementById("add2212104");
const addEntry2212104 = (e) => {
  e.preventDefault();
  const content = `Winter weather havoc is expected to make a cross-country run 
  (<button class="button weather-button" onclick="showWeather(221210)">12.10.22</button> 
  <a href="javascript:;" id="video-linkR-2212101" onclick="showVideoR(event, 2212101)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212101)" class="weather-videoR" id="weather-videoR-2212101">
  <source src="https://drive.google.com/uc?export=view&id=1IxGnnnWP27tHgdi1hyqt37CxpfXNu1hc" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212104.addEventListener("click", addEntry2212104);

const button2212105 = document.getElementById("add2212105");
const addEntry2212105 = (e) => {
  e.preventDefault();
  const content = `Black-legged kittiwake 
  (<button class="button weather-button" onclick="showWeather(221210)">12.10.22</button> 
  <a href="javascript:;" id="sound-linkR-2212102" onclick="showSoundR(event, 2212102)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212102)" class="weather-soundR" id="weather-soundR-2212102">
  <source src="https://drive.google.com/uc?export=view&id=1LPqQ2UDZtOuBHhKE__g-4x9QPQwSTtXo" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212105.addEventListener("click", addEntry2212105);

const button2212106 = document.getElementById("add2212106");
const addEntry2212106 = (e) => {
  e.preventDefault();
  const content = `Black-legged kittiwake 
  (<button class="button weather-button" onclick="showWeather(221210)">12.10.22</button> 
  <a href="javascript:;" id="sound-linkR-2212103" onclick="showSoundR(event, 2212103)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212103)" class="weather-soundR" id="weather-soundR-2212103">
  <source src="https://drive.google.com/uc?export=view&id=1pcYKpSbTmLVc8ajS0qXymIdsBdl94VyF" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212106.addEventListener("click", addEntry2212106);

//

const button2212091 = document.getElementById("add2212091");
const addEntry2212091 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;12:28PM 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="image-linkR-2212091" onclick="showImageR(event, 2212091)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212091)" class="weather-imageR" id="weather-imageR-2212091" 
  src="https://drive.google.com/uc?export=view&id=1-PZIjy47O1LCMAfToOKBBxvJsUwv_EnE" alt="sky" />`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212091.addEventListener("click", addEntry2212091);

const button2212092 = document.getElementById("add2212092");
const addEntry2212092 = (e) => {
  e.preventDefault();
  const content = `R at the dog park 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="video-linkR-2212091" onclick="showVideoR(event, 2212091)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212091)" class="weather-videoR" id="weather-videoR-2212091">
  <source src="https://drive.google.com/uc?export=view&id=1DvGFHkaWCDWgcgVjqWVZ2hr-25Hagbi0" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212092.addEventListener("click", addEntry2212092);

const button2212094 = document.getElementById("add2212094");
const addEntry2212094 = (e) => {
  e.preventDefault();
  const content = `Fleeing from hurricanes, Americans are flocking to fire, a study finds 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="https://www.sciencedaily.com/releases/2022/12/221208085829.htm" target="_blank" rel="noopener noreferrer" class="url-link">
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212094.addEventListener("click", addEntry2212094);

const button2212095 = document.getElementById("add2212095");
const addEntry2212095 = (e) => {
  e.preventDefault();
  const content = `Montana community rescues horses trapped in deep, icy pond 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="video-linkR-2212092" onclick="showVideoR(event, 2212092)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212092)" class="weather-videoR" id="weather-videoR-2212092">
  <source src="https://drive.google.com/uc?export=view&id=1CvHkIMQfJg2Zw-vIgvhzkM_emNsXBHe1" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212095.addEventListener("click", addEntry2212095);

const button2212096 = document.getElementById("add2212096");
const addEntry2212096 = (e) => {
  e.preventDefault();
  const content = `Snowy owls 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="sound-linkR-2212091" onclick="showSoundR(event, 2212091)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212091)" class="weather-soundR" id="weather-soundR-2212091">
  <source src="https://drive.google.com/uc?export=view&id=1SrBqDzSI0JhGZKBIyf-xzYSkGlBTMDf6" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212096.addEventListener("click", addEntry2212096);

const button2212097 = document.getElementById("add2212097");
const addEntry2212097 = (e) => {
  e.preventDefault();
  const content = `Tundra swans 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="sound-linkR-2212092" onclick="showSoundR(event, 2212092)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212092)" class="weather-soundR" id="weather-soundR-2212092">
  <source src="https://drive.google.com/uc?export=view&id=1qgIVy2lpJWYijd4OMyjrOFkm4AA8EPNl" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212097.addEventListener("click", addEntry2212097);

const button2212098 = document.getElementById("add2212098");
const addEntry2212098 = (e) => {
  e.preventDefault();
  const content = `Trumpeters 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="sound-linkR-2212093" onclick="showSoundR(event, 2212093)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212093)" class="weather-soundR" id="weather-soundR-2212093">
  <source src="https://drive.google.com/uc?export=view&id=1Y3Q_0ONekJ6d9FlYfWMXApARKUcMZXtv" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212098.addEventListener("click", addEntry2212098);

const button2212099 = document.getElementById("add2212099");
const addEntry2212099 = (e) => {
  e.preventDefault();
  const content = `Mute swans 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="sound-linkR-2212094" onclick="showSoundR(event, 2212094)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212094)" class="weather-soundR" id="weather-soundR-2212094">
  <source src="https://drive.google.com/uc?export=view&id=1sH0XGAeB_a2MZheTTt9b83Y5Dqpi0LZa" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212099.addEventListener("click", addEntry2212099);

const button22120910 = document.getElementById("add22120910");
const addEntry22120910 = (e) => {
  e.preventDefault();
  const content = `Long-tailed ducks 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="sound-linkR-2212095" onclick="showSoundR(event, 2212095)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212095)" class="weather-soundR" id="weather-soundR-2212095">
  <source src="https://drive.google.com/uc?export=view&id=1jGv--UQKRXZgxAVsq5_-w40twzSRkYaP" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button22120910.addEventListener("click", addEntry22120910);

const button22120911 = document.getElementById("add22120911");
const addEntry22120911 = (e) => {
  e.preventDefault();
  const content = `Scoters 
  (<button class="button weather-button" onclick="showWeather(221209)">12.9.22</button> 
  <a href="javascript:;" id="sound-linkR-2212096" onclick="showSoundR(event, 2212096)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212096)" class="weather-soundR" id="weather-soundR-2212096">
  <source src="https://drive.google.com/uc?export=view&id=1BA2AjADGB9Lmy-scL9AzwUGs_rnyH0XL" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button22120911.addEventListener("click", addEntry22120911);

//

const button2212081 = document.getElementById("add2212081");
const addEntry2212081 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;2:49PM 
  (<button class="button weather-button" onclick="showWeather(221208)">12.8.22</button> 
  <a href="javascript:;" id="image-linkR-2212081" onclick="showImageR(event, 2212081)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212081)" class="weather-imageR" id="weather-imageR-2212081" 
  src="https://drive.google.com/uc?export=view&id=17V8884rl6qleePCTdZ_3nxGzfldTtor4"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212081.addEventListener("click", addEntry2212081);

const button2212082 = document.getElementById("add2212082");
const addEntry2212082 = (e) => {
  e.preventDefault();
  const content = `A short Guardian doc on teenage birders in the UK 
  (<button class="button weather-button" onclick="showWeather(221208)">12.8.22</button> 
  <a href="javascript:;" id="video-linkR-2212081" onclick="showVideoR(event, 2212081)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212081)" class="weather-videoR" id="weather-videoR-2212081">
  <source src="https://drive.google.com/uc?export=view&id=1yvHRXM5u6F8JaSkHz0OXoKX86bcXCu4j" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212082.addEventListener("click", addEntry2212082);

const button2212083 = document.getElementById("add2212083");
const addEntry2212083 = (e) => {
  e.preventDefault();
  const content = `Jacqueline Goss’s There There Square 
  (<button class="button weather-button" onclick="showWeather(221208)">12.8.22</button> 
  <a href="javascript:;" id="video-linkR-2212082" onclick="showVideoR(event, 2212082)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212082)" class="weather-videoR" id="weather-videoR-2212082">
  <source src="https://drive.google.com/uc?export=view&id=1kFP-odX6_J26wNa2Ua2t4CSvJxf3_cgY" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212083.addEventListener("click", addEntry2212083);

const button2212084 = document.getElementById("add2212084");
const addEntry2212084 = (e) => {
  e.preventDefault();
  const content = `The Observers&#8212;based on the work of the crew of the Mount Washington Weather Observatory in New Hampshire 
  (<button class="button weather-button" onclick="showWeather(221208)">12.8.22</button> 
  <a href="javascript:;" id="video-linkR-2212083" onclick="showVideoR(event, 2212083)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212083)" class="weather-videoR" id="weather-videoR-2212083">
  <source src="https://drive.google.com/uc?export=view&id=1Q2RzlO7hbidlXcc8_dBAQjDdNisvm4F1" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212084.addEventListener("click", addEntry2212084);

const button2212085 = document.getElementById("add2212085");
const addEntry2212085 = (e) => {
  e.preventDefault();
  const content = `Large tornado swirls through Qatar desert ahead of the World Cup quarter-finals 
  (<button class="button weather-button" onclick="showWeather(221208)">12.8.22</button> 
  <a href="javascript:;" id="video-linkR-2212084" onclick="showVideoR(event, 2212084)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212084)" class="weather-videoR" id="weather-videoR-2212084">
  <source src="https://drive.google.com/uc?export=view&id=1mp3rD0tl19beGG0ubaz-8j1pb51yCKhG" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212085.addEventListener("click", addEntry2212085);

const button2212086 = document.getElementById("add2212086");
const addEntry2212086 = (e) => {
  e.preventDefault();
  const content = `Urban Ecology Center bird walk 
  (<button class="button weather-button" onclick="showWeather(221208)">12.8.22</button> 
  <a href="https://calendar.urbanecologycenter.org" target="_blank" rel="noopener noreferrer" class="url-link">
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212086.addEventListener("click", addEntry2212086);

//

const button2212071 = document.getElementById("add2212071");
const addEntry2212071 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;11:56AM
  (<button class="button weather-button" onclick="showWeather(221207)">12.7.22</button> 
  <a href="javascript:;" id="image-linkR-2212071" onclick="showImageR(event, 2212071)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212071)" class="weather-imageR" id="weather-imageR-2212071" 
  src="https://drive.google.com/uc?export=view&id=1GodLz6QM65_KMb9u3VWq5fYeBNnSpuyk"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212071.addEventListener("click", addEntry2212071);

const button2212072 = document.getElementById("add2212072");
const addEntry2212072 = (e) => {
  e.preventDefault();
  const content = `A small bird feeder newly installed outside Colectivo 
  (<button class="button weather-button" onclick="showWeather(221207)">12.7.22</button> 
  <a href="javascript:;" id="image-linkR-2212072" onclick="showImageR(event, 2212072)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212072)" class="weather-imageR" id="weather-imageR-2212072" 
  src="https://drive.google.com/uc?export=view&id=1dEmQUmJppBbsPcNC8L1oN9RWItBiqhhk"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212072.addEventListener("click", addEntry2212072);

const button2212073 = document.getElementById("add2212073");
const addEntry2212073 = (e) => {
  e.preventDefault();
  const content = `The Birdpeople 
  (<button class="button weather-button" onclick="showWeather(221207)">12.7.22</button> 
  <a href="javascript:;" id="video-linkR-2212071" onclick="showVideoR(event, 2212071)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212071)" class="weather-videoR" id="weather-videoR-2212071">
  <source src="https://drive.google.com/uc?export=view&id=1U2z4GtLQ6Q9X2chILTiVG6GE5LUr128Y" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212073.addEventListener("click", addEntry2212073);

const button2212074 = document.getElementById("add2212074");
const addEntry2212074 = (e) => {
  e.preventDefault();
  const content = `A massive flock of birds took to the sky near the National Weather Service office in Indianapolis 
  (<button class="button weather-button" onclick="showWeather(221207)">12.7.22</button> 
  <a href="javascript:;" id="video-linkR-2212072" onclick="showVideoR(event, 2212072)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212072)" class="weather-videoR" id="weather-videoR-2212072">
  <source src="https://drive.google.com/uc?export=view&id=1lsFRnXBQj0C7tOMNFBMC7OVdHcm8X9LA" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212074.addEventListener("click", addEntry2212074);

const button2212075 = document.getElementById("add2212075");
const addEntry2212075 = (e) => {
  e.preventDefault();
  const content = `A rogue wave slammed into a cruise ship in the Drake Passage 
  (<button class="button weather-button" onclick="showWeather(221207)">12.7.22</button> 
  <a href="javascript:;" id="video-linkR-2212073" onclick="showVideoR(event, 2212073)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212073)" class="weather-videoR" id="weather-videoR-2212073">
  <source src="https://drive.google.com/uc?export=view&id=1_mv_0zfSFdzy1c3fJhVbCpLtHbLEjTlv" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212075.addEventListener("click", addEntry2212075);

//

const button2212061 = document.getElementById("add2212061");
const addEntry2212061 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;12:19PM 
  (<button class="button weather-button" onclick="showWeather(221206)">12.6.22</button> 
  <a href="javascript:;" id="image-linkR-2212061" onclick="showImageR(event, 2212061)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212061)" class="weather-imageR" id="weather-imageR-2212061" 
  src="https://drive.google.com/uc?export=view&id=1P586BAXXpXTWjSEz-bi1TBsJxC6GSFny"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212061.addEventListener("click", addEntry2212061);

const button2212062 = document.getElementById("add2212062");
const addEntry2212062 = (e) => {
  e.preventDefault();
  const content = `Michael Gitlin’s The Birdpeople 
  (<button class="button weather-button" onclick="showWeather(221206)">12.6.22</button> 
  <a href="javascript:;" id="video-linkR-2212061" onclick="showVideoR(event, 2212061)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212061)" class="weather-videoR" id="weather-videoR-2212061">
  <source src="https://drive.google.com/uc?export=view&id=1NDXcZkQWAk8FEU2WlFq5V5TvXaORiXUf" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212062.addEventListener("click", addEntry2212062);

const button2212063 = document.getElementById("add2212063");
const addEntry2212063 = (e) => {
  e.preventDefault();
  const content = `Denys Colomb de Daunant’s Dream of the Wild Horses 
  (<button class="button weather-button" onclick="showWeather(221206)">12.6.22</button> 
  <a href="javascript:;" id="video-linkR-2212062" onclick="showVideoR(event, 2212062)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212062)" class="weather-videoR" id="weather-videoR-2212062">
  <source src="https://drive.google.com/uc?export=view&id=1tVBTjZ_bC_lhNpAMSsICvtrBmgQUD3Ar" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212063.addEventListener("click", addEntry2212063);

const button2212064 = document.getElementById("add2212064");
const addEntry2212064 = (e) => {
  e.preventDefault();
  const content = `An Australian couple finds a stowaway snake 
  (<button class="button weather-button" onclick="showWeather(221206)">12.6.22</button> 
  <a href="javascript:;" id="video-linkR-2212063" onclick="showVideoR(event, 2212063)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212063)" class="weather-videoR" id="weather-videoR-2212063">
  <source src="https://drive.google.com/uc?export=view&id=12miBs5lS89-3pW7EExPS73l94gbsrCmC" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212064.addEventListener("click", addEntry2212064);

//

const button2212051 = document.getElementById("add2212051");
const addEntry2212051 = (e) => {
  e.preventDefault();
  const content = `Prospect Lefferts Garden, Brooklyn, NY&#8212;1:30PM 
  (<button class="button weather-button" onclick="showWeather(221205)">12.5.22</button> 
  <a href="javascript:;" id="image-linkR-2212051" onclick="showImageR(event, 2212051)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212051)" class="weather-imageR" id="weather-imageR-2212051" 
  src="https://drive.google.com/uc?export=view&id=1qFQOicHZwogr0QkNjDjwFYY4ENOW-xtO"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212051.addEventListener("click", addEntry2212051);

const button2212052 = document.getElementById("add2212052");
const addEntry2212052 = (e) => {
  e.preventDefault();
  const content = `Ice researchers in Antarctica capture intense wind blasting through Allan Hills 
  (<button class="button weather-button" onclick="showWeather(221205)">12.5.22</button> 
  <a href="javascript:;" id="video-linkR-2212051" onclick="showVideoR(event, 2212051)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212051)" class="weather-videoR" id="weather-videoR-2212051">
  <source src="https://drive.google.com/uc?export=view&id=1LSdfDIi8nEBT9rGb1zcrpP3C6nWqf7cy" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212052.addEventListener("click", addEntry2212052);

//

const button2212041 = document.getElementById("add2212041");
const addEntry2212041 = (e) => {
  e.preventDefault();
  const content = `Sunset Park, Brooklyn, NY&#8212;1:51PM 
  (<button class="button weather-button" onclick="showWeather(221204)">12.4.22</button> 
  <a href="javascript:;" id="image-linkR-2212041" onclick="showImageR(event, 2212041)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212041)" class="weather-imageR" id="weather-imageR-2212041" 
  src="https://drive.google.com/uc?export=view&id=18kp-XvKr2k_q9N_nNU9vnLwUFh71mQL2"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212041.addEventListener("click", addEntry2212041);

const button2212042 = document.getElementById("add2212042");
const addEntry2212042 = (e) => {
  e.preventDefault();
  const content = `Small and elemental photos 
  (<button class="button weather-button" onclick="showWeather(221204)">12.4.22</button> 
  <a href="javascript:;" id="image-linkR-2212042" onclick="showImageR(event, 2212042)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212042)" class="weather-imageR" id="weather-imageR-2212042" 
  src="https://drive.google.com/uc?export=view&id=1Wrwlzy2nrkthEukqeuBOElK5NVQaxKWD"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212042.addEventListener("click", addEntry2212042);

const button2212043 = document.getElementById("add2212043");
const addEntry2212043 = (e) => {
  e.preventDefault();
  const content = `Images that pointed skyward 
  (<button class="button weather-button" onclick="showWeather(221204)">12.4.22</button> 
  <a href="javascript:;" id="image-linkR-2212043" onclick="showImageR(event, 2212043)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212043)" class="weather-imageR" id="weather-imageR-2212043" 
  src="https://drive.google.com/uc?export=view&id=1BpwHZyK8m6wny-dwXRusbrYDbeXelgiV"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212043.addEventListener("click", addEntry2212043);

const button2212044 = document.getElementById("add2212044");
const addEntry2212044 = (e) => {
  e.preventDefault();
  const content = `Lightning flashes inside the erupting Stromboli Volcano's ash plume 
  (<button class="button weather-button" onclick="showWeather(221204)">12.4.22</button> 
  <a href="javascript:;" id="video-linkR-2212041" onclick="showVideoR(event, 2212041)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212041)" class="weather-videoR" id="weather-videoR-2212041">
  <source src="https://drive.google.com/uc?export=view&id=1gqrqAyG9aIXr2by1FwxfyHHkaP_dE_ge" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212044.addEventListener("click", addEntry2212044);

//

const button2212031 = document.getElementById("add2212031");
const addEntry2212031 = (e) => {
  e.preventDefault();
  const content = `Sunset Park, Brooklyn, NY&#8212;12:24PM 
  (<button class="button weather-button" onclick="showWeather(221203)">12.3.22</button> 
  <a href="javascript:;" id="image-linkR-2212031" onclick="showImageR(event, 2212031)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212031)" class="weather-imageR" id="weather-imageR-2212031" 
  src="https://drive.google.com/uc?export=view&id=1FVtxyug5I_UBvFEWRYsCg9wmFtrMbV-3"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212031.addEventListener("click", addEntry2212031);

const button2212032 = document.getElementById("add2212032");
const addEntry2212032 = (e) => {
  e.preventDefault();
  const content = `Dust Storm Warning for areas of Colorado, Nebraska and Kansas 
  (<button class="button weather-button" onclick="showWeather(221203)">12.3.22</button> 
  <a href="javascript:;" id="video-linkR-2212031" onclick="showVideoR(event, 2212031)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212031)" class="weather-videoR" id="weather-videoR-2212031">
  <source src="https://drive.google.com/uc?export=view&id=1NzH_gQU42RZ_geewY8nREgbzBosDMdUH" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212032.addEventListener("click", addEntry2212032);

const button2212033 = document.getElementById("add2212033");
const addEntry2212033 = (e) => {
  e.preventDefault();
  const content = `A buck in Colorado crashed through a window and landed in a Colorado Springs basement office 
  (<button class="button weather-button" onclick="showWeather(221203)">12.3.22</button> 
  <a href="javascript:;" id="image-linkR-2212032" onclick="showImageR(event, 2212032)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212032)" class="weather-imageR" id="weather-imageR-2212032" 
  src="https://drive.google.com/uc?export=view&id=1CiLVIVgwBzVDLUnLfXXFwS8XC8a4vQF5"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212033.addEventListener("click", addEntry2212033);

//

const button2212021 = document.getElementById("add2212021");
const addEntry2212021 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;12:45PM 
  (<button class="button weather-button" onclick="showWeather(221202)">12.2.22</button> 
  <a href="javascript:;" id="image-linkR-2212021" onclick="showImageR(event, 2212021)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212021)" class="weather-imageR" id="weather-imageR-2212021" 
  src="https://drive.google.com/uc?export=view&id=1niYAwk8mVMN3Q9lV_k7XBajCCFj2oSE8"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212021.addEventListener("click", addEntry2212021);

const button2212022 = document.getElementById("add2212022");
const addEntry2212022 = (e) => {
  e.preventDefault();
  const content = `99pi article on Bermuda rooftops designed to withstand hurricanes and collect fresh rainwater 
  (<button class="button weather-button" onclick="showWeather(221202)">12.2.22</button> 
  <a href="https://99percentinvisible.org/article/stepping-up-bermuda-roofs-rebuff-hurricanes-collect-water-cool-homes/" target="_blank" rel="noopener noreferrer" class="url-link">
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212022.addEventListener("click", addEntry2212022);

const button2212023 = document.getElementById("add2212023");
const addEntry2212023 = (e) => {
  e.preventDefault();
  const content = `Rising: Chapter 2 on Isle de Jean Charles, Louisiana 
  (<button class="button weather-button" onclick="showWeather(221202)">12.2.22</button> 
  <a href="javascript:;" id="sound-linkR-2212021" onclick="showSoundR(event, 2212021)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212021)" class="weather-soundR" id="weather-soundR-2212021">
  <source src="https://drive.google.com/uc?export=view&id=1VSaUMULKEqbEToghbyfdampYBB1gDphZ" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212023.addEventListener("click", addEntry2212023);

const button2212024 = document.getElementById("add2212024");
const addEntry2212024 = (e) => {
  e.preventDefault();
  const content = `A tractor trailer flipped over the side of a freeway guardrail and crashed down on top of wreckage from an earlier collision in rainy conditions in Santa Clarita, California 
  (<button class="button weather-button" onclick="showWeather(221202)">12.2.22</button> 
  <a href="javascript:;" id="video-linkR-2212021" onclick="showVideoR(event, 2212021)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212021)" class="weather-videoR" id="weather-videoR-2212021">
  <source src="https://drive.google.com/uc?export=view&id=1q0ML8DbcK0bRuwHqp42Br-KJnOOLczoF" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212024.addEventListener("click", addEntry2212024);

const button2212025 = document.getElementById("add2212025");
const addEntry2212025 = (e) => {
  e.preventDefault();
  const content = `Blebs of liquid rock spew from Mauna Loa in Hawaii 
  (<button class="button weather-button" onclick="showWeather(221202)">12.2.22</button> 
  <a href="javascript:;" id="video-linkR-2212022" onclick="showVideoR(event, 2212022)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212022)" class="weather-videoR" id="weather-videoR-2212022">
  <source src="https://drive.google.com/uc?export=view&id=1-WSGopeInnppJGZ9_6584WxyAl19ATJx" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212025.addEventListener("click", addEntry2212025);

const button2212026 = document.getElementById("add2212026");
const addEntry2212026 = (e) => {
  e.preventDefault();
  const content = `Red-breasted merganser 
  (<button class="button weather-button" onclick="showWeather(221202)">12.2.22</button> 
  <a href="javascript:;" id="sound-linkR-2212022" onclick="showSoundR(event, 2212022)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212022)" class="weather-soundR" id="weather-soundR-2212022">
  <source src="https://drive.google.com/uc?export=view&id=1uzYSRlERi-KvUdM4nI_HNmnpKY_aWP_K" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212026.addEventListener("click", addEntry2212026);

//

const button2212011 = document.getElementById("add2212011");
const addEntry2212011 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;3:44PM 
  (<button class="button weather-button" onclick="showWeather(221201)">12.1.22</button> 
  <a href="javascript:;" id="image-linkR-2212011" onclick="showImageR(event, 2212011)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2212011)" class="weather-imageR" id="weather-imageR-2212011" 
  src="https://drive.google.com/uc?export=view&id=1ADUrlXacM5NxtczKi_avIVMrE2etqBWG"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212011.addEventListener("click", addEntry2212011);

const button2212012 = document.getElementById("add2212012");
const addEntry2212012 = (e) => {
  e.preventDefault();
  const content = `The disappearance of the black tupelo tree 
  (<button class="button weather-button" onclick="showWeather(221201)">12.1.22</button> 
  <a href="javascript:;" id="sound-linkR-2212011" onclick="showSoundR(event, 2212011)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2212011)" class="weather-soundR" id="weather-soundR-2212011">
  <source src="https://drive.google.com/uc?export=view&id=1C0_V8QfsyHD3ftETZQWItSJhEcCRkSJ0" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212012.addEventListener("click", addEntry2212012);

const button2212013 = document.getElementById("add2212013");
const addEntry2212013 = (e) => {
  e.preventDefault();
  const content = `Sea smoke on Lake Superior in Duluth, Minnesota 
  (<button class="button weather-button" onclick="showWeather(221201)">12.1.22</button> 
  <a href="javascript:;" id="video-linkR-2212011" onclick="showVideoR(event, 2212011)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212011)" class="weather-videoR" id="weather-videoR-2212011">
  <source src="https://drive.google.com/uc?export=view&id=1kKSEi24-jXEy2SU9arsNUVZvSUxNW2XC" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212013.addEventListener("click", addEntry2212013);

const button2212014 = document.getElementById("add2212014");
const addEntry2212014 = (e) => {
  e.preventDefault();
  const content = `Key West residents celebrated the end of the 2022 season by setting Hurricane flags on fire 
  (<button class="button weather-button" onclick="showWeather(221201)">12.1.22</button> 
  <a href="javascript:;" id="video-linkR-2212012" onclick="showVideoR(event, 2212012)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2212012)" class="weather-videoR" id="weather-videoR-2212012">
  <source src="https://drive.google.com/uc?export=view&id=1UMEiXrjC5o_ZxM4_HcyazG7ESJY0IsWy" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212014.addEventListener("click", addEntry2212014);

const button2212015 = document.getElementById("add2212015");
const addEntry2212015 = (e) => {
  e.preventDefault();
  const content = `Urban Ecology Center bird walk 
  (<button class="button weather-button" onclick="showWeather(221201)">12.1.22</button> 
  <a href="https://calendar.urbanecologycenter.org" target="_blank" rel="noopener noreferrer" class="url-link">
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2212015.addEventListener("click", addEntry2212015);

//

const button2211011 = document.getElementById("add2211011");
const addEntry2211011 = (e) => {
  e.preventDefault();
  const content = `Riverwest, Milwaukee, WI&#8212;3:32PM 
  (<button class="button weather-button" onclick="showWeather(221101)">11.1.22</button> 
  <a href="javascript:;" id="image-linkR-2211011" onclick="showImageR(event, 2211011)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2211011)" class="weather-imageR" id="weather-imageR-2211011" 
  src="https://drive.google.com/uc?export=view&id=1TsNpz0VS-3F2r9O7EoSLK4r6zDyUObSj"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2211011.addEventListener("click", addEntry2211011);

const button2211012 = document.getElementById("add2211012");
const addEntry2211012 = (e) => {
  e.preventDefault();
  const content = `Wisconsin Birding Network listserv 
  (<button class="button weather-button" onclick="showWeather(221101)">11.1.22</button> 
  <a href="http://www.freelists.org/list/wisbirdn" target="_blank" rel="noopener noreferrer" class="url-link">
  url</a>) `;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2211012.addEventListener("click", addEntry2211012);

const button2211013 = document.getElementById("add2211013");
const addEntry2211013 = (e) => {
  e.preventDefault();
  const content = `Tropical Storm Martin intensifies as post-tropical storm but poses no threat to land 
  (<button class="button weather-button" onclick="showWeather(221101)">11.1.22</button> 
  <a href="javascript:;" id="image-linkR-2211012" onclick="showImageR(event, 2211012)" class="image-linkR">
  image</a>) 
  <image onclick="showImageR(event, 2211012)" class="weather-imageR" id="weather-imageR-2211012" 
  src="https://drive.google.com/uc?export=view&id=1Tedq1JhJWBggiir-ZGJDRxcwF61mHjJA"/>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2211013.addEventListener("click", addEntry2211013);

const button2211014 = document.getElementById("add2211014");
const addEntry2211014 = (e) => {
  e.preventDefault();
  const content = `New extreme weather pattern emerging: A wintry West and record-warm East 
  (<button class="button weather-button" onclick="showWeather(221101)">11.1.22</button> 
  <a href="javascript:;" id="video-linkR-2211012" onclick="showVideoR(event, 2211012)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2211012)" class="weather-videoR" id="weather-videoR-2211012">
  <source src="https://drive.google.com/uc?export=view&id=1SJbdKC_qo57w0gSfI4FSwIAAAth_jR5Z" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2211014.addEventListener("click", addEntry2211014);

const button2211015 = document.getElementById("add2211015");
const addEntry2211015 = (e) => {
  e.preventDefault();
  const content = `SpaceX launched the world’s most powerful rocket at 9:41AM 
  (<button class="button weather-button" onclick="showWeather(221201)">12.1.22</button> 
  <a href="javascript:;" id="video-linkR-2211011" onclick="showVideoR(event, 2211011)" class="video-linkR">
  video</a>) 
  <video autoplay loop muted onclick="showVideoR(event, 2211011)" class="weather-videoR" id="weather-videoR-2211011">
  <source src="https://drive.google.com/uc?export=view&id=1hhhFGAM1kY5KC0pQL8LC2i39NMTUKuwg" type="video/mp4"></video>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2211015.addEventListener("click", addEntry2211015);

const button2211016 = document.getElementById("add2211016");
const addEntry2211016 = (e) => {
  e.preventDefault();
  const content = `Common grackle 
  (<button class="button weather-button" onclick="showWeather(221101)">11.1.22</button> 
  <a href="javascript:;" id="sound-linkR-2211011" onclick="showSoundR(event, 2211011)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2211011)" class="weather-soundR" id="weather-soundR-2211011">
  <source src="https://drive.google.com/uc?export=view&id=108pbFPpN49oxU9VNyX1IIGhj4zNR8e37" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2211016.addEventListener("click", addEntry2211016);

const button2211017 = document.getElementById("add2211017");
const addEntry2211017 = (e) => {
  e.preventDefault();
  const content = `Red-winged blackbirds 
  (<button class="button weather-button" onclick="showWeather(221101)">11.1.22</button> 
  <a href="javascript:;" id="sound-linkR-2211012" onclick="showSoundR(event, 2211012)" class="sound-linkR">
  sound</a>) 
  <audio controls onclick="showSoundR(event, 2211012)" class="weather-soundR" id="weather-soundR-2211012">
  <source src="https://drive.google.com/uc?export=view&id=1fV8ufr4xy6h3DKXhakKvjvx5BIJBJ4em" type="audio/wav"></audio>`;
  notesColumn.insertAdjacentHTML("beforeend", content);
};
button2211017.addEventListener("click", addEntry2211017);

//

// const button22120XX = document.getElementById("add22120XX");
// const addEntry22120XX = (e) => {
//   e.preventDefault();
//   const content = `... 
//   (<button class="button weather-button" onclick="showWeather(22120X)">12.X.22</button> 
//   <a href="javascript:;" id="image-linkR-22120XX" onclick="showImageR(event, 22120XX)" class="image-linkR">
//   image</a>) 
//   <image onclick="showImageR(event, 22120XX)" class="weather-imageR" id="weather-imageR-22120XX" 
//   src="https://drive.google.com/uc?export=view&id=..."/>`;
//   notesColumn.insertAdjacentHTML("beforeend", content);
// };
// button22120XX.addEventListener("click", addEntry22120XX);

// const button22120XX = document.getElementById("add22120XX");
// const addEntry22120XX = (e) => {
//   e.preventDefault();
//   const content = `... 
//   (<button class="button weather-button" onclick="showWeather(22120X)">12.X.22</button> 
//   <a href="javascript:;" id="video-linkR-22120XX" onclick="showVideoR(event, 22120XX)" class="video-linkR">
//   video</a>) 
//   <video autoplay loop muted onclick="showVideoR(event, 22120XX)" class="weather-videoR" id="weather-videoR-22120XX">
//   <source src="https://drive.google.com/uc?export=view&id=..." type="video/mp4"></video>`;
//   notesColumn.insertAdjacentHTML("beforeend", content);
// };
// button22120XX.addEventListener("click", addEntry22120XX);

// const button22120XX = document.getElementById("add22120XX");
// const addEntry22120XX = (e) => {
//   e.preventDefault();
//   const content = `... 
//   (<button class="button weather-button" onclick="showWeather(22120X)">12.X.22</button> 
//   <a href="javascript:;" id="sound-linkR-22120XX" onclick="showSoundR(event, 22120XX)" class="sound-linkR">
//   sound</a>) 
//   <audio controls onclick="showSoundR(event, 22120XX)" class="weather-soundR" id="weather-soundR-22120XX">
//   <source src="https://drive.google.com/uc?export=view&id=..." type="audio/wav"></audio>`;
//   notesColumn.insertAdjacentHTML("beforeend", content);
// };
// button22120XX.addEventListener("click", addEntry22120XX);

// const button22120XX = document.getElementById("add22120XX");
// const addEntry22120XX = (e) => {
//   e.preventDefault();
//   const content = `... 
//   (<button class="button weather-button" onclick="showWeather(22120X)">12.X.22</button> 
//   <a href="..." target="_blank" rel="noopener noreferrer" class="url-link">
//   url</a>) `;
//   notesColumn.insertAdjacentHTML("beforeend", content);
// };
// button22120XX.addEventListener("click", addEntry22120XX);

//

// const button1 = document.getElementById("add1");
// const addEntry1 = (e) => {
//   e.preventDefault();
//   const content = `clear sky with a few small wisps of clouds scattered about 
//   (<button class="button weather-button" onclick="showWeather(220802)">8.2.22</button> 
//   <a href="javascript:;" id="image-linkR-2208021" onclick="showImageR(event, 2208021)" class="image-linkR">
//   image</a>) 
//   <image onclick="showImageR(event, 2208021)" class="weather-imageR" id="weather-imageR-2208021" 
//   src="https://drive.google.com/uc?export=view&id=1VN9r3cE8ZAmknuhcWsbqhq2v4UE54G30" alt="sky" />`;
//   // Insert the HTML into the div
//   notesColumn.insertAdjacentHTML("beforeend", content);
// };
// button1.addEventListener("click", addEntry1);



//


function showWeather(identifier) {
  var x = document.getElementById("weather-data-" + identifier);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    var otherData = document.getElementsByClassName("weather-data");
    for (var i = 0; i < otherData.length; i++) {
      var weatherData = otherData[i];
      weatherData.style.display = "none";
    }
    x.style.display = "block";
  }
  var otherData = document.getElementsByClassName("weather-image");
  for (var data in otherData) {
    if (!isNaN(parseInt(data))) {
      var weatherData = otherData[data];
      weatherData.style.display = "none";
    }
  }
  var otherData = document.getElementsByClassName("weather-video");
  for (var data in otherData) {
    if (!isNaN(parseInt(data))) {
      var weatherData = otherData[data];
      weatherData.style.display = "none";
    }
  }
  var otherData = document.getElementsByClassName("weather-sound");
  for (var data in otherData) {
    if (!isNaN(parseInt(data))) {
      var weatherData = otherData[data];
      weatherData.style.display = "none";
    }
  }
}


function showImage(event, identifier) {
  var image = document.getElementById("weather-image-" + identifier);
  var hyperlink = document.getElementById("image-link-" + identifier);

  if (image.style.display === "block") {
    image.style.display = "none";
  } else {
    image.style.display = "block";
    image.style.top = event.clientY + "px";
    image.style.left = event.clientX + "px";
  }
  return false;
}

function showImageR(event, identifier) {
  var image = document.getElementById("weather-imageR-" + identifier);
  var hyperlink = document.getElementById("image-linkR-" + identifier);

  if (image.style.display === "block") {
    image.style.display = "none";
  } else {
    image.style.display = "block";
    image.style.top = event.clientY + "px";
    image.style.left = event.clientX + "px";
  }
  return false;
}

function showImageS(event, identifier) {
  var image = document.getElementById("weather-imageS-" + identifier);
  var hyperlink = document.getElementById("image-linkS-" + identifier);

  if (image.style.display === "block") {
    image.style.display = "none";
  } else {
    image.style.display = "block";
    image.style.top = event.clientY + "px";
    image.style.left = event.clientX + "px";
  }
  return false;
}

function showVideo(event, identifier) {
  var video = document.getElementById("weather-video-" + identifier);
  var hyperlink = document.getElementById("video-link-" + identifier);

  if (video.style.display === "block") {
    video.style.display = "none";
  } else {
    video.style.display = "block";
    video.style.top = event.clientY + "px";
    video.style.left = event.clientX + "px";
  }
  return false;
}

function showVideoR(event, identifier) {
  var video = document.getElementById("weather-videoR-" + identifier);
  var hyperlink = document.getElementById("video-linkR-" + identifier);

  if (video.style.display === "block") {
    video.style.display = "none";
  } else {
    video.style.display = "block";
    video.style.top = event.clientY + "px";
    video.style.left = event.clientX + "px";
  }
  return false;
}

function showVideoS(event, identifier) {
  var video = document.getElementById("weather-videoS-" + identifier);
  var hyperlink = document.getElementById("video-linkS-" + identifier);

  if (video.style.display === "block") {
    video.style.display = "none";
  } else {
    video.style.display = "block";
    video.style.top = event.clientY + "px";
    video.style.left = event.clientX + "px";
  }
  return false;
}

function showSound(event, identifier) {
  var sound = document.getElementById("weather-sound-" + identifier);
  var hyperlink = document.getElementById("sound-link-" + identifier);

  if (sound.style.display === "block") {
    sound.style.display = "none";
    sound.pause();
  } else {
    sound.style.display = "block";
    sound.style.top = event.clientY + "px";
    sound.style.left = event.clientX + "px";
    sound.play();
  }
  return false;
}

function showSoundR(event, identifier) {
  var sound = document.getElementById("weather-soundR-" + identifier);
  var hyperlink = document.getElementById("sound-linkR-" + identifier);

  if (sound.style.display === "block") {
    sound.style.display = "none";
    sound.pause();
  } else {
    sound.style.display = "block";
    sound.style.top = event.clientY + "px";
    sound.style.left = event.clientX + "px";
    sound.play();
  }
  return false;
}

function showSoundS(event, identifier) {
  var sound = document.getElementById("weather-soundS-" + identifier);
  var hyperlink = document.getElementById("sound-linkS-" + identifier);

  if (sound.style.display === "block") {
    sound.style.display = "none";
    sound.pause();
  } else {
    sound.style.display = "block";
    sound.style.top = event.clientY + "px";
    sound.style.left = event.clientX + "px";
    sound.play();
  }
  return false;
}

//

function showNotes(identifier) {
  var x = document.getElementById("notes-data-" + identifier);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    var otherData = document.getElementsByClassName("notes-data");
    for (var i = 0; i < otherData.length; i++) {
      var notesData = otherData[i];
      notesData.style.display = "none";
    }
    x.style.display = "block";
  }
  var otherData = document.getElementsByClassName("notes-image");
  for (var data in otherData) {
    if (!isNaN(parseInt(data))) {
      var notesData = otherData[data];
      notesData.style.display = "none";
    }
  }
  var otherData = document.getElementsByClassName("notes-video");
  for (var data in otherData) {
    if (!isNaN(parseInt(data))) {
      var notesData = otherData[data];
      notesData.style.display = "none";
    }
  }
  var otherData = document.getElementsByClassName("notes-sound");
  for (var data in otherData) {
    if (!isNaN(parseInt(data))) {
      var notesData = otherData[data];
      notesData.style.display = "none";
    }
  }
}

//


// function printDiv(divName) {
//     // var printContents = document.getElementById(divName).innerHTML;
//     // var originalContents = document.body.innerHTML;

//     // document.body.innerHTML = printContents;

//     const test1 = document.querySelector('.weather-column');
//     test1.style.display = "none";

//     const test2 = document.querySelector('.inputsection');
//     test2.style.display = "none";

//     const test3 = document.querySelector('.size3');
//     // test3.style.backgroundColor = "yellow"
//     test3.style.width = "calc(100vw - 80px)";
//     test3.style.fontSize = "25px";

//     window.print();

//     test1.style.display = "block";
//     test2.style.display = "block";
//     test3.style.width = "calc(50vw - 55px)";

//     // document.body.innerHTML = originalContents;
// }

// window.onload=function(){
//   var allLinks = document.getElementsByClassName("image-link");
//   for (var i = 0; i < allLinks.length; i++) {
//     allLinks[i].addEventListener('click', function (e) {
//       var rect = e.target.getBoundingClientRect();
//       var x = e.clientX - rect.left; //x position within the element.

//       // var images = document.getElementsByClassName("weather-image");
//       // for (var i = 0; i < images.length; i++) {
//       //   var leftPosition = images[i].style.left;
//       //   var slice = parseInt(leftPosition.slice(0,leftPosition.length - 2))
//       //   images[i].style.left = (slice + x) + 'px'
//       // }

//       // var videos = document.getElementsByClassName("weather-video");
//       // for (var i = 0; i < videos.length; i++) {
//       //   var leftPosition = videos[i].style.left;
//       //   var slice = parseInt(leftPosition.slice(0,leftPosition.length - 2))
//       //   videos[i].style.left = (slice + x) + 'px'
//       // }
//     });
//   }
// }
