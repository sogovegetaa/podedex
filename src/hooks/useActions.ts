import { useDispatch } from "react-redux"
import { bindActionCreators } from '@reduxjs/toolkit'
import { setPostId } from "../utils/postSlice"

const allActions = {
    setPostId
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}