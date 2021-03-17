import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Results(props) {
    console.log(props);
	return (
		<Layout>
			<Head title="Results"/>
			<div className="container">
				<Heading heading="Results" />
                {props.books.map((game) => {
                    const { name, _id } = game;
                    return  <>
                                <h3 key={name}>{name}</h3>
                                <p key={_id}>ID: {_id}</p>
                            </>
                        ;
                })}
			</div>
		</Layout>
	);
}


export async function getStaticProps() {
	let books = [];

	try {
		const response = await axios.get(BASE_URL);

		console.log(response.publishers);

		books = response.data.docs;
	} catch(error) {
		console.log(error);
	}

	return {
		props: {
			books: books,
		}
	};
}