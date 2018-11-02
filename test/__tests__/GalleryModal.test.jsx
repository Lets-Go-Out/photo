import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {render} from 'enzyme';
import sinon from 'sinon';
import GalleryModal from './../../client/components/GalleryModal.jsx';
 

// test('renders correctly',() =>{
//   const wrapper = shallow(<GalleryModal />);
//   //console.log('ggg',wrapper);
//   expect(wrapper).toMatchSnapshot();
  
// })


const closeModal = jest.fn();
const findPrev = jest.fn();
const findNext = jest.fn();
const hasPrev = jest.fn();
const hasNext = jest.fn();

  
test('should activate left arrow after click on it ', () => {
  const wrapper = shallow(<GalleryModal closeModal={closeModal} findPrev={findPrev} findNext={findNext} hasPrev={hasPrev} hasNext={hasNext} src={5}/>);
  let divLen = wrapper.find('.modal-prev');
  divLen.simulate('click').length;
  expect(findPrev).toHaveBeenCalled()
 
});

test('should activate left arrow after click on it ', () => {
  const wrapper = shallow(<GalleryModal closeModal={closeModal} findPrev={findPrev} findNext={findNext} hasPrev={hasPrev} hasNext={hasNext} src={6}/>);
  let divLen = wrapper.find('.modal-close');
  divLen.simulate('click').length;
  expect(findPrev).toHaveBeenCalled()
 
});

test('testing', () => {
  const wrapper = shallow(<GalleryModal closeModal={closeModal} findPrev={findPrev} findNext={findNext} hasPrev={hasPrev} hasNext={hasNext} src={7}/>);
  let divLen = wrapper.find('div').length;
  expect(divLen).toBe(6);
});

