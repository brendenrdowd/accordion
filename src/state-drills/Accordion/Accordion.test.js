import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Accordion from './Accordion';

describe(`Accordion Component`, () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'This is the first section. It has a lot to say about being number 1.',
    },
    {
      title: 'Section 2',
      content: 'This is the second section. It has many things to say about the advantages of being a number 2.',
    },
    {
      title: 'Section 3',
      content: 'This is the third section. Hey, still a podium!',
    },
  ]

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})