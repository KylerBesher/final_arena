// import React from 'react';

// // Define a simple React component for the control
// class SimpleParentSlugControl extends React.Component {
//     constructor(props) {
//         super(props);
//         const { field1 = '', field2 = '' } = props.value || {};
//         this.state = { field1, field2 };
//     }

//     static getDerivedStateFromProps(nextProps, prevState) {
//         const { field1 = '', field2 = '' } = nextProps.value || {};
//         if (field1 !== prevState.field1 || field2 !== prevState.field2) {
//             return { field1, field2 };
//         }
//         return null;
//     }

//     handleField1Change = (e) => {
//         this.setState({ field1: e.target.value }, this.updateValue);
//     };

//     handleField2Change = (e) => {
//         this.setState({ field2: e.target.value }, this.updateValue);
//     };

//     updateValue = () => {
//         const { field1, field2 } = this.state;
//         this.props.onChange({ field1, field2 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Enter values for field1 and field2:</p>
//                 <input
//                     type="text"
//                     value={this.state.field1}
//                     onChange={this.handleField1Change}
//                     placeholder="Enter field1"
//                 />
//                 <input
//                     type="text"
//                     value={this.state.field2}
//                     onChange={this.handleField2Change}
//                     placeholder="Enter field2"
//                 />
//             </div>
//         );
//     }
// }

// // Define a simple React component for the preview
// const SimpleParentSlugPreview = ({ value }) => {
//     const { field1, field2 } = value || {};
//     return (
//         <div>
//             Preview: {field1}/{field2}
//         </div>
//     );
// };

// // Define a fallback widget for failure
// const FallbackControl = () => <div>Widget registration failed.</div>;
// const FallbackPreview = () => <div>Preview: Registration failed</div>;

// // Register the widget with CMS
// function registerParentSlugWidget() {
//     try {
//         if (typeof window !== 'undefined' && window.CMS) {
//             window.CMS.registerWidget(
//                 'parent-slug',
//                 SimpleParentSlugControl,
//                 SimpleParentSlugPreview
//             );
//         } else {
//             window.addEventListener('load', () => {
//                 if (window.CMS) {
//                     window.CMS.registerWidget(
//                         'parent-slug',
//                         SimpleParentSlugControl,
//                         SimpleParentSlugPreview
//                     );
//                 } else {
//                     console.error('CMS not found');
//                 }
//             });
//         }
//     } catch (error) {
//         console.error('Error registering widget:', error);
//         if (window.CMS) {
//             window.CMS.registerWidget('parent-slug', FallbackControl, FallbackPreview);
//         }
//     }
// }

// // Export the registration function
// export default registerParentSlugWidget;

// // Immediately register the widget
// registerParentSlugWidget();
