import React from 'react';

import './styles.css';

const FooterInfo = (props) => {
  const { content } = props;

  return ( 
    <div className="footer-info"> {content} </div>
  );
}

export default FooterInfo;
