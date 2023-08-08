import React from 'react';

import FunctionsBar from './FunctionsBar';
import ContentAdmin from './ContentAdmin';
function DashboardAdmin(props) {
  return (
    <div style={{ display: 'flex' }}>
      <FunctionsBar />
      <ContentAdmin />
    </div>
  );
}

export default DashboardAdmin;
