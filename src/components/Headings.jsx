import Collapsible from 'react-collapsible';

const Headings = (props) => {

  const {heading} = props;

  return (
    <>
    {heading ? (
    <div className="expandable-btn">
     <Collapsible trigger={"Headings ▼"} >
      {Object.entries(heading).map((item, i) => {
				return (
					<div className="result" key={i}>
						<li className="bigram-trigram" dangerouslySetInnerHTML={{ __html: `${item[0]} : ${item[1]}` }}></li>
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
export default Headings;