import React, { useState, useEffect } from 'react';


import "./boardSquare.css"


const BoardSquare = ({ boardProcessMove, id, visited, legalMove, currentPos, row, col }) => {

    const [isVisited, setIsVisited] = useState(visited)
    const [isLegalMove, setIsLegalMove] = useState(legalMove)
    const [isCurrentPos, setIsCurrentPos] = useState(currentPos)

    useEffect(() => {
        setIsVisited(visited);
    }, [visited]);

    useEffect(() => {
        setIsLegalMove(legalMove);
    }, [legalMove]);

    useEffect(() => {
        setIsCurrentPos(currentPos);
    }, [currentPos]);

    const makeMove = (e) => {
        //setIsVisited(true);
        console.log("Making move: ", row, col);
        if (isLegalMove)
        {
            console.log("LEGAL MOVE");
            boardProcessMove(id, row, col);
        }
        // Make the clicked on square display the queen.
        // Display the proper available moves in a new color
    }

    let squareClass = 'square';

    if (isVisited)
    {
        if(isCurrentPos)
        {
            squareClass = 'squareCurrentPos'
        }
        else
        {
            squareClass = 'squareVisited';
        }
    }
    else if(isLegalMove)
    {
        squareClass = 'squareLegalMove';
    }

    return (
        <div className={squareClass} onClick={(e) => makeMove(e)}>
            <p>
                {id}
            </p>
        </div>
    );
}
export default BoardSquare;