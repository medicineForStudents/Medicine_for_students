const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form['name'].value;
    const email = form['email'].value;

    // Референция към базата данни
    const dbRef = firebase.database().ref('contacts');

    // Поставяне на данните в базата данни
    dbRef.push({ name, email })
      .then(() => {
        alert('Данните бяха записани успешно в Firebase!');
        form.reset();
      })
      .catch(error => {
        alert(`Възникна грешка: ${error.message}`);
      });
  });

  firebase.initializeApp(firebaseConfig);

  // Добави събитие за вход с Google
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Вход успешен, тук можеш да направиш нещо с резултата (result)
        console.log(result);
      })
      .catch((error) => {
        // Грешка при вход
        console.error(error);
      });
  }