import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Pricing from "../../pages/Pricing";
import Service from "../../pages/Service";

const Route = ({ component }) => {
	const ConditionalRender = () => {
		if (component === "Home") {
			return <Home />;
		} else if (component === "About") {
			return <About />;
		} else if (component === "Contact") {
			return <Contact />;
		} else if (component === "Pricing") {
			return <Pricing />;
		} else if (component === "Services") {
			return <Service />;
		}
	};

	return (
		<>
			<ConditionalRender />
		</>
	);
};

export default Route;
