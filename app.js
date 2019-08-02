const players = [
    {
        name: "Ish",
        score: 50,
        id: 1
    },
    {
        name: "Nab",
        score: 85,
        id: 2
    },
    {
        name: "RJ",
        score: 95,
        id: 3
    },
    {
        name: "BJ",
        score: 0,
        id: 4
    }
]

const App = (props) => {
	return (
		<div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={ props.initialPlayers.length }
            />
			{/* Player List */}
            { props.initialPlayers.map( player => 
                <Player
                    name= { player.name }
                    key={ player.id.toString() }
                />
            )}
		</div>
	);
}

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}


const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    state = {
        score: 0
    }

    incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            };
        });
    }

    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            }
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ this.decrementScore }>-</button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={ this.incrementScore }>+</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
);
