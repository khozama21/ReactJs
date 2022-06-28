import React from "react";

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            in: '',
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(usersList => {
                this.setState({ users: usersList });
            });
    }
    handlechange = (e) => {
        this.setState({ in: e.target.value })
    }

    render() {
        return (

            <div>
                <input type="text" id="search" placeholder='Search' onChange={this.handlechange}/>


                {
                    this.state.users.filter((name) => name.name.toLowerCase().includes(this.state.in)).map((user) => (
                        <div>
                            
                            <p>{user.name}</p>
                        </div>
                    ))
                }

            </div>

        )
    }
}

export default Api;

