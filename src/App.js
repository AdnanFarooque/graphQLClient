import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

// components
import BookList from "./components/BookList"
import {Component} from "react";
import AddBook from "./components/AddBook";

// const errorLink = onError(({ graphQLErrors }) => {
//     if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
// })
// apollo client setup
const client = new ApolloClient({
    uri: "http://localhost:8080/graphql/",
    onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
}});

class App extends Component{
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="main">
                    <h1>Ninjas Reading List </h1>
                    <BookList/>
                    <AddBook/>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
