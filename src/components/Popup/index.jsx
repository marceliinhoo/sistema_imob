import React from 'react';
import "./popup.css"

const Popup = ({ info, onClose }) => {
    return (

        <>

            <div class="popup-wrepper">
                <div class="popup">
                    <div class="popup-content">
                        <div className="popup-close" onClick={onClose}>x</div>
                        <div className="popup-info">{info}</div>
                    </div>
                </div>
            </div>
        </>



    );
};

export default Popup;
