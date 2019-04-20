import React from 'react';

// Style
import './index.scss';

export const Input = ({ label, icon, type = "text", value, onChange, error }) => {

    return (
        <div className="form-inline login-txtbox">
            <div className="phAnimate">
                <input type={type} id={label} value={value} className="form-control" placeholder={label} onChange={onChange.bind(this)} style={{ width: '100%', background: 'transparent' }} />
                <span className="input-group-addon bg-blue" style={{ padding: '9px 25px 9px 12px !important' }}>
                    <i className={`glyph-icon fa fa-${icon}`} />
                </span>
                {error &&
                    <small>{error}</small>
                }
            </div>
        </div>
    );
}