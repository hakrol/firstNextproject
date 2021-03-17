import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Home() {
	return (
		<Layout>
			<Head />

			<div className="container">
				<Heading heading="Home"/>
				<Link href="/results"><a>Results</a></Link>
			</div>

		</Layout>
	);
}