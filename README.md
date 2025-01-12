# News Article Application

This project is a React-based application designed for creating, displaying, and managing news articles.

## Features

- Add, edit, and delete news articles.
- Responsive design for different screen sizes.
- User-friendly interface.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16 or higher) and npm installed on your machine.
- Docker (optional, if you want to run the application in a container).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jkv27100/NewsHub.git
   cd NewsHub
   ```
2. Install dependencies:
   npm install
3. Start server:
   npm run dev
   go to http://localhost:5173/

## Running with docker

1. Build docker image:
   docker build -t news-article-app .
2. Run docker container:
   docker run -p 3000:3000 news-article-app
3. Access application
   http://localhost:3000
