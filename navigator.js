// this file will contains all the navigator methods.

// user location..
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      const { latitude, longitude } = location.coords;
      console.log(latitude, longitude);
    },
    (err) => {
      console.log(err);
    }
  );
}
