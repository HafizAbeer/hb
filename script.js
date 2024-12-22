// Set the date for the birthday (Month is 0-based, so 0 = January, 11 = December)
const birthdayDate = new Date(2025, 9, 1, 0, 0, 0).getTime(); // October 5th, 2025 (month is 9 because months are 0-based)

function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML =
      "<h2>Happy Birthday! Amna Batool❤️ <br/> <span class='hbd-text'>May Allah (SWT) bless you with hidayah, good health (afiyah), and endless happiness. May He protect you from every harm, grant you success in both dunya and akhirah, and fill your heart with peace and contentment. I pray Allah blesses you with barakah in every aspect of life, fulfills your halal dreams, and strengthens our bond in love and faith. May He make you a source of goodness and guide us both on the straight path to Jannah. Ameen wa suma Ameen!!!.</span></h2>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
