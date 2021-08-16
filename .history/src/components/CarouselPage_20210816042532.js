import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

export default class CarouselPage extends Component {
    constructor(){
        super();
        this.state = {
            itemsList : [],
            pageCount : 1
        }
        this.getItemsList();
    }

    getItemsList=async()=>{
        try{
            const response = await axios.get('https://picsum.photos/v2/list?page='+this.state.pageCount+'&limit=5');
            console.log(response.data);
            if(response.data != null && response.data.length > 0){
                this.setState({itemsList : response.data});
            }
        }catch(error){
            console.log(error);
        }
    }

    render(){
        console.log(this.state.itemsList);
        return(<div>
            <Carousel style={{width:'50%',height:'50%',margin:'5% auto'}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/id/0/5616/3744"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>);
    }
}