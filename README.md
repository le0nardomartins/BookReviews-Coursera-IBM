# Tax Calculator - IBM Coursera Final Project

[![IBM Coursera](https://img.shields.io/badge/IBM-Coursera-1261A6?style=for-the-badge)](https://www.coursera.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-386641?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Jasmine](https://img.shields.io/badge/Tests-Jasmine-8A4182?style=for-the-badge)](https://jasmine.github.io/)
[![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Tekton](https://img.shields.io/badge/Pipeline-Tekton-FD495C?style=for-the-badge)](https://tekton.dev/)
[![License](https://img.shields.io/badge/License-Restricted-red?style=for-the-badge)](LICENSE.md)

This is a Tax Calculator project developed exclusively for academic purposes as part of the IBM Back-End Development course on Coursera.

The project demonstrates a small static web application with unit tests, Docker containerization, and Tekton pipeline definitions for build and deployment workflows.

## Author

**Leonardo Martins**

[Website](https://www.leonardomartins.dev/)  
[LinkedIn](https://www.linkedin.com/in/leonardomartinscunha/)  
[GitHub](https://github.com/le0nardomartins)

## Project Structure

```text
.
├── public/                 # Static Tax Calculator application
├── spec/                   # Jasmine unit tests
├── tekton/                 # Tekton task, pipeline, and run definitions
├── docs/                   # Epic, stories, and Coursera submission guide
├── tools/                  # Local development utilities
├── Dockerfile              # nginx container definition
├── package.json            # npm scripts and development dependencies
├── README.md               # Project documentation
└── LICENSE.md              # Restricted academic license
```

## Getting Started

Follow these steps to run the project locally.

## Prerequisites

[Node.js](https://nodejs.org/) v18 or higher is recommended.

npm is included with Node.js.

Docker Desktop is required only for the container tasks.

IBM Cloud CLI is required only for the IBM Cloud Registry and deployment tasks.

## Installation

Clone the repository or download the ZIP:

```bash
git clone https://github.com/le0nardomartins/IBMCoursera.git
```

Navigate to the project folder:

```bash
cd IBMCoursera
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the local development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:8080
```

## Running Tests

Run the Jasmine unit tests:

```bash
npm test
```

Expected result:

```text
7 specs, 0 failures
```

## Running with Docker

Build the Docker image:

```bash
docker build -t tax-calculator:latest .
```

Run the container:

```bash
docker run --rm -d --name tax-calculator -p 8080:80 tax-calculator:latest
```

Open the app at:

```text
http://localhost:8080
```

## Coursera Submission

The required peer-review screenshot checklist is available in:

[docs/SUBMISSION-STEPS.md](docs/SUBMISSION-STEPS.md)

The planning epic and user stories are available in:

[docs/EPIC.md](docs/EPIC.md)

## License and Terms of Use

This project is under a restricted license for academic purposes. Please refer to the [LICENSE.md](LICENSE.md) file for more details regarding the prohibition of commercial use and academic plagiarism.
