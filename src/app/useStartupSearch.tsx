import React from 'react';
import { useState, useEffect } from 'react';

export default function UseStartupSearch(pageNumber: number) {
    useEffect(() => {
        fetch("/src/app/api/startupGet", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            if(!response.ok){
                throw new Error("Error in response ok" + response);
            }
            else{
                return response.json();
            }
        }).then((startupData) => {
            console.log(startupData);
        }).catch((err) => {
            console.error(err);
        });
    }, [pageNumber]);
    return null;
}
