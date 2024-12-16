import { useQuery, gql } from '@apollo/client';
import viteLogo from '/vite.svg'
import './App.css'

const firstQuery = gql`
  query GetAllTodos{
    getTodos {
      id
      title
      completed
      user {
        username
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(firstQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;  

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Vite + React</h1>
      </header>
      <main>
        {data.getTodos.map(({ id, title, completed, user }) => (
          <div key={id} className="todo-item">
            <h3>{title}</h3>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Completed:</strong> {completed ? 'Yes' : 'No'}</p>
            {user && (
              <div className="user-details">
                <p><strong>User:</strong> {user.name} ({user.username})</p>
              </div>
            )}
          </div>
        ))}
      </main>
      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </div>
  );
}

export default App
