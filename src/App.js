import { useState } from "react";
import Loader from "./components/loader";
import Logo from "./assets/logo.png";
import MainInfo from "./components/MainInfo";
import Warnings from "./components/Warnings";
import Keywords from "./components/Keywords";

function App() {
	const [search, setSearch] = useState("");
	const [warning, setWarning] = useState([]);
	const [keyword, setKeyword] = useState([]);
	const [wordCount, setWordCount] = useState();
	const [duplicatePage, setDuplicatePage] = useState([]);
	const [error, setError] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [url, setUrl] = useState("");
	const [toggle, setToggle] = useState(false);
	const [metaDesc, setMetaDesc] = useState("");
	const [charset, setCharset] = useState("");
	const [viewport, setViewport] = useState("");

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
		setKeyword(data.keywords);
		setWordCount(data.pages[0].word_count);
		setDuplicatePage(data.duplicate_pages);
		setError(data.errors);
		setTitle(data.pages[0].title);
		setDescription(data.pages[0].description);
		setUrl(data.pages[0].url);
		setMetaDesc(data.pages[0].additional_info.meta_desc);
		setCharset(data.pages[0].additional_info.charset);
		setViewport(data.pages[0].additional_info.viewport);

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
					Seek SEO
				</h1>
				<form className="search-box" onSubmit={handleSearch}>
					<input
						type="search"
						placeholder="Enter url..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</form>
				<MainInfo
					wordCount={wordCount}
					duplicatePage={duplicatePage}
					error={error}
					title={title}
					description={description}
					url={url}
					metaDesc={metaDesc}
					charset={charset}
					viewport={viewport}
				/>
			</header>
			<div className="results">
				{toggle ? (
					<Loader />
				) : (
					<>
						{" "}
						<Warnings warning={warning} /> <Keywords keyword={keyword} />{" "}
					</>
				)}
			</div>
		</div>
	);
}

export default App;
