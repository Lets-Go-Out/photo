import React from 'react';
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import {render} from 'enzyme';
import sinon from 'sinon';
import Gallery from './../../client/components/Gallery.jsx';
import GalleryModal from './../../client/components/GalleryModal.jsx';
import App from './../../client/components/App.jsx';


test('should render correctly with props', () =>{
	const component = shallow(<App/>);
	expect(component.exists()).toBe(true);
});

test('checking on render function of <App/>', () =>{
	const wrapper = shallow(<App />); 
    wrapper.instance().render();
});


const mock = {
	res_id: 25,
	images_array: []
} 
test('should display loading until data arrives', async() =>{
  const wrapper = shallow(<App info={mock}/>);
  expect(wrapper.html()).toBe('<div>Loading...</div>');
  await Promise.resolve();
  expect(wrapper.html()).toBe('<div>imageList</div>');
});
