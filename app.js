// Determine the path to the particles.json config based on the current page location.
// Pages inside subfolders (Formations, Competences, Expériences) need the "../" prefix.
// Note: we match on the *encoded* pathname (%C3%AA for "ê") because browsers report
// non-ASCII paths in percent-encoded form, which is why a literal '/Expériences/'
// check used to fail on the Expériences pages.
const isInSubfolder = /\/(Formations|Competences|Exp%C3%A9riences|Expériences)\//i.test(window.location.pathname);
const configPath = isInSubfolder ? '../assets/config/particles.json' : 'assets/config/particles.json';

if (typeof particlesJS === 'undefined') {
    console.error('ERROR - particles.js library not loaded (check the <script> tag, network or ad blocker)');
} else {
    particlesJS.load('particles-js', configPath, function () {
        console.log('INFO - particles.js config loaded');
    });
}