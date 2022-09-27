import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Albums from './Albums';



export function renderWithRedux (
    ui,{ initialState , store = configureStore(pageReducer,  initialState) } = {}
    
 ){
 
    return{
    ...render(<Provider store={store}>{ui} 
     <Albums/>
    </Provider>),store
    }
 
 }

 test("artist search should be loaded  ", () => {

});