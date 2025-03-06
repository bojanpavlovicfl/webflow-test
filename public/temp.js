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
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // Ensures no broken sections
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
