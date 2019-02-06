// Enzyme test framework
import React from 'react'
import { Header } from '../../components/Header/Header'
import { shallow } from 'enzyme'

// describe('should render without crashing',()=>{

// })
test('Should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h1').text()).toBe('Expenses')
  expect(wrapper).toMatchSnapshot()
})
