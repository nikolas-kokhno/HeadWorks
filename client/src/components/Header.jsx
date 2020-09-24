import React from 'react';

export const Header = ({header, subheader}) => {
    return (
        <div className="header">
            <h2 className="header__title">
                {header}
            </h2>
            <h5 className="header__subtitle">
                {subheader}
            </h5>
        </div>
    )
}