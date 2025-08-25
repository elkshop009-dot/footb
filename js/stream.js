import { matches } from '../data/Data.mjs';

const matchList = document.getElementById('match-list');

// Dynamically generate the match list
matches.forEach(match => {
    const matchItem = document.createElement('li');

    // Set up the content for the match
    matchItem.innerHTML = `
        <div class="team-info">
            <img src="${match.logoA}" alt="${match.teamA}">
            <span>
                <span class="vs-text">${match.teamA} <span class="vs-only">VS</span> ${match.teamB}</span>
            </span>
            <img src="${match.logoB}" alt="${match.teamB}">
        </div>
        <span class="match-time">${match.matchTime}</span>
        <span class="watch-now">Watch Now</span>
    `;

    // Add click event to the match item to redirect to the streaming page
    matchItem.addEventListener('click', () => {
        window.location.href = `streaming/streaming.html?id=${match.id}`;
    });

    // Append the match item to the match list
    matchList.appendChild(matchItem);
});
