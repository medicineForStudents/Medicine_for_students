let scrollDirection = 0; // 0 = не е скролнато, 1 = надолу, -1 = нагоре

window.addEventListener('wheel', function(e) {
  const section1 = document.getElementById('selection1');
  const section2 = document.getElementById('selection2');

  const section1Bottom = section1.getBoundingClientRect().bottom;
  const section2Top = section2.getBoundingClientRect().top;

  if (e.deltaY > 0 && scrollDirection !== 1 && section1Bottom <= window.innerHeight) {
    section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    scrollDirection = 1;
  } else if (e.deltaY < 0 && scrollDirection !== -1 && section2Top >= 0) {
    section1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    scrollDirection = -1;
  } else {
    scrollDirection = 0;
  }
});
