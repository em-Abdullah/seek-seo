import Collapsible from 'react-collapsible';

const Bigrams = (props) => {

  const {bigram} = props;

  return (
    <>
    {bigram ? (
    <div className="expandable-btn">
     <Collapsible trigger={"Bigrams ▼"} >
      {Object.entries(bigram).map((item, i) => {
				return (
					<div className="result" key={i}>
						<li className="bigram-trigram">{`${item[0]} : ${item[1]}`}</li>
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
export default Bigrams;