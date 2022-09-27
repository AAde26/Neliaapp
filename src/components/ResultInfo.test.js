import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ResultInfo from './ResultInfo';


export function renderWithRedux (
    ui,{ initialState , store = configureStore(pageReducer,  initialState) } = {}
 ){
    
    return{
    ...render(<Provider store={store}>{ui} 
     <ResultInfo/>
    </Provider>),store
    }
 }

 test("Please wait is loading should be render before display of results", () => {

});
 