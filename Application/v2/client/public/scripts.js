if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js')
      .then((reg)=> console.log('service worker registered', reg))
      .catch((err)=> console.log('service worker not registered', err));
  }
  
  
  //Instalation
  let deferredPrompt;
  var inst = document.querySelector('.bt-install');
  var btninst = document.querySelector('.btn-install');
  inst.style.display = 'none';
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion = e;
    inst.style.display = 'block';
  
    btninst.addEventListener('click', (e) => {
      // Hide the app provided install promotion
      inst.style.display = 'none';
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    });
  });
  
  //iOS install tip show
  const isIOSUsed=()=>{
    const userAgent=window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent); //Return if iOS is used (iPhone, iPod or iPad)
  }
  const standaloneModeActive=()=>("standalone" in window.navigator)&&(window.navigator.standalone); //Will be true if the PWA is used
  if(isIOSUsed()&&!standaloneModeActive()){ 
    //
  }