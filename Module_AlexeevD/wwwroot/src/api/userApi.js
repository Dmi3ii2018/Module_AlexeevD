export const getUser = () => {
    return api.get(`/Get/:Login`)
        .then((response) => {
            dispatch(ActionCreator.loadFilms(response.data));
        });
}