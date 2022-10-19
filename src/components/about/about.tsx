import { Component } from "react";


type Props = {};

type State = {
  content: string;
}


class About extends Component<Props, State>{
    constructor(props: Props){
        super(props);

        this.state = {content: ""};
    };
    
}