document.addEventListener("DOMContentLoaded", function () {
  initializePostcodeLookup(
    "#delivery-postcode-search",
    "#delivery-postcode-search-button",
    "#Delivery-Address-First-Line",
    "#Delivery-Address-City",
    "#Delivery-Address-Postcode"
  );
  initializePostcodeLookup(
    "#billing-postcode-search",
    "#billing-postcode-search-button",
    "#Billing-Address-First-Line",
    "#Billing-Address-City",
    "#Billing-Address-Postcode"
  );
  initializePostcodeLookup(
    "#trading-postcode-search",
    "#trading-postcode-search-button",
    "#Trading-Address-First-Line",
    "#Trading-Address-City",
    "#Trading-Address-Postcode"
  );
  initializeFormNavigation();
  initializeCheckboxToggle(
    "#Company-Details-VAT-registered-checkbox",
    "#Company-Details-VAT-registration"
  );
  initializeCompanyTypeSelection();
  initializeDatePicker("#Company-Details-Date-picker");

  initializePostcodeLookup(
    "#postcode-search",
    "#postcode-search-button",
    "#Reg-Address-First-Line",
    "#Reg-Address-City",
    "#Reg-Address-Postcode"
  );
  initializePostcodeLookup(
    "#bank-postcode-search",
    "#bank-postcode-search-button",
    "#Bank-Address-first-line",
    "#Bank-Address-City",
    "#Bank-Address-postcode"
  );
  //   initializeCheckboxToggle(
  //     "#criteria_third_party_billing_chkbox",
  //     "#criteria_third_party_billing_input"
  //   );
  //   initializeCheckboxToggle(
  //     "#criteria_third_party_contract_chkbox",
  //     "#criteria_third_party_contract_input"
  //   );
  //   initializeCheckboxToggle(
  //     "#criteria_third_party_wholesale_chkbox",
  //     "#criteria_third_party_wholesale"
  //   );
  initializeMultiSelect("#criteria_other_providers", "Select Other providers");
  initializeMultiSelect("#Criteria-Channels", "Select Channels");
  // Franchise feature
  //   toggleCheckboxes(
  //     "Criteria-Franchise-checkbox",
  //     "Criteria-Franchisee-Checkbox"
  //   );
  //   toggleCheckboxes(
  //     "Criteria-Franchisee-Checkbox",
  //     "Criteria-Franchise-checkbox"
  //   );
  addDefaultOptionToSelect("set-default-select", "Select");
  addDefaultOptionToSelect("select-modern", "Select your address");
  initializeMultiStepForm();
  toggleButtonWithClass("#confirm_agreement_chkbox", "#partner_agreement_btn");
  switchForm(
    "#confirm_agreement_chkbox",
    "#partner_agreement_btn",
    "#partner_agreement_form",
    "#partner_agreement_confirmation_form"
  );
  setCurrentDate("#partner_agreement_confirmation_cur_date");
  // Usage: Set the IP address in the target element
  setIPAddress("#partner_agreement_confirmation_ip");
  initializePdfHandler("#partner_agreement_confirmation_btn", {
    curForm: "#partner_agreement_confirmation_form",
    nextForm: "#self_billing_agreement_form",
    formSelector: "#partner_agreement_form",
    title: "Partner Agreement Confirmation",
    downloadFilename: "partner_agreement.pdf",
    emailFieldName: "email",
    webhookUrl:
      "https://prod-46.uksouth.logic.azure.com/workflows/0725daa15e4a42f996ff2c9b61d9b15f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9QTEWPyCdVCJrlTJe5VznGwnAVf_q9N3EthSalMQ8hA",
  });

  toggleButtonWithClass(
    "#confirm_self_billing_agree_chkbox",
    "#self_billing_agreement_btn"
  );
  switchForm(
    "#confirm_self_billing_agree_chkbox",
    "#self_billing_agreement_btn",
    "#self_billing_agreement_form",
    "#confirmation_self_billing_agree_form"
  );
  setCurrentDate("#self_billing_cur_date");
  setIPAddress("#self_billing_ip");
  initializePdfHandler("#self_billing_confirmation_btn", {
    curForm: "#confirmation_self_billing_agree_form",
    nextForm: "#confirmation_self_billing_agree_form",
    formSelector: "#self_billing_agreement_form",
    title: "Self Billing Agreement Confirmation",
    downloadFilename: "self_billiing_agreement.pdf",
    emailFieldName: "email",
    webhookUrl:
      "https://prod-09.uksouth.logic.azure.com:443/workflows/adc2994fde0c492981e334d10318e3cc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ODswH80OD7bbrkK12RH3snBpuArTY2Xkurs26K6jDwg",
  });
  initializeFileUpload("vat-file-upload");
  initializeVATUploadCheckbox(
    "Company-Details-VAT-registered-checkbox",
    "vat-file-upload"
  );
  hideElementsBySelector(".choices__input--cloned");
  addDynamicPlaceholder(".choices", "Select");
  sameAsAddr(
    "Trading-Address",
    "Trading-Address-First-Line",
    "Trading-Address-Second-Line",
    "Trading-Address-Third-Line",
    "Trading-Address-City",
    "Trading-Address-Postcode"
  );
  sameAsAddr(
    "Billing-Address",
    "Billing-Address-First-Line",
    "Billing-Address-Second-Line",
    "Billing-Address-Third-Line",
    "Billing-Address-City",
    "Billing-Address-Postcode"
  );
  sameAsAddr(
    "Delivery-Address",
    "Delivery-Address-First-Line",
    "Delivery-Address-Second-Line",
    "Delivery-Address-Third-Line",
    "Delivery-Address-City",
    "Delivery-Address-Postcode"
  );

  otherEvent("Trading-Address", "addr-trading");
  otherEvent("Billing-Address", "addr-billing");
  otherEvent("Delivery-Address", "addr-delivery");

  copyContactDetails(
    "Contact-Master-User",
    "Master-Contacts-Title",
    "Master-Contacts-First-Name",
    "Master-Contact-Last-Name",
    "Master-Contact-Role-Dropdown",
    "Master-Contacts-Job-title",
    "Master-Contacts-Mobile-Phonenumber",
    "Master-Contacts-Email",
    "Master-Contacts-Authorised-signatory-checkbox",
    "Master-Contacts-Portal-user-checkbox"
  );
  copyContactDetails(
    "Contacts-Renewal-Contact",
    "Renewal-Contacts-Title",
    "Renewal-Contacts-First-Name",
    "Renewal-Contact-Last-Name",
    "Renewal-Contact-Role-Dropdown",
    "Renewal-Contacts-Job-title",
    "Renewal-Contacts-Mobile-Phonenumber",
    "Renewal-Contacts-Email",
    "Renewal-Contacts-Authorised-signatory-checkbox",
    "Renewal-Contacts-Portal-user-checkbox"
  );
  copyContactDetails(
    "Contacts-Financial-Contact",
    "Financial-Contacts-Title",
    "Financial-Contacts-First-Name",
    "Financial-Contact-Last-Name",
    "Financial-Contact-Role-Dropdown",
    "Financial-Contacts-Job-title",
    "Financial-Contacts-Mobile-Phonenumber",
    "Financial-Contacts-Email",
    "Financial-Contacts-Authorised-signatory-checkbox",
    "Financial-Contacts-Portal-user-checkbox"
  );

  otherEvent("Contact-Master-User", "contacts-master-page");
  otherEvent("Contacts-Renewal-Contact", "contacts-renewal-page");
  otherEvent("Contacts-Financial-Contact", "contacts-financial-page");
  // Usage: Call this function for any dropdown class or ID
  setDropdownColor(".select-field");
});

