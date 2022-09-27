
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from "./App";



export function renderWithRedux (
    ui,{ initialState , store = configureStore(pageReducer,  initialState) } = {}
 ){
    
    return{
    ...render(<Provider store={store}>{ui} 
     <App/>
    </Provider>),store
    }
 }

test("should render App without crashing", () => {

});
 
