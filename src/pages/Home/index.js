import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
    useEffect(() => {
        axios.get('/users').then((data) => {
            console.log(data, '||||||||||||||||||++++++================')
        })
    }, [])

    return <>
    <div>Home</div>
    </>
}