function setDropdownColor(
  selector,
  defaultColor = "#b1b1b1",
  selectedColor = "rgb(0, 0, 0)"
) {
  const dropdowns = document.querySelectorAll(selector);

  dropdowns.forEach((dropdown) => {
    function updateColor() {
      dropdown.style.color = dropdown.value ? selectedColor : defaultColor;
    }

    // Initialize color on page load
    updateColor();

    // Update color on selection change
    dropdown.addEventListener("change", updateColor);
  });
}

function moveNext(current, nextId) {
  let value = current.value.replace(/\D/g, ""); // Remove non-digits
  current.value = value;
  if (current.value.length === 2) {
    document.getElementById(nextId).focus(); // Move to the next field
  }
}

async function generatePDFPartner(title, formData) {
  try {
    // Clone content to avoid modifying the original HTML
    let extractedContent = document.createElement("div");
    extractedContent.innerHTML = Array.from(
      document.querySelectorAll("#pdf-content .w-embed")
    )
      .map((element) => element.outerHTML) // Preserve full structure
      .join("");

    // Ensure CSS styles are preserved and prevent content overflow
    extractedContent.style.width = "210mm"; // Exact A4 width
    extractedContent.style.maxWidth = "210mm";
    extractedContent.style.padding = "10mm"; // Prevents clipping
    extractedContent.style.boxSizing = "border-box"; // Consistent layout
    extractedContent.style.overflow = "hidden"; // Avoid unexpected content cutoff
    extractedContent.style.pageBreakInside = "avoid"; // Prevents content split
    document.body.appendChild(extractedContent);

    // Convert HTML to PDF with the highest precision
    const pdf = await html2pdf()
      .set({
        margin: [10, 10, 10, 10], // Ensure uniform spacing
        filename: title,
        image: { type: "jpeg", quality: 1 }, // Highest quality images
        html2canvas: {
          scale: 4, // Maximized DPI for precision
          useCORS: true, // Allow cross-origin images
          allowTaint: true, // Fixes image-related rendering issues
          logging: false,
          scrollX: 0,
          scrollY: 0,
          width: extractedContent.scrollWidth, // Capture exact width
          height: extractedContent.scrollHeight, // Capture full height
          letterRendering: true, // Better text clarity
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          precision: 16, // Highest precision for PDF layout
        },
        pagebreak: { mode: ["css", "legacy"] }, // Ensures no broken sections
      })
      .from(extractedContent)
      .toPdf()
      .get("pdf");

    document.body.removeChild(extractedContent); // Cleanup after PDF creation
    await pdf.save();
    return pdf;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error; // Ensure errors are caught
  }
}

function copyContactDetails(
  eventID,
  title,
  firstname,
  lastname,
  role,
  jobtitle,
  mobile,
  email,
  authorised,
  portal
) {
  document.getElementById(eventID).addEventListener("change", function () {
    if (this.value === "Same as Primary Contact") {
      // Define mappings between source and target elements
      const fieldMappings = [
        { source: "Contacts-Title", target: title },
        { source: "Contacts-First-Name", target: firstname },
        { source: "Contact-Last-Name", target: lastname },
        { source: "Contact-Role-Dropdown", target: role },
        { source: "Contacts-Job-title", target: jobtitle },
        { source: "Contacts-Mobile-Phonenumber", target: mobile },
        { source: "Contacts-Email", target: email },
        {
          source: "Contacts-Authorised-signatory-checkbox",
          target: authorised,
          type: "checkbox",
        },
        {
          source: "Contacts-Portal-user-checkbox",
          target: portal,
          type: "checkbox",
        },
      ];

      fieldMappings.forEach(({ source, target, type }) => {
        const sourceElement = document.getElementById(source);
        const targetElement = document.getElementById(target);

        if (sourceElement && targetElement) {
          if (type === "checkbox") {
            targetElement.checked = sourceElement.checked;
          } else {
            targetElement.value = sourceElement.value;
          }
        }
      });
    }
  });
}

function otherEvent(eventID, targetID) {
  document.getElementById(eventID).addEventListener("change", function () {
    const tradingDiv = document.getElementById(targetID);
    tradingDiv.style.display = this.value === "Other" ? "block" : "none";
  });
}

function sameAsAddr(eventId, addr1, addr2, addr3, city, postcode) {
  const selectElement = document.getElementById(eventId);

  selectElement.addEventListener("change", function () {
    if (selectElement.value === "Same as registered address") {
      // Define mappings from id1 -> id2, id3 -> id4, etc.
      const idMappings = {
        "Reg-Address-First-Line": addr1,
        "Reg-Address-Second-Line": addr2,
        "Reg-Address-Third-Line": addr3,
        "Reg-Address-City": city,
        "Reg-Address-Postcode": postcode,
      };

      Object.keys(idMappings).forEach((sourceId) => {
        const targetId = idMappings[sourceId];
        const sourceElement = document.getElementById(sourceId);
        const targetElement = document.getElementById(targetId);

        if (sourceElement && targetElement) {
          targetElement.value = sourceElement.value;
        }
      });
    }
  });
}

