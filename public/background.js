// Content script
chrome.runtime.sendMessage({ action: "getData" }, (response) => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
  } else {
    // Handle the response here
  }
});

// Background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getData") {
    // Process the request and send a response
    const data = ""; // Your data
    sendResponse(data);
  }
});
