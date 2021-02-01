// import configureMockStore from "redux-mock-store"
// import { shallow } from "enzyme"
// import { UnitList } from "../pages/UnitList"

// const mockStore = configureMockStore();

// describe("Unit List Component", () => {
//   let store;
//   let wrapper;

//   beforeEach(() => {
//     const state = {
//       findAllUnit: {
//         data: null,
//         loading: false,
//         error: null
//       },
//       removeUnitById: {
//         data: null,
//         loading: false,
//         error: null
//       }

//     }
//     store = mockStore(state)
//     wrapper = shallow(<UnitList store={store} />).dive()
    
//   })

//   // it("should return the data state", () => {
//   //   expect(wrapper.props().units).toStrictEqual([])
//   // })

//    it("should return the data state", () => {
//       expect(wrapper.props().units).toStrictEqual([])
//     })
// })

import configureMockStore from 'redux-mock-store';
import { shallow } from "enzyme"
import UnitList from '../pages/UnitList';

const mockStore = configureMockStore();
describe("Unit List Component", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        const unit = {
            code: 'kg',
            description: 'Kilogram'
        }
        const initialState = {
            findAllUnit: {
                data: null,
                loading: false,
                error: null
            },
            removeUnitById: {
                data: null,
                loading: false,
                error: null
            }
        }
        store = mockStore(initialState);
        wrapper = shallow(<UnitList store={store}/>).dive();
    })

    it('Should return the data state', () => {
        expect(wrapper.props().units).toStrictEqual([]);
    })

    it('Should return isLoading false', () => {
        expect(wrapper.props().isLoading).toBe(false);
    })

    
    
})