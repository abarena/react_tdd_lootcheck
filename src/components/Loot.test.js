import React from 'react'
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {}d};
  const loot = shallow(<Loot {...props}/>);

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {

  });
});