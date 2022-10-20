import { Layout, Progress } from 'antd';
import Accordion from '../../components/accordion/Accordion';
import CarouselAuto from '../../components/carousel/CarouselAuto';

import './Home.less';

const { Content } = Layout;

const Home = () => {
    return(
        <Content>
            <div className="site-layout-content">
                <CarouselAuto />
                <div className='progress-accordion'>
                    <Progress type="circle" percent={75} />
                    <Accordion />
                </div>
            </div>
        </Content>
    )
}

export default Home;