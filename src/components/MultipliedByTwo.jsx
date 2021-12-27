import React from 'react'
import { useSelector } from 'react-redux'

function MultipliedByTwo() {
    const count = useSelector((state) => state.count.value)

    return (
        <p>
            MultipliedByTwo: { count * 2 }
        </p>
    )
}

export default MultipliedByTwo
