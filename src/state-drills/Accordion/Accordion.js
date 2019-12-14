import React from 'react'
import './Accordion.css'

export default class Accordion extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  static defaultProps = { sections: [] };

  state = {
    currentSectionIndex: null
  };

  handleButtonClick(index) {
    this.setState({ currentSectionIndex: index })
  }
  // renderButtons() {
  //   return this.props.sections.map((section, index) => (
  //       <button key={index} onClick={() => this.handleButtonClick(index)}>
  //         {section.title}
  //       </button>
  //   ))
  // }

  // renderContent() {
  //   const currentSection = this.props.sections[this.state.currentSectionIndex]
  //   return (
  //     <p className='content'>
  //       {currentSection.content}
  //     </p>
  //   )
  // }

  renderContent(section, index, currentSectionIndex){
    return (
      <li className="item" key={index}>
        <button onClick={() => this.handleButtonClick(index)}>{section.title}</button>
        {(currentSectionIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { currentSectionIndex } = this.state;
    const { sections } = this.props;
    return (
      <ul className="accordion">
        {sections.map((section,index) => 
          this.renderContent(section, index,currentSectionIndex)
        )}
      </ul>
    )
  }
}

