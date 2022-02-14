import React, {Component} from 'react';
import './Sobre.css';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

export default function Sobre () {
    
    return(

        class featuredText extends Component {

            constructor(props){
                super(props);
                this.state = {
                    isToggleOn: false
                }
                this.play = this.play.bind(this);
            }
    
            play(){
                //Change the state
                this.setState(state =>({
                    isToggleOn: !state.isToggleOn
                }));
            }
    
            render(){
                return(
                    <div className='featuredText'>
                                <button className='featuredButtons1' onClick={this.play}>{this.state.isToggleOn ? <PlaylistAddIcon/> : <PlaylistAddCheckIcon/>} </button>
                                {/*<a href={`/list/add/${item.id}`} className='featuredButtons1' onClick={this.play}><PlaylistAddIcon/></a>*/}
                    </div>
                )
            }
        }

    );
}
