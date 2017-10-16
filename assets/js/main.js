(function() {

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyD4vuw8ZlP3UnT-OR2ltDC8dy9tP3w7i6Q",
    authDomain: "example-realtime-database.firebaseapp.com",
    databaseURL: "https://example-realtime-database.firebaseio.com",
    storageBucket: "example-realtime-database.appspot.com"
  };

  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  // Get element
  const preObject = document.getElementById('object');

  // Create references
  const dbRefObject = firebase.database().ref().child('object');

  // Sync object changes
  dbRefObject.on('value', snap => {
    console.log(snap.val())
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

}());
