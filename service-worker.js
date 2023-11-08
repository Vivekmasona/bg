self.addEventListener('install', function(event) {
  // Perform service worker installation steps
});

self.addEventListener('activate', function(event) {
  // Perform service worker activation steps
});

self.addEventListener('message', function(event) {
  if (event.data === 'playAudioInBackground') {
    // Handle playing audio in the background
    // You can customize this part based on your needs
  }
});
