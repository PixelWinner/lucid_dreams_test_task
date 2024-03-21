export type AutocompleteTag = {
    "name": string,
    "category": string,
    "value": string | number,
    "id": string
}

export type UniqueOption = { uuid: string } & AutocompleteTag