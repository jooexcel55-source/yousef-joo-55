importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDgi3--q8nDGfps5MV4AmC8B4PYPMfAPZo",
  authDomain: "yousef-a3438.firebaseapp.com",
  projectId: "yousef-a3438",
  storageBucket: "yousef-a3438.firebasestorage.app",
  messagingSenderId: "645915709487",
  appId: "1:645915709487:web:588dae85e94d33daa636da"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || '⚔️ Golden Warriors';
  const options = {
    body: payload.notification?.body || '',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPGbVU71SHCNSoeMKBiglfaaGJL5pHEidqhaI3EM6Hw&s=10',
    vibrate: [200, 100, 200],
  };
  self.registration.showNotification(title, options);
});
