import SideNavBar from "./components/SideNavBar";
import AnnouncementBanner from "./components/AnnouncementBanner";
import "./AppStyles.css";

function App() {
	return (
		<div className="row">
			<SideNavBar />
			<AnnouncementBanner />
		</div>
	);
}

export default App;
