import { Collapse } from 'antd';
import React from 'react';

import './Accordion.less'

const { Panel } = Collapse;

const Accordion = () => {
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;

    return(
        <Collapse accordion className='accordion'>
            <Panel header="Animal 1" key="1">
                <p>{text}</p>
            </Panel>
            <Panel header="Animal 2" key="2">
                <p>{text}</p>
            </Panel>
            <Panel header="Animal 3" key="3">
                <p>{text}</p>
            </Panel>
        </Collapse>
    )
}

export default Accordion;