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

        const url = "https://calc-health-be.up.railway.app/users"
        const result = await axios(url)

        dispatch(successGetData(result.data))
    }
}

export const addData = (newData) => async (dispatch) => {
    const url = "https://calc-health-be.up.railway.app/auth/register"
    await axios.post(url, newData)

    dispatch(getDataUser())
}