# Company Profile Generator

This project is a web application that generates company profiles based on a provided website URL. It uses a backend service to scrape the website for relevant data, as the OpenAI API does not perform internet searches.

## Getting Started

Follow the steps below to set up and run the project.

### Prerequisites

Ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [Yarn](https://yarnpkg.com/)

### Setup

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    cd company-profile-generator
    ```

2. Create a `.env` file in the root directory of the project. Use the `.env` file provided to you and ensure it contains all the necessary environment variables.

3. Install the project dependencies:
    ```bash
    yarn
    ```

### Running the Application

1. Start the development server:

    ```bash
    yarn start
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### How It Works

1. **Backend Scraping**:
   When a user provides a website URL, the backend service performs web scraping to extract relevant data from the site. This is necessary because the OpenAI API does not support internet searches.

2. **Profile Generation**:
   The scraped data is processed and used to generate a detailed company profile, which is displayed in the application.

## Available Scripts

In the project directory, you can run:

-   **`yarn start`**: Runs the app in development mode.
-   **`yarn test`**: Launches the test runner in interactive watch mode.
-   **`yarn build`**: Builds the app for production.
-   **`yarn eject`**: Ejects the app configuration (use with caution).

## Contact

For any questions or feedback, feel free to reach out:

**Mateus Roni**
**Email**: mateus.roni@manu.help
