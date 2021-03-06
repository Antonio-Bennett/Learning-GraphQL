import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Antonio's Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
