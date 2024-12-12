import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data"
const userSlice = createSlice({
    name: "users",
    initialState: {
        userList,
        cardInfo:[]
    },
    reducers: {
        addCard: (state, action) => {
            state.cardInfo.push(action.payload)
        },
        removeCard: (state, action) => {
            const removeCard =  state.cardInfo.filter((el) => el.id !== action.payload);
            state.cardInfo = removeCard;
            
        }
        // updateUser: (state, action) => {
        //     const { id, name, email } = action.payload;
        //     let uu = state.find(item => item.id == id);
        //     if (uu) {
        //         uu.name = name;
        //         uu.email = email;
        //     }
        // },
        // deleteUser: (state, action) => {
        //     let deleteItem = state.filter(item => item.id !== action.payload)
        //     return deleteItem
        // }

    }
})

export const { addCard, removeCard } = userSlice.actions;
//   export const { getCardData } = userSlice.actions;
export default userSlice.reducer;