import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ResultInfo from "./ResultInfo";
import AlbumCard from "./AlbumCard";
import { useSelector } from "react-redux";
import {v4 as uuid4} from "uuid";
import Pages from "./Pages";

function Albums(){
    const [isLoading, setIsLoading] = useState(false);
    const [albumArray, setAlbumArray] = useState([]);

    const artistName = useSelector((state) => state.albumSearch.input);
    const { currentPage } = useSelector((state) => state.page);

    //get album data when input changes
    useEffect(() => {
        const getAlbumData = async () => {
            setIsLoading(true);

         await fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then ((data) => setAlbumArray(data.results))
        .catch((error) => {
            console.error("Error fetching data", error);
        })
        .finally(() => {
            setIsLoading(false);
        });
   };
   if(artistName !== "") getAlbumData(); 
}, [artistName]);

return (
    <AlbumsBody>
        {isLoading ? (
            <ResultInfo isLoading = {isLoading} />
        ) : (
            <ResultInfo count= {albumArray.length} artist={artistName} />
        )}

        <section>
            {albumArray
            .slice((currentPage -1 ) * 10, (currentPage - 1) * 10 + 10)
            .map(({ artworkUrl100, artistName, collectionName }) => (
                <AlbumCard
                key={uuid4()}
                image={artworkUrl100}
                name={artistName}
                album={collectionName}
                />
            ))}
            </section>
            {albumArray.length !== 0 && (
                <Pages totalPages={Math.ceil(albumArray.length / 10)} />
            )}
            </AlbumsBody>
            )

            }
            
 export default Albums;

 const AlbumsBody = styled.main`
 background-color: #f1f3f2;
 padding: 80px 0;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 section{
    gap: 10px;
    margin: 20px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
 }

 @media (max-width: 900px) {
    section {
        display -: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }
 }
 
 `