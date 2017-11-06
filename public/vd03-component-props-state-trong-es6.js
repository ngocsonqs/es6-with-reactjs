
class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentNum : 10
        }
    }
    render() {
        return (
            <div>
                <p>{this.props.txt}</p>
                <p>Student Num : {this.state.studentNum}</p>
                <button>Delete</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Note txt="nodejs"/>,
    document.getElementById("root")
);
