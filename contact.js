const number = "whatsappnum";

function support(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const data = formData.entries(formData);

  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
    `
    Name: ${data.name}\n 
    Email: ${data.email}\n
    Phone: ${data.phone}\n
    Note: ${data.note}
    `
  )}`;

  window.open(whatsappUrl, "_blank");
}
