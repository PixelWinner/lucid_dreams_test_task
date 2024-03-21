import React, {useCallback, useEffect} from 'react';
import {Autocomplete, Chip, TextField} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {ENDPOINTS} from "../api/endpoints";

import {QueryClientInstance} from "../api/api";
import {AutocompleteTag, UniqueOption} from "../utils/types/common.types";
import {AutocompleteRenderGetTagProps} from "@mui/material/Autocomplete/Autocomplete";
import {removeOperands} from "../utils/helpers/removeOperands.helper";
import {useInputStore} from "../store/inputStore";
import {OPERAND_OPTIONS} from "../utils/constants/common.constants";
import {v4 as uuidv4} from "uuid"

const TagInput = () => {
    const {inputValue, selectedOptions, setInputValue, setSelectedOptions, setIsError, setComputedValue} = useInputStore(store => store)
    const queryValue = removeOperands(inputValue)

    const {data, isLoading, isError} = useQuery({
        queryKey: ["autocomplete"],
        queryFn: ({signal}) => ENDPOINTS.getAutocomplete(queryValue, signal),
        enabled: !!queryValue
    });

    const options: UniqueOption[] = [...OPERAND_OPTIONS, ...(data ?? [])].map((option) => ({...option, uuid: uuidv4()}));

    useEffect(() => {
        const expression = selectedOptions.map(option =>
            typeof option === 'string' ? option : option.value
        ).join('');
console.log(expression)

        try {
            const result = eval(expression);
            setComputedValue(result)
            setIsError(false)
        } catch (e) {
            setIsError(true)
        }
    }, [selectedOptions, setComputedValue, setIsError]);

    useEffect(() => {
        QueryClientInstance.invalidateQueries({queryKey: ["autocomplete"]});
    }, [inputValue]);

    const handleChange = (_: unknown, newValue: (string | UniqueOption)[]) => {
        setSelectedOptions(newValue);
    };

    const handleInputChange = (_: unknown, newInputValue: string) => {
        setInputValue(newInputValue);
    }

    const renderOptionLabel = useCallback((option: string | AutocompleteTag) => {
        if (typeof option === "string") return option;
        return option.name;
    }, []);

    const renderTags = (tagValue: (string | AutocompleteTag)[], getTagProps: AutocompleteRenderGetTagProps) =>
        tagValue.map((option, index) => (
            <Chip variant="outlined" label={renderOptionLabel(option)} {...getTagProps({index})} />
        ));

    const noOptionsText = isLoading ? "Loading..." : "No matches";

    return (
        <Autocomplete
            sx={{minWidth: "600px"}}
            multiple
            freeSolo
            value={selectedOptions}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onChange={handleChange}
            getOptionLabel={renderOptionLabel}
            options={options}
            renderTags={renderTags}
            filterOptions={(x) => x}
            renderInput={(params) => <TextField {...params} label="Formula" error={isError}/>}
            noOptionsText={noOptionsText}
        />
    );
};

export default TagInput;
