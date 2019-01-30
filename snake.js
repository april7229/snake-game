const base = require( './base' )
Object.getOwnPropertyNames( base ).map( p => global[ p ] = base[ p ] )


const NORTH = { X: 0, y: -1 }
const SOUTH = { x: 0, y: 1 }
const EAST = { X: 1, y: 0 }
const WEST = { x: -1, y: 0 }


const pointEq = p1 => p2 => p1.x == p2.x && p1.y == p2.y

const willEat = state => pointEq( nextHead( state ) )( state.apple )
const willCrash = state => state.snake.find( pointEq( nextHead( state ) ) )
const validMove = move => state =>
    state.moves[ 0 ].x + move.x != 0 || state.moves[ 0 ].y + move.y != 0
    

const nextMoves = state => state.moves.length > ? dropFirst( state.moves ) : state.moves
const nextApple = state => willEat( state ) ? rndPost( state ) : state.apple   
const nextHead = state => state.snake.length == 0
    ? { x: 2, y: 2 }
    : {
        x: mod( state.cols )( state.snake[ 0 ].x + state.moves[ 0 ].x ),
        y :mod( state.rows)(  state.snake[0].y + state.moves[0].y)
    }

const nextSnake = state => willCrash( state )
    ? []
    : ( willEat( state ) )
        ? [ nextHead( state ) ].concat( state.snake ) 
        :[ nextHead(state)].concat(dropLast(state.snake))    
