// CONFIGURATION
// Due to this, you should NEVER MANIPULATES the WrappedComponent
// This is a funnction that returns a function containing the modified Wrapped Component
import React from 'react';

// As a Simple Function

// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// As a component now: (maybe you can manipulate it)
const withClass = (WrappedComponent, className) => {
  const WithClass = class extends React.Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />;
  });
};

export default withClass;
