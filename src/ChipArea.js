import './chiparea.css'; 

const ChipArea = ({amount}) => {
    return (
        <div className="circular-area mt-3">
            <div className="chip">
                <p>{amount}</p>
            </div>          
        </div>
    )
};

export default ChipArea;
