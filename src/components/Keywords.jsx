import Collapsible from 'react-collapsible';

const Keywords = (props) => {

  const {keyword} = props;



  return (
    <>
    {keyword.length !== 0 ? (
    <div className="expandable-btn">
     <Collapsible trigger={"Keywords ▼"} >
    {
      keyword.map((item, i) => {
				return (
					<div className="result keywords" key={i}>
            <h4>Count: </h4>
						<li dangerouslySetInnerHTML={{ __html: item.count }}></li>
            <h4>Word: </h4>
            <li dangerouslySetInnerHTML={{ __html: item.word }}></li>
					</div>
					);
				})
    }
    </Collapsible>
    </div>
    ) : (
      ""
    )}
    </>
  );
}
export default Keywords