import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";

export default function About() {
	return (
		<Layout>
			<Head title="Hellothere" />

			<div className="container">
				<Heading heading="About" />
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Nibh tellus molestie nunc non. At urna condimentum mattis pellentesque id. Odio eu feugiat pretium nibh ipsum consequat nisl. Tempus urna et pharetra pharetra. Libero justo laoreet sit amet cursus sit. Adipiscing diam donec adipiscing tristique risus nec feugiat. Ipsum nunc aliquet bibendum enim. Amet porttitor eget dolor morbi.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Nibh tellus molestie nunc non. At urna condimentum mattis pellentesque id. Odio eu feugiat pretium nibh ipsum consequat nisl. Tempus urna et pharetra pharetra. Libero justo laoreet sit amet cursus sit. Adipiscing diam donec adipiscing tristique risus nec feugiat. Ipsum nunc aliquet bibendum enim. Amet porttitor eget dolor morbi.</p>
			</div>
		</Layout>
	);
}