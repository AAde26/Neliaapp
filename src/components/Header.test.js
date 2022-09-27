import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './Header';


function renderWithRedux (
    ui,{ initialState , store = configureStore(pageReducer,  initialState) } = {}
 ){
    
    return{
    ...renderWithRedux(render)(<Provider store={store}>{ui} 
     <Header/>
    </Provider>),store
    }
 }

 test("placeholder text should  be render  ", () => {
    
});
