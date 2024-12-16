# GraphQL Node.js Project

## Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **Apollo Server**: A community-driven, open-source GraphQL server that works with any GraphQL schema.
- **Axios**: A promise-based HTTP client for making API requests.
- **GraphQL**: A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.

## Frontend

- **React**: A JavaScript library for building user interfaces.
- **Apollo Client**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- **Vite**: A fast build tool and development server for modern web projects.

### Backend Setup

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/graphql-node.git
    cd graphql-node/server
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the server**:

    ```sh
    npm start
    ```

    The server will start on port 8000, access the GraphQL playground at `http://localhost:8000/graphql`.

### Frontend Setup

1. **Navigate to the frontend directory**:

    ```sh
    cd ../client
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm run dev
    ```

    The frontend development server will start on port 5173, access the application at `http://localhost:3000`.

## Project Structure

```plaintext
graphql-node/
├── server/                 # Backend code
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies and scripts
│   └── .gitignore          # Git ignore file for backend
└── client/                 # Frontend code
    ├── src/
    │   ├── App.jsx         # Main React component
    │   ├── index.jsx       # Entry point for React
    │   └── App.css         # CSS for the application
    ├── package.json        # Frontend dependencies and scripts
    └── .gitignore          # Git ignore file for frontend
```

## Running the Project

1. **Start the backend server**:

    ```sh
    cd server
    npm start
    ```

2. **Start the frontend development server**:

    ```sh
    cd ../client
    npm run dev
    ```

3. **Access the application**:
    - Backend GraphQL Playground: `http://localhost:8000/graphql`
    - Frontend Application: `http://localhost:3000`
