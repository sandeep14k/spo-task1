import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/insights.css'
import jsonData from '../data/placementData.json';
import inter from '../data/internData.json'
import { Link } from 'react-router-dom';

import { useState,useEffect } from 'react';


const Placement = () => {
  const [placementdata, setPlacementdata] = useState([]);
  const [interndata,setInterndata]=useState([]);

  useEffect(() => {
      setPlacementdata(jsonData.pageProps.posts)
      setInterndata(inter.pageProps.posts)
  }, []);

  console.log(placementdata)
  return(
  <div>
    <Navbar />
    <div className="header">
      <p className="headerTitle">SPO Insights</p>
    </div>
    <div className="placementIns">
      <p className="placementInsTitle"> 2023 Placement Insight </p>
      {placementdata.map((placement, index) => (
        <div key={index} className="placement">
          <Link className='link' to={`/insights/${placement.slug}`}>
          <p className='date'>{placement.meta.date}</p>
          <p className='title'>{placement.meta.title}</p>
          </Link>
        </div>
      ))}
    </div>
    <div className="internIns">
      <p className="placementInsTitle"> 2023 Internship Insight </p>
      {interndata.map((placement, index) => (
        <div key={index} className="placement">
          <Link className='link' to={`/insights/${placement.slug}`}>
          <p className='date'>{placement.meta.date}</p>
          <p className='title'>{placement.meta.title}</p>
          </Link>
        </div>
      ))}
    </div>
    <Footer />
  </div>
);
}

export default Placement;
