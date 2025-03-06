async function generatePDFPartner(title, formData) {
  try {
    // Extract content inside all elements with class "w-embed" within "#pdf-content"
    let extractedContent = Array.from(
      document.querySelectorAll("#pdf-content .w-embed")
    )
      .map((element) => element.innerHTML) // Get inner HTML of each element
      .join("\n"); // Join all extracted content with a newline

    // Generate PDF using html2pdf
    const pdf = await html2pdf()
      .set({
        margin: [25, 20, 25, 20], // Increased bottom margin
        filename: title,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: (window.devicePixelRatio || 2) * 2, // Improved resolution
          useCORS: true, // Enables cross-origin resource sharing
          logging: false,
          scrollX: 0,
          scrollY: 0,
          windowWidth: document.body.scrollWidth, // Ensure full-width rendering
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // Prevent content cuts
      })
      .from(extractedContent)
      .toPdf()
      .get("pdf");

    await pdf.save();
    return pdf;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error; // Ensure errors are propagated
  }
}
