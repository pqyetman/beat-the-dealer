import { Card } from 'react-bootstrap';
import './chiparea.css'; 

const ChipArea = () => {
    return (
        <div className="circular-area mt-3">
            <div className="chip" style={{ position: 'absolute' }}>
                <p>10</p>
            </div>          
        </div>
    );
};

export default ChipArea;
