import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expSelected: ''
}

const experienceSelectedSlice = createSlice({
    name: 'experienceSelected',
    initialState,
    reducers: {
        selectAnExperience: (state, action) => {
            state.expSelected = action.payload
        }
    }
})


export const experienceToEdit = state => state.experienceSelectedState.expSelected
export const {selectAnExperience} = experienceSelectedSlice.actions
export default experienceSelectedSlice.reducer

