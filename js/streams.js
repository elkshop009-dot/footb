import { matches } from '../data/Data.mjs';

const teamALogo = document.getElementById('teamA-logo');
const teamBLogo = document.getElementById('teamB-logo');
const matchTitle = document.getElementById('matchTitle');
const matchTime = document.getElementById('matchTime');
const imagebackElement = document.getElementById('imageback');  // Image element for background

// Function to get the match ID from the URL
function getMatchId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to get image as Base64
function getImageBase64(imgElement) {
    return new Promise((resolve, reject) => {
        if (!imgElement.src) return reject("No image src");
        const img = new Image();
        img.crossOrigin = "Anonymous"; // avoid CORS issues
        img.src = imgElement.src;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/png');
            resolve(dataURL);
        };
        img.onerror = err => reject(err);
    });
}

// Function to load match data into the page
function loadMatchData(matchId) {
    const match = matches.find(m => m.id === matchId);
    if (!match) {
        console.error("Match not found");
        return;
    }

    // Update the match information
    teamALogo.src = match.logoA;
    teamBLogo.src = match.logoB;
    matchTitle.innerHTML = `
        <span class="team-name">${match.teamA}</span>
        <span class="vs-only">vs</span>
        <span class="team-name">${match.teamB}</span>`;
    matchTime.textContent = match.matchTime;

    // Show only the background image
    // Show only the background image
if (imagebackElement) {
    imagebackElement.src = match.imageback || '';  // ✅ lowercase
    imagebackElement.style.display = 'block';

    // Get the image data (Base64) after loading
    imagebackElement.onload = async () => {
        try {
            const base64Data = await getImageBase64(imagebackElement);
            console.log("Image Base64:", base64Data); // do something with it
        } catch (err) {
            console.error("Error getting image data:", err);
        }
    };
}


    // Remove any player content
    const playerContainer = document.querySelector("#player");
    if (playerContainer) {
        playerContainer.innerHTML = ''; // empty the video/iframe container
    }
}

// Load match data for the current match ID
const matchId = getMatchId();
if (matchId) {
    loadMatchData(+matchId);
} else {
    console.error("No match ID found in the URL.");
}
