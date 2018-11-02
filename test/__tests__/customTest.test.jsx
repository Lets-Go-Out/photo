import React from "react";
import { mount } from "enzyme";
import { shallow } from "enzyme";
import sinon from "sinon";
import Gallery from "./../../client/components/Gallery.jsx";
import GalleryModal from "./../../client/components/GalleryModal.jsx";

test("should have a right amount of states", () => {
  const wrapper = shallow(<Gallery />);
  const stateLen = Object.keys(wrapper.state()).length;
  expect(stateLen).toEqual(2);
});

test("checking on openModal function of <Gallery/>", () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().openModal();
});

test("checking on closeModal function of <Gallery/>", () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().closeModal();
});

test("checking on findPrev function of <Gallery/>", () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().findPrev();
});

test("checking on findNext function of <Gallery/>", () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().findNext();
});

test("should have a right amount of div tags", () => {
  const wrapper = shallow(<Gallery imageList={imageList} />);
  expect(wrapper.find("div")).toHaveLength(2);
});
test("test45", () => {
  const wrapper = shallow(<Gallery imageList={imageList} />);
  expect(wrapper.state().currentIndex).toEqual(null);
  wrapper.find(".modal-next").simulate("click");
  //expect(openModal.state().currentIndex).toEqual(1);
  //wrapper.setState({currentIndex: 0});
  expect(wrapper.state().currentIndex).toEqual(0);
});

// test('renders correctly',() =>{
//   const wrapper = shallow(<Gallery />);
//   expect(wrapper).toMatchSnapshot();
// })

test("find div with class gallery-grid", () => {
  const wrapper = shallow(<Gallery />);
  //console.log('mmm', wrapper.debug());
  expect(wrapper.find("div.gallery-grid")).toHaveLength(1);
});
// it('should increase currentIndex state when right arrow is clicked', () => {
//     const wrapper = shallow(<Gallery />); // mount/render/shallow when applicable
//     expect(wrapper.state().currentIndex).toEqual(0);
//     wrapper.find('.modal-next').simulate('click');
//     expect(wrapper.state().currentIndex).toEqual(1);
//   });

const imgUrl = [
  "https://s3-us-west-1.amazonaws.com/lanakhan/img11.jpg",
  "https://s3-us-west-1.amazonaws.com/lanakhan/img12.jpg",
  "https://s3-us-west-1.amazonaws.com/lanakhan/img13.jpg",
  "https://s3-us-west-1.amazonaws.com/lanakhan/img14.jpg",
  "https://s3-us-west-1.amazonaws.com/lanakhan/img15.jpg"
];
test("calls componentDidMount", () => {
  sinon.spy(Gallery.prototype, "componentDidMount");
  for (var i = 0; i < imgUrl.length; i += 1) {
    mount(<Gallery imageList={imgUrl[i]} />);
    expect(Gallery.prototype.componentDidMount.callCount).toBe(i + 1);
  }
});
