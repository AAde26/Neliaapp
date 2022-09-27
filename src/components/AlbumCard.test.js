import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import AlbumCard from "./AlbumCard"
import { configureStore } from '@reduxjs/toolkit';



export function renderWithRedux (
    ui,{ initialState , store = configureStore(pageReducer,  initialState) } = {}
 ){
    
    return{
    ...render(<Provider store={store}>{ui} 
     <AlbumCard/>
    </Provider>),store
    }
 }
 test("should render image of Artist", () => {

});