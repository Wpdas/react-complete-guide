// Props Proxy. Should be used like a configuration HOC. Name starts with lowercase.
// CONFIGURATION
// Due to this, you should NEVER MANIPULATES the WrappedComponent
// This is a funnction that returns a function containing the modified Wrapped Component
import React from 'react';
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