function updateElementValue(sourceId, targetId) {
  //   console.log("targetId:", sourceId, targetId);
  // Get the HTML content of the source element
  const sourceContent = document.getElementById(sourceId).value || "";
  // Set the content of the target element
  document.getElementById(targetId).innerHTML = `<strong>${
    " " + sourceContent
  }</strong>`;
}

function addDynamicPlaceholder(selector, placeholderText) {
  document.querySelectorAll(selector).forEach((choicesContainer) => {
    const choicesInner = choicesContainer.querySelector(".choices__inner");
    const selectedItems = choicesContainer.querySelector(
      ".choices__list--multiple"
    );
    if (!choicesInner || !selectedItems) return; // Skip if elements are missing
    let placeholder = choicesContainer.querySelector(".custom-placeholder");
    if (!placeholder) {
      placeholder = document.createElement("span");
      placeholder.className = "custom-placeholder";
      placeholder.textContent = placeholderText;
      placeholder.style.color = "black"; // Light gray text
      placeholder.style.position = "absolute";
      placeholder.style.left = "10px";
      placeholder.style.top = "50%";
      placeholder.style.transform = "translateY(-50%)";
      placeholder.style.pointerEvents = "none"; // Prevent interactions

      choicesInner.style.position = "relative"; // Ensure positioning works
      choicesInner.appendChild(placeholder);
    }

    function updatePlaceholderVisibility() {
      if (selectedItems.children.length > 0) {
        placeholder.style.display = "none"; // Hide placeholder if items exist
      } else {
        placeholder.style.display = "block"; // Show if no items are selected
      }
    }

    // Initial check on page load
    updatePlaceholderVisibility();

    // Observe changes in selected items and update placeholder visibility
    const observer = new MutationObserver(updatePlaceholderVisibility);
    observer.observe(selectedItems, { childList: true });
  });
}

function hideElementsBySelector(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    element.hidden = true;
  });
}

function initializeVATUploadCheckbox(checkboxId, uploadContainerId) {
  const vatCheckbox = document.getElementById(checkboxId);
  const vatUploadContainer = document.getElementById(uploadContainerId);
  const vatFileInput = vatUploadContainer.querySelector("input[type='file']");
  const errorMessage = vatUploadContainer.nextElementSibling; // Error message element

  if (!vatCheckbox || !vatUploadContainer || !vatFileInput || !errorMessage) {
    console.error("Missing required elements for VAT checkbox control.");
    return;
  }

  // Function to toggle the file upload state
  function toggleFileUpload() {
    const isChecked = vatCheckbox.checked;

    // Enable or disable the file upload
    vatFileInput.disabled = !isChecked;
    vatUploadContainer.style.opacity = isChecked ? "1" : "0.5";
    vatUploadContainer.style.pointerEvents = isChecked ? "auto" : "none";

    // Reset the file input and error message if disabled
    if (!isChecked) {
      vatFileInput.value = "";
      errorMessage.style.display = "none";
      clearPreview(vatUploadContainer);
    }
  }

  // Clear the file preview
  function clearPreview(container) {
    const previewContainer = container.querySelector(".file-preview-container");
    const fileNameDisplay = container.querySelector(".file-upload-name");
    const fileInput = container.querySelector("input[type='file']");

    if (previewContainer) previewContainer.innerHTML = "";
    if (fileNameDisplay) fileNameDisplay.textContent = "No file chosen";
    if (fileInput) fileInput.value = "";
  }
  toggleFileUpload();
  vatCheckbox.addEventListener("change", toggleFileUpload);
}

function initializeFileUpload(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return console.error(`Container ${containerId} not found`);

  const fileInput = container.querySelector("input[type='file']");
  const fileNameDisplay = container.querySelector(".file-upload-name");
  const previewContainer = container.querySelector(".file-preview-container");
  const uploadIcon = container.querySelector(".file-upload-icon");

  if (!fileInput || !fileNameDisplay || !previewContainer || !uploadIcon) {
    return console.error("Missing required elements in", containerId);
  }

  // Handle file selection
  fileInput.addEventListener("change", () =>
    handleFileChange(fileInput, fileNameDisplay, previewContainer, uploadIcon)
  );

  // Handle file change and preview
  function handleFileChange(input, nameDisplay, preview, icon) {
    const file = input.files[0];
    clearPreview(preview); // Reset preview

    if (!file) {
      nameDisplay.textContent = "No file chosen";
      icon.style.display = "block"; // Show icon when no file is selected
      return;
    }

    nameDisplay.textContent = file.name;
    icon.style.display = "none"; // Hide icon when file is selected

    // Show preview (images, PDFs, or other types)
    if (file.type.startsWith("image/")) {
      createImagePreview(file, preview);
    } else if (file.type === "application/pdf") {
      createTextPreview("PDF File Selected", preview);
    } else {
      createTextPreview(`File: ${file.name}`, preview);
    }

    // Add remove button
    createRemoveButton(input, preview, nameDisplay, icon);
  }

  // Create image preview
  function createImagePreview(file, preview) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.className = "file-preview-image";
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  // Create text preview (for PDFs or other files)
  function createTextPreview(text, preview) {
    const textElement = document.createElement("p");
    textElement.className = "file-preview-text";
    textElement.textContent = text;
    preview.appendChild(textElement);
  }

  // Create remove button
  function createRemoveButton(input, preview, nameDisplay, icon) {
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "file-remove-btn";
    removeButton.innerHTML = `<i class="bi bi-trash"></i> Remove`;

    removeButton.addEventListener("click", () => {
      input.value = "";
      nameDisplay.textContent = "No file chosen";
      clearPreview(preview);
      icon.style.display = "block"; // Show icon again
    });

    preview.appendChild(removeButton);
  }

  // Clear the preview area
  function clearPreview(preview) {
    preview.innerHTML = "";
  }
}

