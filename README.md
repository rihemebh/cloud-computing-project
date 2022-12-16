# Cloud Project : Microsoft Azure

> By Riheme Ben Hassan
> 

---

# The Objective

Deploying an Angular app using 2 different methods:

- Static websites in Azure Storage and front-door
- Static Web Apps + Azure Function as an API

**Github Link**: [rihemebh/cloud-computing-project (github.com)](https://github.com/rihemebh/cloud-computing-project)

# 1st Method: Using storage container

### Architecture

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled.png)

# Steps

1. Create a frontend app
local version: 

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%201.png)

1. Create resource group
2. Go to static websites and create w container
3. Build the app : **npm run build**
4. copy the website inside the container : `AzCopy` is a command-line utility that you can use to copy blobs or files to or from a storage account

```bash
azcopy copy "G:\test-app\dist\test-app" 
"https://cpctg.blob.core.windows.net/$web?sp=racwd&st=2022-12-14T09:53:39Z&
se=2022-12-16T17:53:39Z&spr=https&sv=2021-06-08&sr=c&sig=O5h9M9dC9BDYCDmAeskhuo
C9JtbqNU3yvmZWSmfTp2E%3D" 
--recursive=true
```

### The app is hosted:

[TestApp (windows.net)](https://cpctg.z28.web.core.windows.net/)

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%202.png)

### Front door :

 Azure Front Door can help you deliver higher availability, lower latency, greater scale, and more secure experiences to your users wherever they are.

**Creation:**

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%203.png)

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%204.png)

## 2nd Method: Using Static Web Apps and github actions

### Architecture:

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%205.png)

### Steps:

1. Create a static Web App

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%206.png)

1. A `yaml` file is generated to deploy the app on every `push`

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%207.png)

1. Pushing the app and the action are successfully passed 

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%208.png)

1. here is our app deployed in the cloud

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%209.png)

1. Visualization

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%2010.png)

1. Add an API to the app using Azure Functions

Azure Function is **a serverless compute service that enables us to run event-triggered code without having to provision or manage infrastructure.**

So it will be very beneficial for us to use with a static web app that will need some simple changes 

the functions will be triggered anytime we the app calls them.

→ using the vscode extension I created an azure function for the API and I get a new folder with this structure

```bash
├── .github
│   └── workflows
│       └── azure-static-web-apps-victorious-meadow-06d368b03.yml
│
├── api
│   ├── getName
│   │   ├── function.json
│   │   └── index.js
│   ├── host.json
│   ├── local.settings.json
│   └── package.json
│
└── (folders and files from my static web app)
```

1. Now I just need to modify the frontend to consume the API we just created and push the code and the Github actions will deploy it automatically

![Untitled](Cloud%20Project%20Microsoft%20Azure%20e515436b89e54d59ae6afbce768644b3/Untitled%2011.png)

[TestApp (2.azurestaticapps.net)](https://victorious-meadow-06d368b03.2.azurestaticapps.net/)

# Conclusion:

the objective of this project was fulfilled successfully and I leaned how to:

- easily deploy a static application
- Automate the deployment
- Add API without provision
- Create a front door to enhance the availability
