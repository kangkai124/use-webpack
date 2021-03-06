'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/WX20190514-155029@2x.png'

class Search extends React.Component {
  render () {
    return <div className="search-text">
      搜索文字123
      <img style={{ width: '200px'}} src={logo} />
      </div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)