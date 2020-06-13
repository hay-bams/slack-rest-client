import React, { useContext } from 'react'
import { AppContext } from 'components/AppProvider'

export const useGlobalState = () => {
    const [state, setState] =  useContext(AppContext)
    return  [state, setState]
}