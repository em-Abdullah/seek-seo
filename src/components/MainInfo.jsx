const MainInfo = (props) => {
  const {wordCount,duplicatePage,error,title,description,url,	metaDesc,charset,viewport} = props;


  return (
    <>
    {wordCount ? (
					<p className='main-info'>
						Title: <span>{title}</span>
					</p>
				) : (
					""
				)}
        {wordCount ? (
					<p className='main-info'>
						Description: <span>{description}</span>
					</p>
				) : (
					""
				)}
				 {wordCount ? (
					<p className='main-info'>
						Meta Description: <span>{metaDesc}</span>
					</p>
				) : (
					""
				)}
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