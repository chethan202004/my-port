document.querySelectorAll('.gallery-container').forEach(gallery => {
  let currentIndex = 0;
  const images = gallery.querySelectorAll('.gallery-image');
  const totalImages = images.length;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages; // Loops back to the first image
    images[currentIndex].classList.add('active');
  }

  // Start the image rotation for each gallery individually every 3 seconds
  setInterval(showNextImage, 2000);
});

const durationElement = document.getElementById("duration");
const startDateStr = durationElement.getAttribute("data-start-date");
const endDateStr = durationElement.getAttribute("data-end-date");

// Parse the start date
const [startYear, startMonth] = startDateStr.split("-").map(Number);
const startDate = new Date(startYear, startMonth - 1); // Month is zero-based

// Use current date if end date is 'null', otherwise parse end date
const endDate = endDateStr === "null" ? new Date() : new Date(...endDateStr.split("-").map(Number));

// Calculate the difference in months
let years = endDate.getFullYear() - startDate.getFullYear();
let months = endDate.getMonth() - startDate.getMonth();

// Adjust for negative month difference
if (months < 0) {
  years--;
  months += 12;
}

// Set the duration text
durationElement.innerText = `${years} years, ${months} months`;

document.addEventListener("DOMContentLoaded", calculateDuration);

document.getElementById('current-year').textContent = new Date().getFullYear();
