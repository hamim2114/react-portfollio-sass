import { useEffect, useState } from 'react';
import { contentPortfolio, designPortfolio, featuredPortfolio, list, mobilePortfolio, webPortfolio } from '../../data/data';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'

const Portfolio = () => {
    const [selected, setSelected] = useState('featured')
    const [data, setdata] = useState([])

    useEffect(() => {
        switch(selected){
            case 'featured':
                setdata(featuredPortfolio);
            break;
            case 'web':
                setdata(webPortfolio);
            break;
            case 'mobile':
                setdata(mobilePortfolio);
            break;
            case 'design':
                setdata(designPortfolio);
            break;
            case 'content':
                setdata(contentPortfolio);
            break;
        }
    },[selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    title={item.title}
                    key={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                )) }
                
            </div>
        </div>
    );
};

export default Portfolio;