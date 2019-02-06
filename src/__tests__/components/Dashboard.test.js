import { shallow } from 'enzyme'
import React from 'react'
import { Dashboard } from '../../components/Dashboard/Dashboard'

test('render Dashboard without crash', () => {
  const wrapper = shallow(<Dashboard />)
  expect(wrapper).toMatchSnapshot()
})
