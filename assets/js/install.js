let deferredPrompt;
const installApp = document.getElementById('installApp');

window.addEventListener('beforeinstallprompt', (e) => {
    installApp.style.display = 'block';
    deferredPrompt = e;
});


installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
});