// Function to apply the format for supplier and customer fields
function formatSelfBillingInputs() {
  const companyName = document.querySelector("#Company-Details-Company-name");
  const vatRegistration = document.querySelector(
    "#Company-Details-VAT-registration"
  );

  const supplierInput = document.querySelector("#supplier");
  const supplierVatInput = document.querySelector("#supplier_VAT_number");
  const customerInput = document.querySelector("#customer");
  const customerVatInput = document.querySelector("#customer_VAT_number");

  // Format #supplier as #Company-Details-Company-name
  if (companyName) {
    supplierInput.value = `${companyName.value}`;
  }

  // Format #supplier_VAT_number as #Company-Details-VAT-registration
  if (vatRegistration && vatRegistration.value) {
    supplierVatInput.value = `${vatRegistration.value}`;
  } else {
    // If #Company-Details-VAT-registration is empty, use "Not VAT registered"
    supplierVatInput.value = `Not VAT registered`;
  }

  // Format #customer as value-plan.com
  if (customerInput) {
    customerInput.value = `plan.com`;
  }

  // Format #customer_VAT_number as GB 0004 1360 38
  if (customerVatInput) {
    customerVatInput.value = "GB 0004 1360 38";
  }
  supplierInput.setAttribute("readonly", true);
  supplierVatInput.setAttribute("readonly", true);
  customerInput.setAttribute("readonly", true);
  customerVatInput.setAttribute("readonly", true);
}
// Load jsPDF dynamically (if not already loaded)
async function loadJsPDF() {
  if (!window.jsPDF) {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    document.head.appendChild(script);
    await new Promise((resolve) => (script.onload = resolve));
  }
}

// Generic function to collect form data
function collectFormData(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) {
    console.error(`Form not found: ${formSelector}`);
    return null;
  }

  const data = {};
  form.querySelectorAll("input, textarea, select").forEach((field) => {
    if (field.type === "checkbox") {
      data[field.name] = field.checked;
    } else if (field.type === "file" && field.files.length > 0) {
      data[field.name] = field.files[0];
    } else {
      data[field.name] = field.value;
    }
  });
  const first_name = document.getElementById("Contacts-First-Name").value;
  const last_name = document.getElementById("Contact-Last-Name").value;

  data["full_name"] = `${first_name + " " + last_name}`;
  return data;
}

// Generate PDF from form data with modern styling
async function generatePDFSelfBilling(title, formData) {
  await loadJsPDF();
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  // Add 'plan.com' mark at top right
  const text = "plan.com";
  const x = doc.internal.pageSize.width - 80;
  const y = 25;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(35);

  // Shadow (Gray)
  doc.setTextColor(150, 150, 150);
  doc.text(text, x + 1.5, y + 1.5);

  // Main Text (Black)
  doc.setTextColor(0, 0, 0);
  doc.text(text, x, y);

  // Blue Dot
  doc.setTextColor(0, 0, 255);
  doc.text(".", x + doc.getTextWidth("plan"), y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text("Self-Billing Agreement", 20, 45);
  doc.setFontSize(12);
  doc.text("This is an agreement to a self-billing procedure between:", 20, 60);

  doc.setFontSize(10);
  doc.setTextColor(43, 124, 246);
  doc.text(`The Customer: `, 20, 70);
  doc.setTextColor(0, 0, 0);
  doc.text(`${formData["customer"] || "plan.com"}`, 50, 70);

  doc.setTextColor(43, 124, 246);
  doc.text(`The Supplier: `, 20, 80);
  doc.setTextColor(0, 0, 0);
  doc.text(`${formData["supplier"] || ""}`, 50, 80);
  doc.setFontSize(10);
  doc.setTextColor(43, 124, 246);
  doc.text(`VAT number: `, doc.internal.pageSize.width / 2 + 20, 70);
  doc.setTextColor(0, 0, 0);
  doc.text(
    `${formData["customer_VAT_number"] || "GB 0004 1360 38"}`,
    doc.internal.pageSize.width / 2 + 28 + 20,
    70
  );
  doc.setTextColor(43, 124, 246);
  doc.text(`VAT number: `, doc.internal.pageSize.width / 2 + 20, 80);
  doc.setTextColor(0, 0, 0);
  doc.text(
    `${formData["Company-Details-VAT-registration"] || "Not VAT registered"}`,
    doc.internal.pageSize.width / 2 + 28 + 20,
    80
  );
  doc.setFontSize(12);
  doc.text("The self-biller (the customer) agrees:", 20, 100);
  doc.setFontSize(10);
  doc.text(
    "1. To issue self-billed invoices for all supplies made to them by the self-billee until 5 years from today’s date.",
    25,
    110,
    { maxWidth: 160 }
  );
  doc.text(
    "2. To complete self-billed invoices showing the supplier's details, including VAT registration number.",
    25,
    120,
    { maxWidth: 160 }
  );
  doc.text(
    "3. To make a new self-billing agreement if their VAT registration number changes.",
    25,
    130,
    { maxWidth: 160 }
  );
  doc.text(
    "4. To inform the supplier if self-billed invoices are outsourced to a third party.",
    25,
    140,
    { maxWidth: 160 }
  );

  doc.setFontSize(12);
  doc.text("The self-billee (the supplier) agrees:", 20, 160);
  doc.setFontSize(10);
  doc.text(
    "1. To accept invoices raised by the self-biller on their behalf until 5 years from today’s date.",
    25,
    170,
    { maxWidth: 160 }
  );
  doc.text(
    "2. Not to raise sales invoices for transactions covered by this agreement.",
    25,
    180,
    { maxWidth: 160 }
  );
  doc.text("3. To notify the customer immediately if they:", 25, 190);
  doc.text("   - Change their VAT registration number", 30, 200);
  doc.text("   - Cease to be VAT registered", 30, 210);
  doc.text("   - Sell their business or part of it", 30, 220);
  // Footer with grey background
  doc.setFillColor(169, 169, 169); // Grey color
  doc.rect(
    0,
    doc.internal.pageSize.height - 60,
    doc.internal.pageSize.width,
    60,
    "F"
  );

  doc.text(`Signed by:    Tom Wollin`, 20, 260);
  doc.text(
    `Signed by:    ${formData["full_name"] || ""}`,
    doc.internal.pageSize.width / 2 + 20,
    260
  );
  doc.text(`On behalf of:  plan.com`, 20, 270);
  doc.text(
    `On behalf of:  ${formData["supplier"] || ""}`,
    doc.internal.pageSize.width / 2 + 20,
    270
  );

  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 280);
  doc.text(
    `Date: ${new Date().toLocaleDateString()}`,
    doc.internal.pageSize.width / 2 + 20,
    280
  );

  return doc;
}

// Convert PDF to Base64
function pdfToBase64(doc) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(doc.output("blob"));
    reader.onload = () => resolve(reader.result.split(",")[1]);
  });
}
// Automatically download the PDF
function downloadPDF(doc, filename = "form_submission.pdf") {
  doc.save(filename);
}

