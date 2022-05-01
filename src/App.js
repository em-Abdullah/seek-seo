import { useState } from "react";
import Loader from "./components/loader";
import Logo from "./assets/logo.png";

function App() {
	const [search, setSearch] = useState("");
	const [warning, setWarning] = useState([]);
	const [wordCount, setWordCount] = useState();
	const [toggle, setToggle] = useState(false);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (search === "") return;
		setToggle(true);
		const endpoint = `http://127.0.0.1:5000/search?url=${search}`;
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`Request rejected with status ${response.status}`);
		}
		const data = await response.json();

		setWarning(data.pages[0].warnings);
		setWordCount(data.pages[0].word_count);
		await setToggle(false);
	};

	return (
		<div className="App">
			<header>
				<img
					className="noselect"
					onClick={() => window.location.reload(false)}
					src={Logo}
					alt="logo"
				></img>
				<h1 className="noselect" onClick={() => window.location.reload(false)}>
					SEO Analyze
				</h1>
				<form className="search-box" onSubmit={handleSearch}>
					<input
						type="search"
						placeholder="Enter url..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</form>
				{wordCount ? (
					<p>
						Search Results: <span>{wordCount}</span>
					</p>
				) : (
					""
				)}
			</header>
			<div className="results">
				{toggle ? (
					<Loader />
				) : (
					warning.map((item, i) => {
						return (
							<div className="result" key={i}>
								<p dangerouslySetInnerHTML={{ __html: item }}></p>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default App;
