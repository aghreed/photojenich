import React from 'react';

import './_layouts.scss';

class Template extends React.Component {
  render() {
    // const { location, children } = this.props
    // let header
    // if (location.pathname === '/') {
    //   header = (
    //     <h1>
    //       <Link to={'/'} >
    //         Gatsby Starter Blog
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3>
    //       <Link to={'/'}>
    //         Gatsby Starter Blog
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div>
        {this.props.children()}
      </div>
    )
  }
}

export default Template
