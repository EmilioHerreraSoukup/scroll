import React from "react";


// FUNC COMPONENT

export const ScrollDetect = (WrappedComponent) => ({ ...props }) => {
  return <WrappedComponent {...props}/>;
};

// CLASS COMPONENT

// export function ScrollDetect(WrappedComponent) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//     }

//     render() {
//       return (
//         <WrappedComponent
//           {...this.props}
//         />
//       );
//     }
//   };
// }
