import React from 'react';

import './styles.css';

const FooterInfo = (props) => {
  const { content } = props;

  return ( 
    <div class="footer-info"> {content} </div>
  );
}

export default FooterInfo;
