import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      home: []
    }
  }

  componentDidMount () {
    return fetch('/api/home')
    .then(response => response.json())
    .then(json => {
      this.setState({
        home: json.body
      })
    })
  }

  render () {
    return pug`
      div
        h1 Home
        h4 ${this.state.home}
    `
  }
}
