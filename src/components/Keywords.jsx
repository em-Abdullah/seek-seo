import Collapsible from 'react-collapsible';

const Keywords = (props) => {

  const {keyword} = props;



  return (
    <>
    {keyword.length !== 0 ? (
    <div className="warning-expandable">
     <Collapsible trigger={"Keywords"} >
    {
      keyword.map((item, i) => {
				return (
					<div className="result" key={i}>
            <h4>Count: </h4>
						<p dangerouslySetInnerHTML={{ __html: item.count }}></p>
            <h4>Word: </h4>
            <p dangerouslySetInnerHTML={{ __html: item.word }}></p>
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