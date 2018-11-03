import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {render} from 'enzyme';
import sinon from 'sinon';
import Gallery from './../../client/components/Gallery.jsx';
import GalleryModal from './../../client/components/GalleryModal.jsx';
import Report from './../../client/components/Report.jsx';


test('should render correctly with props', () =>{
	const component = shallow(<Report/>);
	expect(component.exists()).toBe(true);
});

// test('should render correctly with props', () =>{
//   const fakeClose = jest.fn()
//   const wrapper = shallow(<Report props.handleCloseModal={fakeClose}/>);
//   expect();
//   //let haha = wrapper.find('.btn btn-primary');
//   wrapper.simulate('click').length;
//   expect(fakeClose).toHaveBeenCalled()
 
//  
// });




