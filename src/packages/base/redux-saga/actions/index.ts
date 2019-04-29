let count = 0;

export const addCount = ()  => ({
    type: 'ADD_COUNT',
    count: count++
});

export const removeCount = ()  => ({
    type: 'REMOVE_COUNT',
    count: count--,
});

// export const revertCount = ()  => ({
//     type: 'REMOVE_COUNT',
//     count: 0,
// });
