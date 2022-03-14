import React from 'react';
import BoardSquare from "./boardSquare"
import { useState, useEffect} from 'react';
import "./board.css"

const NUM_ROWS = 7;
const NUM_COLS = 7;

const initialVistitedState = Array(NUM_ROWS).fill().map(()=>Array(NUM_COLS).fill(false));
const initialMoves = Array(NUM_ROWS).fill().map(()=>Array(NUM_COLS).fill(true));




const Board = () => {
    const [visited, setVisited] = useState(initialVistitedState);
    const [legalMoves, setLegalMoves] = useState(initialMoves);
    const [whiteLocation, setWhiteLocation] = useState();
    const [numMovesAvail, setNumMovesAvail] = useState(49);

    // useEffect(() => {
    //     setVisited(visited);
    // }, [visited]);

    const moveInBoard = (r, c) => {
        if (r>=NUM_ROWS || r<0 ||c>=NUM_COLS ||c<0)
        {
            return false;
        }
        return true;
    }
    
    const boardProcessMove = (id, r, c) => {
        const newVisited = visited;
        newVisited[r][c] = true;
        setVisited(newVisited);
        setWhiteLocation([r,c]);
        
        for(let j=0; j<newVisited.length; j++)
        {

            console.log(newVisited[j]);
            for(let k=0; k<newVisited[0].length; k++)
            {
            }
        }
        console.log(newVisited.toString());
        const directions = [[-1, -1], [-1, 0], [-1, 1],[0, -1], [0, 1],[1, -1], [1, 0], [1, 1]];

        let moves = Array(NUM_ROWS).fill().map(()=>Array(NUM_COLS).fill(false));
        let numMovesLeft = 0;
        console.log("moves before:");
        for(let j=0; j<moves.length; j++)
        {
            console.log(moves[j]);
        }
        for (let i=0; i<directions.length; i++) 
        {
            for (let dist=1; dist < NUM_ROWS; dist++)
            {
                let row = directions[i][0] * dist + r;
                let col = directions[i][1] * dist + c;
                console.log(row,col);
                
                if (!moveInBoard(row, col))
                {
                    break;
                } 
                else if(visited[row][col])
                {
                    break;
                }
                else if (moves[row][col])
                {
                }
                else
                {
                    moves[row][col]=true;
                    numMovesLeft += 1
                }
            }
        }
        setLegalMoves(moves);
        setNumMovesAvail(numMovesLeft);

        console.log("moves");
        for(let j=0; j<moves.length; j++)
        {
            console.log(moves[j]);
        }
        console.log("visited");
        for(let j=0; j<visited.length; j++)
        {
            console.log(visited[j]);
        }
        // Make the clicked on square display the queen.
        // Display the proper available moves in a new color
    }

    let board = []; 
    let currentPos = false;

    for (let row = 0; row<NUM_ROWS; row++) {
        for (let col = 0; col<NUM_COLS; col++) {
            const key_val = 10*row+col;
            console.log(whiteLocation, row, col);
            if(whiteLocation)
            {
                if (row === whiteLocation[0] && col === whiteLocation[1]) {
                    console.log("currentPos", row, col);
                    currentPos = true;
                }
                else{
                    console.log("Not CurrentPos");
                    currentPos = false;
                }
            }
            
            board.push(<BoardSquare key={key_val} boardProcessMove={boardProcessMove} id={key_val} visited={visited[row][col]} legalMove={legalMoves[row][col]} currentPos={currentPos} row={row} col={col}/>)
        }
    }

    return (
        <div className= {numMovesAvail!==0 ? "board" : 'gameOver'}>
            {numMovesAvail!==0 ? board : <h2 className='gameOver'>GAME OVER</h2>}

        </div>
    );
}
  
 export default Board;