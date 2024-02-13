const _name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const note = document.getElementById("note");

const number = "whatsappnum";

function support(e) {
  e.preventDefault();
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
    `
    name: ${_name.value}\n 
    email: ${email.value}\n
    phone: ${phone.value}\n
    note: ${note.value}
    `
  )}`;

  // Open WhatsApp
  window.open(whatsappUrl, "_blank");
}
