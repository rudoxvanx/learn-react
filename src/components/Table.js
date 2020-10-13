import React,{Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class Table extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {characterData,removeCharacter} = this.props;
        return (
            <table>
                <TableHeader/>
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}/>
            </table>
        );
    }
}

