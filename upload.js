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
