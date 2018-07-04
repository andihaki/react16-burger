// ini kepake supaya ga perlu lagi pake spread operator (...) di reducer
export const updateObject = (oldObject, updatedObject) => {
    return {
        ...oldObject,
        ...updatedObject,
    };
};