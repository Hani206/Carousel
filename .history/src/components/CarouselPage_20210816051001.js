import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

export default class CarouselPage extends Component {
    constructor(){
        super();
        this.state = {
            itemsList : [],
            pageCount : 1,
            index : 0
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

    handleSelect = (selectedIndex, e) => {
       console.log('handleSelect',selectedIndex);
       this.setState({index : selectedIndex});
       if(selectedIndex === 4){
           this.setState({pageCount : this.state.pageCount+1,index:0},()=>this.getItemsList());
       }
    };

    // handleSlide = (selectedIndex, e) => {
    //     console.log('handleSlide',selectedIndex);
    //    this.setState({index : selectedIndex});
    // };

    // handleSlid = (selectedIndex, e) => {
    //     console.log('handleSlid',selectedIndex);
    //    this.setState({index : selectedIndex});
    // };

    render(){
        console.log(this.state.itemsList);
        return(<div>
            <Carousel style={{width:'50%',height:'50%',margin:'5% auto'}} 
                activeIndex={this.state.index} 
                onSelect={this.handleSelect}
                onSlide = {this.handleSelect}
                onSlid = {this.handlhandleSelecteSlid}
                key={this.state.pageCount}
            >
                {this.state.itemsList != null && this.state.itemsList.length > 0 ? 
                    this.state.itemsList.map((item,i)=>{
                        return( <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100" style={{height:'500px'}}
                                src={item.download_url}
                                alt={item.author}
                            />
                            <Carousel.Caption>
                                <h3>Page : {this.state.pageCount}</h3>
                                <p>Active Index : {this.state.index+1}</p>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })
                :
                   <Spinner animation="border" />
                }
            </Carousel>
        </div>);
    }
}