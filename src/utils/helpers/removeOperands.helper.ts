export const removeOperands = (value: string): string => {
    return value.replace(/[+\-*/^() ]/g, '')
}