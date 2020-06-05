export const createFilterData = (filterData) => {
    return Object.values(filterData).map(i => ({ text: i, value: i }));
}