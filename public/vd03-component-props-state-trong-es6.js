
class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentNum : 10
        }

        // cach 3 :
        this.addNewStudent = this.addNewStudent.bind(this)
    }

    addNewStudent() {
        this.setState({
            studentNum : this.state.studentNum + 1
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.txt}</p>
                <p>Student Num : {this.state.studentNum}</p>
                <button>Delete</button>
                <button onClick ={ () => {
                    this.setState({studentNum : this.state.studentNum + 1})
                }}>Add student - Cach 1</button>

                <button onClick = { this.addNewStudent.bind(this)}>Add student - Cach 2</button>
                <button onClick = { this.addNewStudent }>Add student - Cach 3</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Note txt="nodejs"/>,
    document.getElementById("root")
);
