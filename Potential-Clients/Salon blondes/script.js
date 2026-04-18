document.getElementById("year").textContent = new Date().getFullYear();

const fadeEls = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach((el) => obs.observe(el));

const apptDate = document.getElementById("apptDate");
if (apptDate) {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  apptDate.min = `${yyyy}-${mm}-${dd}`;
}

const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

if (bookingForm && bookingMessage) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookingMessage.textContent = "Thank you. Your appointment request has been received, and Salon Blonde will follow up shortly.";
    bookingForm.reset();
  });
}
