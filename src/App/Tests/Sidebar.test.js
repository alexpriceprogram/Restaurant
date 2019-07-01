    import React from 'react';
    import { shallow } from 'enzyme';
    import Sidebar from '../Components/Sidebar.js';

    describe('Sidebar component', () => {
      it('it has the name of the restaraunt', () => {
        const wrapper = shallow(<Sidebar />);
        const headertext = wrapper.find('h1').html();
        expect(headertext).toContain('Elmer&#x27;s Eatery');
      });
      it('it has the name of the restaraunt', () => {
        const wrapper = shallow(<Sidebar />);
        const headertext = wrapper.find('ul').html();
        expect(headertext).toContain('Menus');
      });
      it('it has the name of the restaraunt', () => {
        const wrapper = shallow(<Sidebar />);
        const headertext = wrapper.find('ul').html();
        expect(headertext).toContain('Information');
      });
      it('it has the name of the restaraunt', () => {
        const wrapper = shallow(<Sidebar />);
        const headertext = wrapper.find('ul').html();
        expect(headertext).toContain('Contact');
      });
    });