async function sendPDFAsJSON(pdfBase64, webhookUrl, formSelector) {
  if (!webhookUrl) {
    console.error("Webhook URL is required to send an email.");
    return;
  }
  const accountId = getAccountIdFromURL();
  const payload = JSON.stringify({
    id: accountId,
    filename: "form_submission.pdf",
    fileContent: pdfBase64,
  });
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });

    if (response.ok) {
      alert("PDF sent successfully!");
      if (formSelector === "#self_billing_agreement_form") {
        document.querySelector(
          "#confirmation_self_billing_agree_form"
        ).style.display = "none";
        document.querySelector("#page-title").style.display = "none";
        document.querySelector("#progress-bar-block").style.display = "none";
        document.querySelector("#success-page").style.display = "block";
      }
    } else {
      alert("Failed to send PDF.");
    }
  } catch (error) {
    console.error("Error sending PDF:", error);
  }
}
// Main reusable handler
async function handleFormSubmission({
  curForm,
  nextForm,
  formSelector,
  title = "Form Submission",
  downloadFilename = "form_submission.pdf",
  emailFieldName = "email",
  webhookUrl = "https://test",
}) {
  if (!validateAllFields(curForm)) {
    console.log("validation error");
    return;
  }
  const formData = collectFormData(formSelector);
  if (!formData) return;
  let doc;
  if (formSelector === "#partner_agreement_form") {
    doc = await generatePDFPartner(title, formData);
  } else {
    doc = await generatePDFSelfBilling(title, formData);
    downloadPDF(doc, downloadFilename);
  }
  // Automatically download the PDF
  formatSelfBillingInputs();
  const current = document.querySelector(curForm);
  const next = document.querySelector(nextForm);
  current.style.display = "none";
  next.style.display = "block";
  if (curForm === "#partner_agreement_confirmation_form") {
    document.querySelector("#step9").classList.add("active");
  }
  // Send the PDF as JSON
  if (webhookUrl) {
    const pdfBase64 = await pdfToBase64(doc);
    await sendPDFAsJSON(pdfBase64, webhookUrl, formSelector);
  }
}

// Set up click event listener for multiple buttons
function initializePdfHandler(buttonId, config) {
  const button = document.querySelector(buttonId);
  if (!button) {
    console.error(`Button not found: ${buttonId}`);
    return;
  }

  button.addEventListener("click", () => handleFormSubmission(config));
}

// Function to fetch the user's IP address and display it
function setIPAddress(elementId) {
  const ipElement = document.querySelector(elementId);
  if (!ipElement) {
    console.error(`Element with id '${elementId}' not found.`);
    return;
  }

  // Fetch the IP address using a public API
  fetch("https://api64.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      ipElement.textContent = data.ip; // Set IP address
    })
    .catch((error) => {
      console.error("Error fetching IP address:", error);
      ipElement.textContent = "Unable to retrieve IP";
    });
}

// Simple function to navigate forms
function switchForm(
  checkboxSelector,
  buttonSelector,
  currentFormSelector,
  nextFormSelector
) {
  const checkbox = document.querySelector(checkboxSelector);
  const button = document.querySelector(buttonSelector);
  const currentForm = document.querySelector(currentFormSelector);
  const nextForm = document.querySelector(nextFormSelector);

  if (!button || !currentForm || !nextForm) {
    console.error("Button or forms not found.");
    return;
  }

  button.addEventListener("click", () => {
    if (checkbox.checked) {
      currentForm.style.display = "none"; // Hide current form
      nextForm.style.display = "block"; // Show next form
      if (buttonSelector === "#partner_agreement_btn") {
        document.querySelector("#step8").classList.add("active");
      }
      if (buttonSelector === "#self_billing_agreement_btn") {
        document.querySelector("#step10").classList.add("active");
      }
    }
  });
}
function toggleButtonWithClass(
  checkboxSelector,
  buttonSelector,
  activeClass = "next-button",
  inactiveClass = "inactive"
) {
  const checkbox = document.querySelector(checkboxSelector);
  const button = document.querySelector(buttonSelector);

  if (!checkbox || !button) {
    console.error("Checkbox or button not found.");
    return;
  }

  function updateButtonState() {
    if (checkbox.checked) {
      button.classList.add(activeClass);
      button.classList.remove(inactiveClass);
      button.disabled = false;
    } else {
      button.classList.remove(activeClass);
      button.classList.add(inactiveClass);
      button.disabled = true;
    }
  }

  // Attach event listener
  checkbox.addEventListener("change", updateButtonState);

  // Set initial state
  updateButtonState();
}

