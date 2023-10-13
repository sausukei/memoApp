import React from "react";
import {render} from "react-dom";

import "../memo.json";

class JSONRender extends React.Component{
    constructor() {
        super();
        this.state = {title: ""};
    }

    titleList(list) {
        const titleList = list.map((title, index) => {
            <li>
                {title.name}
            </li>
        });

        return <ul>{titleList}</ul>;
    }

    render() {
        console.log(this.state.title);
        return (
            <div>
                <button onClick={this.getJson}>Get Json </button>
                {this.titleList(this.state.title)}
            </div>
        );
    }

    getJson = () => {
        const url = "../memo.json"
        console.log(url);


    }
}