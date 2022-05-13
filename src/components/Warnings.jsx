import Collapsible from 'react-collapsible';

const Warnings = (props) => {

  const {warning} = props;

  return (
    <>
    {warning.length !== 0 ? (
    <div className="expandable-btn">
     <Collapsible trigger={"Warnings"} >
    
      {warning.map((item, i) => {
				return (
					<div className="result" key={i}>
						<li dangerouslySetInnerHTML={{ __html: item }}></li>
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