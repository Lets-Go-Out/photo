import React from 'react';
import { shallow } from 'enzyme';
import GalleryModal from '../../client/components/GalleryModal';

const closeModal = jest.fn();
const findPrev = jest.fn();
const findNext = jest.fn();
const hasPrev = jest.fn();
const hasNext = jest.fn();

test('should trigger handleCloseModal function of GalleryModal', () => {
  const wrapper = shallow(<GalleryModal />);
  wrapper.instance().handleCloseModal();
});

test('should trigger handleOpenModal function of GalleryModal', () => {
  const wrapper = shallow(<GalleryModal />);
  wrapper.instance().handleOpenModal();
});

test('should confirm state of showModal', () => {
  const wrapper = shallow(<GalleryModal />);
  expect(wrapper.state().showModal).toBe(false);
});
test('should activate left arrow after click on it ', () => {
  const wrapper = shallow(<GalleryModal closeModal={closeModal} findPrev={findPrev} findNext={findNext} hasPrev={hasPrev} hasNext={hasNext} src={5} />);
  const divLen = wrapper.find('.modal-prev');
  divLen.simulate('click').length;
  expect(findPrev).toHaveBeenCalled();
});

test('should return correct number of div tags', () => {
  const wrapper = shallow(<GalleryModal closeModal={closeModal} findPrev={findPrev} findNext={findNext} hasPrev={hasPrev} hasNext={hasNext} src={7} />);
  const divLen = wrapper.find('div').length;
  expect(divLen).toBe(6);
});
