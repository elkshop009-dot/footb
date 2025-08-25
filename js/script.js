// // Get the match parameter from the URL
// const urlParams = new URLSearchParams(window.location.search);
// const matchId = urlParams.get('match');

// const liveStream = document.getElementById("liveStream");
// const matchTitle = document.getElementById("matchTitle");
// const matchTime = document.getElementById("matchTime");

// // Set stream URL and details based on the selected match
// if (matchId === "match1") {
//     liveStream.src = "https://example.com/stream1"; // Replace with actual URL
//     matchTitle.innerText = "Team A vs Team B";
//     matchTime.innerText = "Kickoff: 8:00 PM GMT";
// } else if (matchId === "match2") {
//     liveStream.src = "https://example.com/stream2"; // Replace with actual URL
//     matchTitle.innerText = "Team C vs Team D";
//     matchTime.innerText = "Kickoff: 10:00 PM GMT";
// } 
// function startLoader() {
//     // Hide the play button
//     document.querySelector(".btn").style.display = "none";
    
//     // Show the loader
//     document.getElementById("loader3-container").style.display = "flex";
// }
// function startLoader() {
//     const loaderContainer = document.getElementById('loader3-container');
//     const playButton = document.querySelector('.btn');  // Get the Play button element

//     // Hide the Play button when the loader starts
//     playButton.style.display = 'none';

//     // Show the loader
//     loaderContainer.style.display = 'flex';  // Make the loader visible

//     // Optional: Trigger video play or any other action after a delay
//     setTimeout(() => {
//         loaderContainer.style.display = 'none';  // Hide the loader after 1.2 seconds

//         // Show the Play button again after the loader disappears
//         playButton.style.display = 'block';

//         _VR();  // Replace _VR() with your actual video play function or desired action
//     }, 1200);  // Adjust the delay time if needed
// }
