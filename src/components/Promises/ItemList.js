import { useEffect, useState } from "react";
//import { Item } from "react";

const products = ({productos}) => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState("false");
    const [isLoading, setIsLoading] = useState("true");
    const [isFinished, setIsFinished] = useState("false");
    const [currentProducts, setCurrentProducts] = useState({});
}

useEffect (() => {
    if (productos) {
        products(
            productos,
            setMessage,
            setIsSuccess,
            setIsLoading,
            setIsFinished,
            setCurrentProducts
        );
    }
}, [productos]);