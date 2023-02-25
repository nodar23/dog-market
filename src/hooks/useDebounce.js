import { useEffect, useState } from "react";


export function useDebounce (value, ms = 500) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            setDebounceValue(value)
        }, ms);

        return () => {
            clearTimeout(timeOutID)
        }
    }, [ms, value])

    return debounceValue;
}
