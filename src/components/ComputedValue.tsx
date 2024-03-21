import React from 'react';
import {Typography} from "@mui/material";
import {useInputStore} from "../store/inputStore";

const ComputedValue = () => {
    const {computedValue, isError} = useInputStore((state) => state);

    return <Typography variant="h6">Value: {isError ? "Error" : (computedValue ?? 0)}</Typography>
};

export default ComputedValue;