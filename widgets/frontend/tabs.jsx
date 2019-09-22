import React from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIdx: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler(idx) {
    return () => {
      this.setState({ tabIdx: idx });
    }
  }
  
  render() {
    const headers = this.props.tabInfo.map((tab, idx) => {
      return <Header key={idx} tab={tab} clickHandler={this.clickHandler(idx)}/>
    })
    
    return (
      <>
      <ul>
         {headers}
      </ul>
      <article>
        <h3>{this.props.tabInfo[this.state.tabIdx].content}</h3>
      </article>
    </>
    )
  }
}

const Header = (props) => {
  return <li className="inactive" key={props.idx} onClick={props.clickHandler}>
    {props.tab.name}</li>
}

export default Tabs;