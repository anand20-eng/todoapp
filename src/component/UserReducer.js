
import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data"

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action)=> {
            const {id, name, email } = action.payload;
           let uu = state.find(item => item.id == id);
           if(uu) {
            uu.name = name;
            uu.email = email;
           }
        },
        deleteUser: (state, action) =>{
            let deleteItem = state.filter(item  =>  item.id !== action.payload)
            return deleteItem
        }

    }
})

export const { addUser,updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;