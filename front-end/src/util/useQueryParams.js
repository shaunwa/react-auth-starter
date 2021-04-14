/*
    This is just a nice custom hook that we can
    use to get all the query parameters from inside
    our components. Don't worry about the details
    unless you're curious :)
*/

import { useLocation } from 'react-router-dom';

const pairs = arr => arr.reduce((acc, x, i) => {
    if (i % 2 === 0) {
        return [...acc, [x]];
    } else {
        const last = acc[acc.length - 1];
        const everythingElse = acc.slice(0, acc.length - 1);
        return [...everythingElse, [...last, x]];
    }
}, [])[0] || [];

const fold = arr => pairs(arr).reduce((acc, pair) => {
    return {
        ...acc,
        [pair[0]]: pair[1],
    }
}, {});

export const useQueryParams = () => {
    const location = useLocation();
    const currentParamsObj = new URLSearchParams(location.search);
    const params = fold([...currentParamsObj.entries()]);

    return params;
}