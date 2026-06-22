const configPath = (window.location.pathname.includes('/Formations/') || window.location.pathname.includes('/Competences/') || window.location.pathname.includes('/Expériences/')) ? '../assets/config/particles.json' : 'assets/config/particles.json';
particlesJS.load('particles-js', configPath, function() {
    console.log('INFO - particles.js config loaded');
});