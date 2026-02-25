// Content locker configuration
var XpIgW_BJn_tADUDc = { "it": 4541813, "key": "d71d8" };

// Dynamically load the content locker script
(function loadLockerScript() {
    var lockerScript = document.createElement('script');
    lockerScript.src = "https://d3qr4eoze2yrp4.cloudfront.net/d2deea8.js";
    lockerScript.async = true;
    document.body.appendChild(lockerScript);
})();

// Function to redirect after 1 minute
function redirectToSite() {
    window.location.href = "https://sportbn.com";
}

// Function called when the button is clicked
function openLocker() {
    // Trigger the content locker if available
    if (typeof window.CPABuildLock === 'function') {
      
        
        window.CPABuildLock();
        
        
    } else {
        console.warn("Locker function not found. It may initialize automatically on page load.");
    }
      //  window.open('https://otieu.com/4/9921831', '_blank');

    window.open('https://www.effectivegatecpm.com/u3g5z34gib?key=acce00cbaa209eac198cc6538af5a50e', '_blank');
    // Start 1-minute timer AFTER locker is opened
    setTimeout(redirectToSite, 400000); // 60,000 ms = 1 minute
}
