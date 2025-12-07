# Quickstart: Textbook Development Environment

This guide provides instructions for setting up the Docusaurus environment to develop and preview the textbook.

## Prerequisites

-   [Node.js](https://nodejs.org/) (version 18.x or later)
-   [Yarn](https://yarnpkg.com/) (recommended package manager)

## Setup

1.  **Navigate to the content directory**:
    ```bash
    cd book-content
    ```

2.  **Install dependencies**:
    ```bash
    yarn install
    ```

## Running the Development Server

1.  **Start the Docusaurus development server**:
    ```bash
    yarn start
    ```

2.  **Open the site in your browser**:
    The site will be available at [http://localhost:3000](http://localhost:3000).

The development server will automatically reload when you make changes to the `.mdx` files in the `docs` directory.

## Building the Site

To create a production-ready build of the site, run:

```bash
yarn build
```

The output will be in the `build` directory.
