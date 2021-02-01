import React from 'react';
import { shallow } from 'enzyme';
import Container from "../components/Container"

describe('Container', () => {
  it('should be defined', () => {
    expect(Container).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(
      <Container name='button test' />
    );
    expect(tree).toMatchSnapshot();
  });
 });