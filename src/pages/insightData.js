import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import jsonData from '../data/placementData.json';
import intern from '../data/internData.json';
import '../css/insightdata.css';

const InsightData = () => {
  const { slug } = useParams();
  const [placementdata, setPlacementdata] = useState(null); // Initialize as null

  useEffect(() => {
    if (slug.includes('placement')) {
      const placement = jsonData.pageProps.posts.find((p) => p.slug === slug);
      setPlacementdata(placement);
      console.log(placement);
    } else {
      const placement = intern.pageProps.posts.find((p) => p.slug === slug);
      setPlacementdata(placement);
      console.log(placement);
    }
  }, [slug]);

  const formatContent = (content) => {
    return content.split('\n').map((part, index) => {
      if (part.startsWith('## ')) {
        return <h1 key={index} className="content-heading">{part.slice(3)}</h1>;
      } else if (part.startsWith('- ')) {
        return <li key={index} className="content-list-item">{part.slice(2)}</li>;
      } else {
        return <p key={index} className="content-paragraph">{part}</p>;
      }
    });
  };

  // Conditional rendering to ensure placementdata is not null
  if (!placementdata) {
    return (
      <>
        <Navbar />
        <p>Loading...</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <p className="personTitle">{placementdata.meta?.title}</p>
      <p className="personDate">{placementdata.meta?.date}</p>
      <div className="content">{formatContent(placementdata.content)}</div>
      <Footer />
    </>
  );
};

export default InsightData;
