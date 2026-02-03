
export const submitToGoogleSheets = async (data: any) => {
  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;
  
  if (!SCRIPT_URL) {
    console.warn("VITE_GOOGLE_SHEETS_URL is not defined. Skipping Google Sheets submission.");
    return;
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script Web App
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    // With no-cors, we can't read the response, but it usually succeeds if it transfers
    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return { success: false, error };
  }
};
