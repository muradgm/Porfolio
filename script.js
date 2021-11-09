const text =  baffle(".text__name");
const text3 = baffle('.text__hello');

text.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 160
});
text3.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 160
});

text.start();
text.reveal(7000);
text3.start();
text3.reveal(1000);