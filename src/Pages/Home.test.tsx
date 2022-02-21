import Home from './Home';
import {shallow} from 'enzyme';

describe('test Home', () => {
    test('renders learn react link', () => {
        const wrapper = shallow(<Home/>);
        console.log(wrapper.debug())

    });
})
