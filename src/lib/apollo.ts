import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4nlag3b0ai701yw3i451rqk/master",
    cache: new InMemoryCache()
})