import { ApolloServer, gql } from 'apollo-server-micro';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define your type definitions
const typeDefs = gql`
    type Page {
        title: String
        content: String
        slug: String
    }

    type Query {
        pages: [Page]
    }
`;

// Define your resolvers
const resolvers = {
    Query: {
        pages: async () => {
            const pagesDirectory = path.join(process.cwd(), 'content/pages');
            const filenames = fs.readdirSync(pagesDirectory);

            return filenames.map(filename => {
                const filePath = path.join(pagesDirectory, filename);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContent);

                return {
                    title: data.title,
                    content,
                    slug: filename.replace('.md', ''),
                };
            });
        },
    },
};

// Create the Apollo Server
const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
