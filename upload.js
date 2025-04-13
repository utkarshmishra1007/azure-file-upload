async function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const sasInput = document.getElementById("sasInput");
  const status = document.getElementById("status");
  const file = fileInput.files[0];
  const containerSasUrl = sasInput.value.trim();
  if (!file) {
    status.innerText = "Please select a file.";
    return;
  }

  if (!containerSasUrl.includes("?")) {
    status.innerText = "Invalid SAS URL. Must contain a token.";
    return;
  }

//const containerSasUrl = "https://azcopytestforinterview.blob.core.windows.net/myprod?sp=racwdlmeop&st=2025-04-11T20:45:00Z&se=2025-04-30T04:45:00Z&sip=103.18.87.241&spr=https&sv=2024-11-04&sr=c&sig=oHunbCGBLe%2BZKQNz4HZlXFapRmhGg8ZXsrIkYhsTXUA%3D";



// Split base and SAS token
const [baseUrl, sasToken] = containerSasUrl.split("?");

  // Append filename to the container URL
const blobUrl = `${baseUrl}/${encodeURIComponent(file.name)}?${sasToken}`;

console.log("Uploading to:", blobUrl);

  try {
    const response = await fetch(blobUrl, {
      method: "PUT",
      headers: {
        "x-ms-blob-type": "BlockBlob",
        "Content-Type": file.type || "application/octet-stream"
      },
      body: file
    });

    if (response.ok) {
      status.innerText = "✅ Upload successful!";
    } else {
      status.innerText = "❌ Upload failed: " + response.statusText;
    }
  } catch (err) {
    status.innerText = "❌ Error: " + err.message;
  }
}
