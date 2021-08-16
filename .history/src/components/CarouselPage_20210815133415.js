import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselPage extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(<div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://unsplash.com/photos/yC-Yzbqy7PY"
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