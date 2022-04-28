import {
    changeStatus,
    formReducer,
    getUni,
    InitialStateFormReducerT,
    setLastUpdateDate
} from "../store/reducer/formReducer";
import {CitiesT, sortCities} from "../utils/cities";
import {getUniT} from "../types/UniT";
import {UserT} from "../types/formReducerT";
import obj from "../Main/common/cities.json";
import {actualDate} from "../utils/actualDate";

const cities = sortCities(obj)
test('status should be changed', () => {
    const startState: InitialStateFormReducerT = {
        name: 'Человек №3596941',
        status: 'Прежде чем действовать, надо понять',
        cities: cities as CitiesT[],
        unis: [] as getUniT[],
        arrayUniName: [] as string[],
        user: {
            password: '',
            email: '',
            agree: false,
        } as UserT,
        lastUpdateForm: '2 Апреля 2022 в 23:15:12'
    };
    const newStatus: string = 'Hello, Alexander'
    const action = changeStatus(newStatus);

    const endState = formReducer(startState, action)


    expect(endState.status).toBe(newStatus);
    expect(endState.status).toBeDefined();
});

test('actualDate should be changed', () => {
    const startState: InitialStateFormReducerT = {
        name: 'Человек №3596941',
        status: 'Прежде чем действовать, надо понять',
        cities: cities as CitiesT[],
        unis: [] as getUniT[],
        arrayUniName: [] as string[],
        user: {
            password: '',
            email: '',
            agree: false,
        } as UserT,
        lastUpdateForm: '2 Апреля 2022 в 23:15:12'
    };
    const date: string = actualDate()
    const action = setLastUpdateDate(date);

    const endState = formReducer(startState, action)


    expect(endState.lastUpdateForm).toBe(date);
});

test('uni should be set', () => {
    const startState: InitialStateFormReducerT = {
        name: 'Человек №3596941',
        status: 'Прежде чем действовать, надо понять',
        cities: cities as CitiesT[],
        unis: [] as getUniT[],
        arrayUniName: [] as string[],
        user: {
            password: '',
            email: '',
            agree: false,
        } as UserT,
        lastUpdateForm: '2 Апреля 2022 в 23:15:12'
    };
    const uniArr:getUniT[] = [
        {
        country: 'Russian',
        name: 'MGLU',
        web_pages: ['www.fake.com'],
        domains: ['localhost/3000'],
        alpha_two_code: '247500'
    },
        {
            country: 'Russia',
            name: 'BGAU',
            web_pages:['www.BGAU.com'],
            domains: ['localhost/3000'],
            alpha_two_code: '247547'
        }
    ]
    const action = getUni(uniArr);
    const endState = formReducer(startState, action)
    expect(endState.unis).toBe(uniArr.sort());
    expect(endState.unis.length).toBe(2);
});
