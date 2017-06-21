// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from 'docs/src/components/CodeExample';
import Bars1 from './Bars1';
import Bars2 from './Bars2';
import Bars3 from './Bars3';
import Circles from './Circles';

const Example = (props) => {
  const { route: { exampleContext } } = props;

  return (
    <div>
      <CodeExample
        code={exampleContext('./Simple/Bars1')}
        title="Example 1: Simple Bars"
      >
        <Bars1 />
      </CodeExample>
      <CodeExample
        code={exampleContext('./Simple/Bars2')}
        title="Example 1: Donut Chart"
      >
        <Bars2 />
      </CodeExample>
      <CodeExample
        code={exampleContext('./Simple/Bars3')}
        title="Example 1: Donut Chart"
      >
        <Bars3 />
      </CodeExample>
      <CodeExample
        code={exampleContext('./Simple/Circles')}
        title="Example 1: Donut Chart"
      >
        <Circles />
      </CodeExample>
    </div>
  );
};

Example.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Example;
