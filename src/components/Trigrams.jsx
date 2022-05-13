import Collapsible from 'react-collapsible';

const Trigrams = (props) => {

  const {trigram} = props;

  return (
    <>
    {trigram ? (
    <div className="expandable-btn">
     <Collapsible trigger={"Trigrams"} >
     {Object.entries(trigram).map((item, i) => {
				return (
					<div className="result" key={i}>
						<li dangerouslySetInnerHTML={{ __html: `${item[0]} : ${item[1]}` }}></li>
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
export default Trigrams;