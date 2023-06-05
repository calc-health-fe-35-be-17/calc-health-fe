import axios from "axios"

export const START_FETCHING = "START_FETCHING"
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA"

const startFetching = () => {
    return{
        type : START_FETCHING,
    }
}

const successGetData = (payload) => {
    return{
        type : SUCCESS_GET_DATA,
        payload
    }
}

export const getDataUser = () => {
    return async (dispatch) => {
        dispatch(startFetching())

        // sementara
        const url = "https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/data-user"
        const result = await axios(url)

        dispatch(successGetData(result.data))
    }
}

export const addData = (newData) => async (dispatch) => {
    // sementara
    const url = "https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/data-user"
    await axios.post(url, newData)

    dispatch(getDataUser())
}