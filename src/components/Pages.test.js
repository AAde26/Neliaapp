import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Pages from './Pages';



function edux (
    ui,{ initialState , store = configureStore(pageReducer,  initialState) } = {}
 ){
    
    return{
    ...render(<Provider store={store}>{ui} 
     renderWithRedux{<Pages/>}
    </Provider>),store
    }
 }

test("Current page should be render", () => {

});
 
