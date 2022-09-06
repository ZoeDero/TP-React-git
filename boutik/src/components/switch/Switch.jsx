import React from 'react';

const Switch = () => {
    return (
        <div>
            <div className="form-check form-switch text-center bg-dark text-light pb-1 d-flex flex-column align-items-center ">
                <label className="form-check-label  " htmlFor="flexSwitchCheckDefault">Thème sombre</label>
                <input className="form-check-input  " type="checkbox" id="flexSwitch"/>
            </div>
        </div>
    );
};

export default Switch;