export default class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            img: null
        }
        console.log('Constructor child')
    }
    async componentDidMount() {
        this.timer = setInterval(() => console.log('setTimer'), 1000)
        const response = await fetch('https://api.github.com/users/mitaly');
        const data  = await response.json();
        // console.log('Json response', JSON.stringify(data));
        this.setState({
            name: data.login,
            img: data.avatar_url
        })
        console.log('componentDidMoutn child')
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log("render child")
        return (
        <>
            <h2>Creators: {this.state?.name}</h2>
            <img src={this.state?.img} />
        </>);
    }
}