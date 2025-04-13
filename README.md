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

![snip7](https://github.com/user-attachments/assets/20883b2c-c8eb-4186-bd9d-9c40adeaee95)

![snip9](https://github.com/user-attachments/assets/cad65d10-3b75-4647-81ff-f30872ec5ed4)

![snip8](https://github.com/user-attachments/assets/31a06f74-6d37-4a9a-864e-d177169a6622)

![snip10](https://github.com/user-attachments/assets/c712f5df-5691-43ec-8107-45ac8f261d5a)

![snip3](https://github.com/user-attachments/assets/a01c9cf6-ad29-492f-8928-2b082788d9a8)

![snip4](https://github.com/user-attachments/assets/f8399186-9b3e-474f-b1c0-9d744e968b91)

![snip2](https://github.com/user-attachments/assets/a71fd397-ae38-4fa5-a565-f76cd9c62aa8)

![snip1](https://github.com/user-attachments/assets/a9ee099f-28d6-4317-b054-98a5f2ae664a)

![snip5](https://github.com/user-attachments/assets/c663945e-9cf6-4271-a9ad-57a64804f7da)

![snip6](https://github.com/user-attachments/assets/542348d2-c781-4b80-b064-de1d900c3ed4)
