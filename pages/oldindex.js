import { gql } from '@apollo/client';
// import client from '../lib/apolloClient';

export default function Home({ pages }) {
    return (
        <div>
            <h1>Pages</h1>
            <ul>
                {pages.map((page) => (
                    <li key={page.slug}>
                        <h2>{page.title}</h2>
                        <p>{page.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const { data } =  '';
    // await client.query({
    //     query: gql`
    //         query {
    //             pages {
    //                 title
    //                 content
    //                 slug
    //             }
    //         }
    //     `,
    // });

    return {
        props: {
            pages: data.pages,
        },
    };
} 