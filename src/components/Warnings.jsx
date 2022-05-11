import Collapsible from 'react-collapsible';

const Warnings = (props) => {

  const {warning} = props;

  return (
    <>
    {warning.length !== 0 ? (
    <div className="warning-expandable">
     <Collapsible trigger={"Warnings"} >
    
      {warning.map((item, i) => {
				return (
					<div className="result" key={i}>
						<p dangerouslySetInnerHTML={{ __html: item }}></p>
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
export default Warnings