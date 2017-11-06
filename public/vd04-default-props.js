class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNum : 10
        }
    }

    addNewPage() {
        this.setState({
            pageNum : this.state.pageNum + 1
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.txt}</p>
                <p>{this.state.pageNum}</p>
                <button onClick = { this.addNewPage.bind(this)}>Add New Page</button>
            </div>
        );
    }
}

Note.defaultProps = {
    txt : "Javascript"
}

ReactDOM.render(
    <div>
        <Note/>
        <Note txt = "nodejs"/>
    </div>,
    document.getElementById("root")
);
