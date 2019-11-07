import React from 'react';
import { connect } from 'react-redux';
import { GetArticle } from '../../store/action/Article'

class Home extends React.Component{
  componentDidMount () {
    this.props.dispatch(GetArticle())
    setTimeout(()=>{
      console.log(this.props)
    },1000)
  }

  render () {
    return(
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

/**
 * 通过connect将redux中的数据传递进入组件
 */

export default connect(state=>state.home)(Home)
