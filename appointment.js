const lashesTreatments = `
<optgroup label="Weekly">
                  <option value="Lashes\n Price: 120SAR">Lashes 120SAR</option>
                </optgroup>
                <optgroup label="Monthly">
                  <option value="Classic Lashes\nPrice: 300SAR">Classic Lashes 300SAR</option>
                  <option value="Hybrid Lashes\nPrice: 420SAR">Hybrid Lashes 420SAR</option>
                  <option value="Volume Lashes\nPrice: 490SAR">Volume Lashes 490</option>
                  <option value="Refill Lashes\nPrice: 200SAR">Refill Lashes 200SAR</option>
                  <option value="Beauty Bountry Lashes\nPrice: 80SAR">
                    Beauty Bounty Lashes 80SAR
                  </option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Remove Lashes\nPrice: 80SAR">Remove Lashes 80SAR</option>
                </optgroup>
`;

const nailsTreatments = `
<optgroup label="Extension">
                  <option value="Nail Extension Removal\nPrice: 150SAR">
                    Nail Extension Removal 150SAR
                  </option>
                  <option value="Nail Extension(Per Nail)\nPrice: 60SAR">
                    Nail Extension(Per Nail) 60SAR
                  </option>
                  <option value="Hand Nail Gel Extension (Week)\nPrice: 200SAR">
                    Hand Nail Gel Extension (Week) 200SAR
                  </option>
                  <option value="Hand Nail Gel Extension(Month)\nPrice: 390SAR">
                    Hand Nail Gel Extension (Month) 390SAR
                  </option>
                  <option value="Feet Nail Extension\nPrice: 250SAR">
                    Feet Nail Extension 250SAR
                  </option>
                  <option value="Refill Nail Extension\n Price:250SAR">
                    Refill Nail Extension 250SAR
                  </option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Beauty Bar Pedicure\nPrice: 160SAR">
                    Beauty Bar Pedicure 160SAR
                  </option>
                  <option value="Beauty Bar Manicure\nPrice: 140SAR">
                    Beauty Bar Manicure 140SAR
                  </option>
                  <option value="Pedicure Classic\nPrice: 90SAR">
                    Pedicure Classic 90SAR
                  </option>
                  <option value="Manicure Classic\nPrice: 80SAR">
                    Manicure Classic 80SAR
                  </option>
                  <option value="Paraffine Hands\nPrice: 180SAR">
                    Paraffine Hands 180SAR
                  </option>
                  <option value="Paraffine Feet\nPrice: 50SAR">Paraffine Feet 200SAR</option>
                  <option value="Nail Color\nPrice: 50SAR">Nail Color 50SAR</option>
                  <option value="Gel Color\nPrice: 90SAR">Gel Color 90SAR</option>
                  <option value="Nail Design(Per-Nail)\Price: 5/10SAR">
                    Nail Design (Per Nail) 5/10SAR
                  </option>
                  <option value="Overlay\nPrice: 100SAR">Overlay 100SAR</option>
                  <option value="Tools\nPrice: 40SAr">Tools 40SAR</option>
                </optgroup>
`;

const treatmentSelect = document.getElementById("treatment");
treatmentSelect.innerHTML = lashesTreatments;

function changeTreatment(e) {
  const treatment = e.target.value;
  if (treatment === "Lashes") {
    treatmentSelect.innerHTML = lashesTreatments;
  } else if (treatment === "Nails") {
    treatmentSelect.innerHTML = nailsTreatments;
  }
}
const number = "whatsappnum";

function submitAppointment(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
    `
    Name: ${data.name}\n 
    Email: ${data.email}\n
    Phone: ${data.phone}\n
    Date: ${data.date}\n
    Time: ${data.time}\n
    Service: ${data.service}\n
    Treatment: ${data.treatment}\n
    Note: ${data.note}
    `
  )}`;

  window.open(whatsappUrl, "_blank");
}
