import React from 'react';
import { connect } from 'react-redux';

const List = props => (
    <ul>
        { props.list.map((item, i) => <li key={ i }>{ item }</li>) }
    </ul>
)

/**
 * 通过connect将redux中的数据传递进入组件
 */
function mapStateTpProps(state) {
    return { ...state.list };
}

export default connect(mapStateTpProps)(List)