// Function to set current date in MM/DD/YYYY format
function setCurrentDate(selector) {
  const dateElement = document.querySelector(selector);
  if (!dateElement) {
    console.error(`Element with selector "${selector}" not found.`);
    return;
  }

  // Get current date in DD/MM/YYYY format
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  // Set the date value
  if (dateElement.tagName === "INPUT" || dateElement.tagName === "TEXTAREA") {
    dateElement.value = formattedDate; // For input or textarea fields
  } else {
    dateElement.textContent = formattedDate; // For other elements (e.g., span, div)
  }
}
// Initialize the multi-step form with webhook integration
function initializeMultiStepForm() {
  const createAccountButton = document.querySelector(
    "#create_account_next_btn"
  );
  const partnerAgreementForm = document.querySelector(
    "#partner_agreement_form"
  );
  const createForm = document.querySelector("#create_form");

  if (!createAccountButton || !partnerAgreementForm || !createForm) {
    console.error("Required elements not found.");
    return;
  }

  // Form selectors
  const formSelectors = [
    "#company_details_form",
    "#address_details_form",
    "#bank_details_form",
    "#criteria_form",
    "#contacts_form",
  ];
  // Select all forms dynamically
  const forms = formSelectors.map((selector) =>
    document.querySelector(selector)
  );

  // Ensure required elements exist
  if (forms.some((form) => !form)) {
    console.error("One or more forms are missing.");
    return;
  }

  // Capture account ID from URL
  const accountId = getAccountIdFromURL();

  createAccountButton.addEventListener("click", async function (e) {
    e.preventDefault();

    // Validate all forms before proceeding
    if (!formSelectors.every(validateAllFields)) {
      return;
    }

    // Gather form data and prepare JSON payload
    const formData = await gatherAllFormData(forms);
    // VAT file upload
    const vatfileContainer = document.getElementById("vat-file-upload");
    let fileData = ""; // Use `let` instead of `const`
    if (!vatfileContainer) {
      console.error("VAT file upload container not found");
    } else {
      const vatFileInput = vatfileContainer.querySelector("input[type='file']");

      if (vatFileInput && vatFileInput.files.length > 0) {
        try {
          fileData = await convertFileToBase64(vatFileInput.files[0]);
        } catch (error) {
          console.error("Error converting file:", error);
        }
      }
    }

    // Format the payload
    const payload = {
      triggerType: "form_submission",
      payload: {
        name: "Email",
        siteId: "679222b25d1a12f8f553b070",
        data: formData,
        vatFileData: fileData,
        submittedAt: new Date().toISOString(),
        id: accountId, // Use accountId for tracking
        formId: "6793935ad52ab69a9329c296",
        formElementId: "a4991cc1-4b8a-4208-afee-54a28f860cf8",
        pageId: "679222b25d1a12f8f553b06e",
        publishedPath: "/",
        schema: [],
      },
    };

    try {
      await sendToWebhook(payload);
      // Proceed to next stage
      createForm.style.display = "none";
      partnerAgreementForm.style.display = "block";
      document.querySelector("#step7").classList.add("active");
      setCurrentDate("#partner_agreement_cur_date");
      updateElementValue(
        "Company-Details-Company-name",
        "company_name_replace"
      );
      //   updateElementValue(
      //     "Company-Details-Trading-Name",
      //     "trading_name_replace"
      //   );
      updateElementValue(
        "Company-Details-Company-Type",
        "company_type_replace"
      );
      updateElementValue("Reg-Address-First-Line", "addr_replace");
      updateElementValue("Reg-Address-City", "city_replace");
      updateElementValue("Reg-Address-Postcode", "postcode_replace");
      // pdf generation
      setCurrentDate("#pdf_partner_agree_date");
      updateElementValue(
        "Company-Details-Company-name",
        "pdf_company_name_replace"
      );
      updateElementValue(
        "Company-Details-Company-Type",
        "pdf_company_type_replace"
      );
      updateElementValue("Reg-Address-First-Line", "pdf_addr_replace");
      updateElementValue("Reg-Address-City", "pdf_town_replace");
      updateElementValue("Reg-Address-Postcode", "pdf_postcode_replace");
      //   footer
      updateElementValue("Contacts-First-Name", "signed_by_first_name");
      updateElementValue("Contact-Last-Name", "signed_by_last_name");
      updateElementValue("Company-Details-Company-name", "footer_company_name");
      setCurrentDate("#date_left");
      setCurrentDate("#date_right");
    } catch (error) {
      console.error("Error sending data to webhook:", error);
      alert("There was an error submitting your data. Please try again.");
    }
  });
}

// Capture account ID from URL
function getAccountIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("accountid") || "unknown-accountid";
}

// Gather form data (including file upload)
async function gatherAllFormData(forms) {
  const formData = {};

  for (const form of forms) {
    const fields = form.querySelectorAll("input, select, textarea");
    for (const field of fields) {
      if (field.type === "file" && field.files.length > 0) {
        continue;
        // formData[field.name] = await convertFileToBase64(field.files[0]);
      } else if (field.type === "checkbox") {
        formData[field.name] = field.checked.toString();
      } else {
        formData[field.name] = field.value;
      }
    }
  }

  return formData;
}

// Convert file to Base64
function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

// Send data to webhook
async function sendToWebhook(payload) {
  const webhookUrl =
    "https://prod-56.uksouth.logic.azure.com/workflows/680656bfced4484ba11a1c5e51b400b9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wC1hD4ycXcwdJyhA30dbKlQ2NFMV7l0TTH8fPcKMN0U";

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to send data to webhook");
  }
}

function addDefaultOptionToSelect(selectClass, text) {
  // Get all select elements with the given class name
  const selects = document.querySelectorAll(`.${selectClass}`);
  // Loop through each select element and add the default option
  selects.forEach((select) => {
    // Check if the default option is already present, to avoid duplicates
    if (!select.querySelector('option[value=""]')) {
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = text;
      defaultOption.selected = true;
      defaultOption.disabled = true;
      defaultOption.classList.add("default-option"); // <-- Add this line
      defaultOption.style.color = "grey"; // <-- directly set text color here
      // Insert the default option as the first child
      select.insertBefore(defaultOption, select.firstChild);
    }
  });
}
// Franchise checkboxes
// function toggleCheckboxes(clicked, other) {
//   const clickedCheckbox = document.getElementById(clicked);
//   const otherCheckbox = document.getElementById(other);
//   if (!clickedCheckbox || !otherCheckbox) {
//     console.error(`One or both checkboxes not found: ${clicked}, ${other}`);
//     return; // Exit the function if elements don't exist
//   }
//   clickedCheckbox.addEventListener("change", function () {
//     if (clickedCheckbox.checked) {
//       otherCheckbox.checked = false;
//     }
//   });
// }
// Function to handle form navigation
function initializeFormNavigation() {
  const formSteps = [
    "#contacts_form",
    "#company_details_form",
    "#address_details_form",
    "#bank_details_form",
    "#criteria_form",
    "#create_form",
  ];

  formSteps.forEach((form, index) => {
    const currentForm = document.querySelector(form);
    if (!currentForm) {
      console.error(`Form not found: ${form}`);
      return;
    }

    // Get buttons
    const nextBtn = currentForm.querySelector('[id$="_next_btn"]');
    const backBtn = currentForm.querySelector('[id$="_back_btn"]');

    // Handle Next Button
    if (nextBtn && index < formSteps.length - 1) {
      nextBtn.addEventListener("click", function () {
        if (!validateAllFields(form)) return; // Validate before proceeding
        navigateToForm(index + 1);
      });
    }

    // Handle Back Button
    if (backBtn && index > 0) {
      backBtn.addEventListener("click", function () {
        navigateToForm(index - 1);
      });
    }
  });
}

