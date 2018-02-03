import React from 'react'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeClassName: `#${props.location.pathname}`
    }

    window.onhashchange = (e) => {
      this.setState({
        activeClassName: window.location.hash
      })
    }
  }

  render () {
    return pug`
      nav
        li
          a(className=${this.state.activeClassName === '#/' ? 'active' : null} href='#/') home
        li
          a(className=${this.state.activeClassName === '#/page' ? 'active' : null} href='#/page') page 
        li
          a(className=${this.state.activeClassName === '#/about' ? 'active' : null} href='#/about') about               
    `
  }
}
