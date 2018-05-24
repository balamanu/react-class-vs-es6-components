import React, {Component} from 'react';
import User from './User';
class Users extends Component{

    state = {
        users:[
            {name:"Bala",age:20},
            {name:"Krishna",age:22},
            {name:"Manukonda",age:23}
        ],
        title:"Users List"
    }
    makeMeYounger = () =>{
        /*this.setState({
            users:[
                {name:"Bala",age:10},
                {name:"Krishna",age:12},
                {name:"Manukonda",age:13}
            ]   
        })
        console.log(this.state.users);*/
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age -=10;
            return tempUser;
        });
        this.setState({newState});
    }
    render(){
    return (
    <div>
        <button onClick={this.makeMeYounger}>Make Us 10 years younger</button>
        <br/>
        <h1>{this.state.title}</h1>
        {
            this.state.users.map((user)=>{
                return <User age={user.age}>{user.name}</User>
            })

        }
    </div>
        );
    }
}
export default Users;