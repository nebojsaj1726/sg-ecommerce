import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, history }) => (
    <div
        className='menu-item'
        onClick={() => history.push('/shop')}>
        <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <h1 className='title'>Sunglasses and eyewear</h1>
            <span className='subtitle'>GO TO SHOP</span>
        </div>
    </div>
);

export default withRouter(MenuItem);