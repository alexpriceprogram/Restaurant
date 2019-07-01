import React from 'react';
import { mount,shallow } from 'enzyme';
import Carousel from '../Components/Carousel.js';

const images = ["burger", "cake", "justshells", "meatlemon", "pancakes", "quiche", "salad"]
describe('Carousel component', () => {
	const wrapper = mount(<Carousel images = {images}/>);
	// images swap every 5 seconds
	const imageSwapTime = 5000
	for (let i = 0; i < images.length; i++) {
		// tests all images toggle on at appropriate time
		it('it toggles to an image of' + images[i], () => {
			jest.useFakeTimers();
			const component = shallow(<Carousel images = {images}/>);
			jest.runTimersToTime(imageSwapTime * i);
			// required to get new image at correct time
			expect(component.find("img").filterWhere( (img) => {
				return img.props()["style"]["display"] == "block"
			}).html()).toContain(images[i]) 
		})
	}
})