// Function to navigate between forms dynamically
function navigateToForm(targetIndex) {
  const formSteps = [
    "#contacts_form",
    "#company_details_form",
    "#address_details_form",
    "#bank_details_form",
    "#criteria_form",
    "#create_form",
  ];

  // Hide all forms
  formSteps.forEach((form) => {
    document.querySelector(form).style.display = "none";
  });

  // Show the target form
  document.querySelector(formSteps[targetIndex]).style.display = "block";

  // Handle Step Progress Indicator
  document.querySelectorAll(".step").forEach((step, idx) => {
    step.classList.toggle("active", idx <= targetIndex);
  });

  // Scroll to the top smoothly
  document
    .querySelector("#page_container")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
// Reusable function to manage checkbox and multi-select
function initializeMultiSelectToggle(checkboxId, selectId) {
  const checkbox = document.getElementById(checkboxId);
  const selectElement = document.getElementById(selectId);

  if (!checkbox || !selectElement) {
    console.error("Invalid checkbox or select element ID.");
    return;
  }

  // Initialize Choices.js on the multi-select
  const multiSelect = new Choices(selectElement, {
    removeItemButton: true,
    searchEnabled: true,
    placeholder: true,
    placeholderValue: "Select Options",
  });

  // Disable Multi-Select by Default
  multiSelect.disable();

  // Toggle Multi-Select on Checkbox Change
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      multiSelect.enable(); // Enable when checked
    } else {
      multiSelect.disable(); // Disable when unchecked
    }
  });
}

// Function to enable/disable VAT registration input
function initializeCheckboxToggle(checkboxSelector, inputSelector) {
  const checkbox = document.querySelector(checkboxSelector);
  const input = document.querySelector(inputSelector);

  if (checkbox && input) {
    checkbox.addEventListener("change", function () {
      // If checkbox is unchecked, disable the input and clear its value
      if (!checkbox.checked) {
        input.disabled = true;
        input.value = ""; // Clear the input value
      } else {
        input.disabled = false; // Enable the input field
      }
    });

    // Initialize on page load
    if (!checkbox.checked) {
      input.disabled = true;
      input.value = ""; // Clear the input value when disabled
    } else {
      input.disabled = false; // Enable input if checkbox is checked
    }
  } else {
    console.error(
      `Elements not found for selectors: ${checkboxSelector}, ${inputSelector}`
    );
  }
}

function initializeCompanyTypeSelection() {
  const companyTypeSelect = document.querySelector(
    "#Company-Details-Company-Type"
  );
  const registrationNumberInput = document.querySelector(
    "#Company-Details-Registration-Number-2"
  );

  if (companyTypeSelect && registrationNumberInput) {
    // Initialize value on page load
    updateRegistrationNumber(companyTypeSelect.value, registrationNumberInput);

    // Listen for changes in company type selection
    companyTypeSelect.addEventListener("change", function () {
      updateRegistrationNumber(
        companyTypeSelect.value,
        registrationNumberInput
      );
    });

    // Initialize registration number field to be disabled for "Sole Trader"
    toggleRegistrationNumberField(
      companyTypeSelect.value,
      registrationNumberInput
    );
  } else {
    console.error("Company type select or registration input not found.");
  }
}

function updateRegistrationNumber(selectedValue, inputField) {
  // If the company type is not "Sole Trader", enable the field and reset the value
  if (selectedValue !== "Sole Trader") {
    inputField.disabled = false;
    inputField.value = ""; // Reset the registration number field
  } else {
    // If "Sole Trader", lock the field and optionally clear the value
    inputField.disabled = true;
    inputField.value = "";
  }
}

// Function to toggle the registration number field based on company type
function toggleRegistrationNumberField(companyType, inputField) {
  if (companyType === "Sole Trader") {
    inputField.disabled = true;
    inputField.value = ""; // Clear value if the field is locked
  } else {
    inputField.disabled = false;
    inputField.value = ""; // Allow editing and clear value
  }
}

// Function to initialize the date picker
function initializeDatePicker(selector) {
  const dateInput = document.querySelector(selector);

  if (dateInput) {
    flatpickr(dateInput, {
      dateFormat: "Y-m-d",
      altInput: true,
      altFormat: "F j, Y",
      allowInput: true,
      disableMobile: true,
    });
  } else {
    console.error(`Date picker input with selector "${selector}" not found.`);
  }
}

// Function to validate required fields
function validateRequiredFields(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) {
    console.error("Form not found:", formSelector);
    return false;
  }

  let isValid = true;
  const requiredFields = form.querySelectorAll("[required]");

  requiredFields.forEach((field) => {
    const errorMessage = field.nextElementSibling; // Assuming an error message div follows the input
    if (field.value.trim() === "") {
      field.classList.add("error"); // Add error class for styling
      if (errorMessage) {
        errorMessage.textContent = "This field is required.";
        errorMessage.style.display = "block";
      }
      isValid = false;
    } else {
      field.classList.remove("error");
      if (errorMessage) {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
      }
    }

    // Listen for changes to hide error message if field is filled
    field.addEventListener("input", function () {
      if (field.value.trim() !== "") {
        field.classList.remove("error");
        if (errorMessage) {
          errorMessage.textContent = "";
          errorMessage.style.display = "none";
        }
      }
    });
  });

  return isValid;
}

