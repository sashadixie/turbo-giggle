#! /bin/bash

component=$1
mkdir -p $component
# add boilerplate files
cat > $component/index.js << EOF
import $component from './$component';

export default $component;
EOF

cat > $component/$component.jsx << EOF
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class $component extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        {/* silence is golden */}
      </>
    );
  }
}

export default $component;

$component.propTypes = {

};
EOF


cat > $component/style.scss << EOF
@import "../shared/globals";

EOF