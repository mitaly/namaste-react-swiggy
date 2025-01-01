import { Outlet } from "react-router"
import ProfileClass from "./ProfileClass"

export default class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor parent')
    }
    async componentDidMount() {

        const response = await fetch('https://api.github.com/users/mitaly');
        const data  = await response.json();
        // console.log('Json response', JSON.stringify(data));
        this.setState({
            name: data.login,
            img: data.avatar_url
        })
        console.log('componentDidMount parent')
    }
    render() {
        console.log('render parent')
        return (
            <>
                <h2>About us !!</h2>
                <ProfileClass name="mitaly" />
                {/* <ProfileClass name="shubham" /> */}
            </>
        );
    }
}