import { Component } from "react";



export class BodyComponent extends Component{
    render(){
        return (
            <><h2> Welcome</h2>
            <form>
                <input type="radio" name="uname" id="name1" value="Rajesh" />
                <label>Rajesh</label>
                <input type="radio" name="uname" id="name2" value="Girish" />
                <label>Girish</label>
            </form>
            
            </>
            
        );
    }
}
export default BodyComponent;