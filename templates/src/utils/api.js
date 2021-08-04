import { get, post } from './http';

export const getTime = (data) => {
    return get('/rest/api3.do', data)
}
