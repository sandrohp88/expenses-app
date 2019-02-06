import React from 'react'
import { shallow } from 'enzyme'
import { NotFound } from '../../components/NotFound/NotFound'

test('render NotFound without crash', () => {
  const wrapper = shallow(<NotFound />)
  expect(wrapper).toMatchSnapshot()
})
