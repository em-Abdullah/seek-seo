import { RiErrorWarningFill } from "react-icons/ri";

const MainInfo = (props) => {
  const {wordCount,duplicatePage,error,title,description,url,	metaDesc,charset,viewport,time} = props;

	const TimeSuggestion = () => {
		if(time == null) return;
		else{
		 if (time > 0 && time <= 5) {
			return (<p className='suggestion'>
			Loading time was adequate.
			</p>);
		} else if (time >= 5) {
			return (<p className='suggestion'>
			Loading time was too long
			</p>);
		}
	}
}
	const TitleSuggestion = () => {
		if(title == null) 
		return (<p className='suggestion'>
		Title is missing.
		</p>);
		
		if (title.length <= 9) {
		return (<p className='suggestion'>
			Title is too short.
			</p>);
		} else if (title.length > 9 && title.length <= 25) {
			return (<p className='suggestion'>
			Title is of appropriate length.
			</p>);
		} else if (title.length >= 25) {
			return (<p className='suggestion'>
			Title is too long.
			</p>);
		}
	
}

	const DescSuggestion = () => {
		if(description === "") 
		return (<p className='suggestion'>
		Description is missing.
		</p>);
		if (description.length <= 120) {
		return (<p className='suggestion'>
			Description is too short.
			</p>);
		} else if (description.length > 120 && description.length <= 150) {
			return (<p className='suggestion'>
			Description is of appropriate length.
			</p>);
		} else if (description.length >= 150) {
			return (<p className='suggestion'>
			Description is too long.
			</p>);
		}
	
}

	const MetaSuggestion = () => {
		if(metaDesc === undefined) 
		return (<p className='suggestion'>
		Meta description is missing.
		</p>);
		if (metaDesc[0].length + metaDesc[1].length <= 150) {
		return (<p className='suggestion'>
			Meta Description is too short.
			</p>);
		} else if (metaDesc[0].length + metaDesc[1].length > 150 && metaDesc[0].length + metaDesc[1].length <= 180) {
			return (<p className='suggestion'>
			Meta Description is of appropriate length.
			</p>);
		} else if (metaDesc[0].length + metaDesc[1].length >= 180) {
			return (<p className='suggestion'>
			Meta Description is too long.
			</p>);
		}
	
}
	const WordCountSuggestion = () => {
		const count = parseInt(wordCount);
		if(count == null) return;
		else{
		if (count <= 300) {
		return (<p className='suggestion'>
			Word Count is too low.
			</p>);
		} else if (count > 9 && count <= 600) {
			return (<p className='suggestion'>
			Word Count is of appropriate length.
			</p>);
		} else if (count >= 600) {
			return (<p className='suggestion'>
			Word Count is too high.
			</p>);
		}
	}
}

  return (
    <>
		 {wordCount ? (
			<h2 className='main-info'>
				Loading Time: <span>{time}</span>
			</h2>
			) : (
			""
			)}
			{ wordCount ? (
			<div className='suggestion'>
			<RiErrorWarningFill /> <TimeSuggestion />
			</div>
		) : ("")}
    {wordCount ? (
			<p className='main-info'>
				Title: <span>{title}</span>
			</p>
			) : (
			""
			)}
		{ wordCount ? (
			<div className='suggestion'>
			<RiErrorWarningFill /> <TitleSuggestion />
			</div>
		) : ("")}
    {wordCount ? (
			<p className='main-info'>
				Description: <span>{description}</span>
			</p>
			) : (
				""
			)}
			{ wordCount ? (
			<div className='suggestion'>
			<RiErrorWarningFill /> <DescSuggestion />
			</div>
		) : ("")}
		{wordCount ? (
			<p className='main-info'>
				Meta Description: <span>{metaDesc}</span>
			</p>
			) : (
				""
			)}
			{ wordCount ? (
			<div className='suggestion'>
			<RiErrorWarningFill /> <MetaSuggestion />
			</div>
		) : ("")}
    {wordCount ? (
			<p className='main-info'>
				Url: <span>{url}</span>
			</p>
		) : (
			""
		)}
		{wordCount ? (
			<p className='main-info'>
				Viewport: <span>{viewport}</span>
			</p>
		) : (
			""
		)}
    {wordCount ? (
			<p className='main-info'>
				Word Count: <span>{wordCount}</span>
			</p>
			) : (
				""
			)}
			{ wordCount ? (
			<div className='suggestion'>
			<RiErrorWarningFill /> <WordCountSuggestion />
			</div>
		) : ("")}
		{wordCount ? (
			<p className='main-info'>
				Charset: <span>{charset}</span>
			</p>
		) : (
			""
		)}
		{wordCount ? (
			<p className='main-info'>
				Duplicate Pages: <span>{duplicatePage.length}</span>
			</p>
		) : (
			""
		)}
		{wordCount ? (
			<p className='main-info'>
				Errors: <span>{error.length}</span>
			</p>
		) : (
			""
		)}
    </>
  )
}
export default MainInfo;