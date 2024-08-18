import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />

			</div>
				<Footer />
		</>
	);
};

export default Home;