function initializePostcodeLookup(
  postcodeInputSelector,
  searchButtonSelector,
  addressFieldSelector,
  cityFieldSelector,
  postcodeFieldSelector
) {
  const postcodeInput = document.querySelector(postcodeInputSelector);
  const searchButton = document.querySelector(searchButtonSelector);
  const addressField = document.querySelector(addressFieldSelector);
  const cityField = document.querySelector(cityFieldSelector);
  const postcodeField = document.querySelector(postcodeFieldSelector);

  if (
    !postcodeInput ||
    !searchButton ||
    !addressField ||
    !cityField ||
    !postcodeField
  ) {
    console.error("One or more input fields are missing.");
    return;
  }

  // Create dropdown to show address options
  const addressDropdown = document.createElement("select");
  // Set the id attribute
  // addressDropdown.id = "addressDropdown";
  // Set the class attribute
  addressDropdown.className = "select-modern";

  // Add a placeholder option
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = "Select your address";
  placeholderOption.selected = true;
  placeholderOption.disabled = true;
  addressDropdown.appendChild(placeholderOption);

  // Set background image for dropdown using Font Awesome icon (caret-down)
  //addressDropdown.style.backgroundImage = "url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/svgs/solid/caret-down.svg')";
  //addressDropdown.style.backgroundRepeat = "no-repeat";
  //addressDropdown.style.backgroundPosition = "right center";
  //addressDropdown.style.backgroundSize = "16px 16px"; // Adjust size

  // Initially hide the dropdown until options are loaded
  addressDropdown.style.display = "none";

  // Insert the dropdown after the postcode input
  postcodeInput.parentNode.insertBefore(
    addressDropdown,
    postcodeInput.nextSibling
  );

  searchButton.addEventListener("click", function () {
    const postcode = postcodeInput.value.trim();
    if (postcode === "") {
      alert("Please enter a postcode.");
      return;
    }

    const apiKey = "XE49-PR11-PE38-FF69"; // Replace with your Loqate API Key
    const loqateUrl = `https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws?Key=${apiKey}&Text=${postcode}&IsMiddleware=false&Countries=GB`;

    fetch(loqateUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Items && data.Items.length > 0) {
          addressDropdown.innerHTML = ""; // Clear previous options
          addressDropdown.style.display = "block"; // Show the dropdown

          // Add placeholder option
          addressDropdown.appendChild(placeholderOption);

          // Populate dropdown with all addresses
          data.Items.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.Id;
            option.textContent = item.Text;
            addressDropdown.appendChild(option);
          });

          // Don't automatically populate fields, let user select from the list
        } else {
          throw new Error("No address found for this postcode.");
        }
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
        alert("Could not retrieve address details. Please enter manually.");
      });
  });

  // Fetch and populate fields when address is selected
  addressDropdown.addEventListener("change", function () {
    const selectedId = addressDropdown.value;
    if (selectedId) {
      fetchAddressDetails(selectedId); // Only populate when the user selects an address
    }
  });

  // Function to fetch full address details
  function fetchAddressDetails(addressId) {
    const apiKey = "XE49-PR11-PE38-FF69"; // Replace with your Loqate API Key
    const detailUrl = `https://api.addressy.com/Capture/Interactive/Retrieve/v1.00/json3.ws?Key=${apiKey}&Id=${addressId}`;

    fetch(detailUrl)
      .then((response) => response.json())
      .then((detailData) => {
        if (detailData.Items && detailData.Items.length > 0) {
          const addressDetails = detailData.Items[0];

          addressField.value = addressDetails.Line1 || "";
          cityField.value = addressDetails.City || "";
          postcodeField.value = addressDetails.PostalCode || "";
        } else {
          throw new Error("No address details found.");
        }
      })
      .catch((error) => {
        console.error("Error retrieving address details:", error);
        alert("Could not retrieve full address details.");
      });
  }
}
function initializeMultiSelect(selector, placeholderText = "Select an option") {
  const element = document.querySelector(selector);

  if (element) {
    const choicesInstance = new Choices(element, {
      removeItemButton: true,
      searchEnabled: false,
      placeholder: true,
      placeholderValue: placeholderText,
      noResultsText: "No options found",
      itemSelectText: "",
    });

    // Get necessary elements
    const choicesContainer = element.closest(".choices");
    const choicesInner = choicesContainer.querySelector(".choices__inner");
    const searchInput = choicesContainer.querySelector(
      ".choices__input--cloned"
    );

    choicesInner.addEventListener("click", (event) => {
      // Prevent toggle if clicking on the search input
      if (event.target === searchInput) {
        return;
      }

      if (choicesContainer.classList.contains("is-open")) {
        choicesInstance.hideDropdown();
      } else {
        choicesInstance.showDropdown();
      }
    });
  } else {
    console.error(
      `Multi-select dropdown with selector "${selector}" not found.`
    );
  }
}

// Enhanced validation for all fields with detailed error messages
function validateAllFields(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) {
    console.error("Form not found:", formSelector);
    return false;
  }

  let isValid = true;
  let firstErrorField = null;

  // Select all input fields, selects, and textareas
  const allFields = form.querySelectorAll("input, select, textarea");

  allFields.forEach((field) => {
    const errorMessage = field.parentElement.querySelector(".error-message");

    // Skip disabled fields
    if (field.disabled) return;

    const value =
      field.type === "file" ? field.files.length : field.value.trim();

    // Determine validation case
    if (field.required && !value) {
      showError(field, errorMessage, "This field is required.");
      isValid = false;
      if (!firstErrorField) firstErrorField = field; // Set first error field
    } else if (value) {
      const errorType = getValidationError(field);
      if (errorType) {
        showError(field, errorMessage, errorType);
        isValid = false;
        if (!firstErrorField) firstErrorField = field;
      } else {
        clearError(field, errorMessage);
      }
    } else {
      clearError(field, errorMessage);
    }

    // Listen for input changes to dynamically clear errors
    field.addEventListener("input", () => {
      const updatedValue =
        field.type === "file" ? field.files.length : field.value.trim();
      if ((updatedValue || !field.required) && !getValidationError(field)) {
        clearError(field, errorMessage);
      }
    });
  });

  // Autofocus the first error field
  if (firstErrorField) {
    firstErrorField.focus();
    console.log(
      "Autofocused on first error field:",
      firstErrorField.name || firstErrorField.id
    );
  }

  return isValid;
}

// Show detailed error message
function showError(field, errorMessage, message) {
  field.classList.add("error");
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
}

// Clear error message
function clearError(field, errorMessage) {
  field.classList.remove("error");
  if (errorMessage) {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }
}

// Identify the specific validation error
function getValidationError(field) {
  const fieldName = field.name.toLowerCase();

  if (fieldName.includes("email")) {
    return getEmailError(field.value);
  }

  if (fieldName.includes("phone") && !validatePhoneNumber(field.value)) {
    return "Invalid phone number. Use 10-15 digits.";
  }

  if (fieldName.includes("date") && !validateDate(field.value)) {
    return "Invalid date. Use YYYY-MM-DD format.";
  }

  if (
    (fieldName.includes("number") || field.type === "number") &&
    !validateNumber(field.value)
  ) {
    return "Invalid number format.";
  }

  //  if (fieldName.includes("vat") && !validateVAT(field.value)) {
  //    return "Invalid VAT number.";
  //  }

  return "";
}

// Detailed email error messages
function getEmailError(value) {
  if (!value.includes("@")) {
    return "Email must contain '@'.";
  }
  if (!value.includes(".")) {
    return "Email must contain a domain (e.g., '.com').";
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(value)) {
    return "Invalid email format.";
  }
  return "";
}

// Email validation
function validateEmail(value) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(value);
}

// Phone number validation
function validatePhoneNumber(value) {
  const phonePattern = /^[0-9]{10,15}$/;
  return phonePattern.test(value);
}

// Date validation (YYYY-MM-DD)
function validateDate(value) {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  return datePattern.test(value);
}

// VAT number validation
function validateVAT(value) {
  const vatPattern = /^[A-Za-z0-9]{9,12}$/;
  return vatPattern.test(value);
}

// Number validation (integer or decimal)
function validateNumber(value) {
  const numberPattern = /^[0-9]+(\.[0-9]+)?$/;
  return numberPattern.test(value);
}
