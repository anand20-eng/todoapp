import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data"
import { card_Info } from "./Card/cardInfo";
const userSlice = createSlice({
    name: "users",
    initialState: {
        userList,
        card_Info: [],
    },
    reducers: {
        addCard: (state, action) => {
            state.card_Info.push(action.payload)
        },
        addUser: (state, action) => {
           
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            let uu = state.find(item => item.id == id);
            if (uu) {
                uu.name = name;
                uu.email = email;
            }
        },
        deleteUser: (state, action) => {
            let deleteItem = state.filter(item => item.id !== action.payload)
            return deleteItem
        }

    }
})

export const { addUser, updateUser, deleteUser, addCard } = userSlice.actions;
//   export const { getCardData } = userSlice.actions;
export default userSlice.reducer;