📦 Azure Blob Upload Portal
🚀 Overview
This project is a web-based upload portal hosted on Azure Web Apps, enabling users to upload files to a secure Azure Blob Storage container.

- 🌐 Web-based interface for easy file uploads by anyone
- ☁️ Files uploaded directly to Azure Blob Storage via PUT
- 🔓 No login required (optional authentication support)
- 📥 Download or sync files using AzCopy or SFTP
- 🔧 Easily configurable for various containers or storage accounts

Guide to setup:
Create an Storage account and a container in it.

(Optional) Configure and enable the SFTP access for that container if required. This will require soft delete to be disabled for containers and blobs.

Generate a SAS token URL for the container with write access. This will be required while uploading the file through webapp.
    Format(https://<account>.blob.core.windows.net/<container>?<SASToken>)

Configure CORS on Storage account.
    Go to your Storage Account in Azure → Settings > Resource sharing (CORS) → Add the following:
    Allowed origins: * (or your web app's URL like https://yourapp.azurewebsites.net)
    Allowed methods: PUT, OPTIONS
    Allowed headers: *
    Exposed headers: *
    Max age: 3600

Create an Azure App service and configure the Web app on Azure.
URL to access ZIP deploy kudu+ host https://<app_name>.scm.azurewebsites.net/ZipDeployUI
