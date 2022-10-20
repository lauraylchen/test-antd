import { Carousel } from "antd";
import './CarouselAuto.less';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Landscape1 = require('../../assets/landscape1.jpg');
const Landscape2 = require('../../assets/landscape2.jpg');
const Landscape3 = require('../../assets/landscape3.jpg');
const Landscape4 = require('../../assets/landscape4.jpg');

const CarouselAuto = () => {
    return(
        <Carousel autoplay arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
            <div>
                <img className="carousel-image" src={Landscape1} alt="landscape" />
            </div>
            <div>
                <img className="carousel-image" src={Landscape2} alt="landscape" />
            </div>
            <div>
                <img className="carousel-image" src={Landscape3} alt="landscape" />
            </div>
            <div>
                <img className="carousel-image" src={Landscape4} alt="landscape" />
            </div>
        </Carousel>
    )
}

export default CarouselAuto;