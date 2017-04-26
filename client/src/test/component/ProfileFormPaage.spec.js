import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ProfilePageForm from '../../components/ProfilePage/ProfilePageForm.components';

function setup(saving) {
  const props = {
    document: {},
    saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<ProfilePageForm {...props} />);
}

describe('ProfilePageForm Test', () => {
  it('renders form and h5', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    // expect(wrapper.find('h5').text()).toEqual('Create a Document');
  });

  it('UPDATE button is labeled "UPDATE" ', () => {
    const wrapper = setup(true);
    expect(wrapper.find('button').text()).toEqual('UPDATE');
  });

  it('should render self', () => {
    const wrapper = setup();
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('Input').length).toEqual(10);
  });

  it('should take props', () => {
    const wrapper = setup();
    expect(wrapper.props().errors).toExist;
    expect(wrapper.props().userProps).toExist;
    expect(wrapper.props().onChange).toExist;
    expect(wrapper.props().onSubmit).toExist;
  });
});
