import { Pagination } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import{useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4} from "uuid";
import { setCurrentPage } from "../redux/pageSlice";


const Pages = ({ totalPages }) => {
    const { currentPage } = useSelector((state) => state.page);
    const dispatch = useDispatch();

    return(
        <PaginationContainer>
            {Array(10)
            .fill()
            .map((_, i) => (
                <Pagination.Item
                key={uuidv4()}
                active={i + 1 === currentPage}
                onClick={()=> {
                dispatch(setCurrentPage(i + 1));
                }}
             >
             {i + 1}
             </Pagination.Item>
            ))}
        </PaginationContainer>
    );
  };

  export default Pages;

  const PaginationContainer = styled(Pagination)`
 a {
    color: #6893a6;
 }
 .page-item.active .page-link {
    background-color: #6893a6;
    border-color: #6893a6;
 }
  `
  ;