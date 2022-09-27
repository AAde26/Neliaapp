import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

function AlbumCard({ image, name, album, song }) {
return(
    <AlbumCardBody
        data-testid="album-card"
        border="dark"
        style={{ width: "240px" }}
        >
        <Card.Img variant="top" src={image} />
        <Card.Body>
            
        <Card.Title>{album}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Card.Title>{song}</Card.Title>
        </Card.Body>
    </AlbumCardBody>
)

}

export default AlbumCard;

const AlbumCardBody = styled(Card)`
border-radius: 10px;
cursor: pointer;
padding: 10px;
transition: transform 0.3s ease;

&:hover {
    transform: scale(0.95);

    --tw-shadow: 0 4px 6px -1px(0,0,0,0.1),
     0 2px  4px -1px rgba(0,0,0,0.06);
     box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
     var(--tw-ring-shadow,0 0 #0000), var(--tw-shadow);
}

.card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    webkit-box-orient: vertical;

}

.card-text{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
`