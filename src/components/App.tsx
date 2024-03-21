import React from 'react';
import styled from "styled-components";
import {Box} from "@mui/material";
import ComputedValue from "./ComputedValue";
import TagInput from "./TagInput";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;`


function App() {
    return (
        <Container>
            <ComputedValue/>
            <TagInput/>
        </Container>
    );
}

export default App;
