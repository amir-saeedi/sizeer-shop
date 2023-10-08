'use client'
import React, { useEffect } from 'react'

function error({ error }) {
    useEffect(() => {
        console.log(error.message)
    }, [error])
    return (
        <div>error in here {error.message} </div>
    )
}

export default error
