import React from 'react';
import regsitersidepic from '../pages/registersidepic.jpg';

const Bootcamp = () => {
  // Dummy data containing image URLs and associated text and links
  const imagesData = [
    {
      imageUrl: regsitersidepic,
      text: 'this is pic1',
      link: 'https://example.com/page1'
    },
    {
      imageUrl: regsitersidepic,
      text: 'this is pic2',
      link: 'https://example.com/page2'
    },
    {
        imageUrl: regsitersidepic,
        text: 'this is pic1',
        link: 'https://example.com/page1'
      },
      {
        imageUrl: regsitersidepic,
        text: 'this is pic2',
        link: 'https://example.com/page2'
      },
      {
        imageUrl: regsitersidepic,
        text: 'this is pic1',
        link: 'https://example.com/page1'
      },
      {
        imageUrl: regsitersidepic,
        text: 'this is pic2',
        link: 'https://example.com/page2'
      },
      {
        imageUrl: regsitersidepic,
        text: 'this is pic1',
        link: 'https://example.com/page1'
      },
      {
        imageUrl: regsitersidepic,
        text: 'this is pic2',
        link: 'https://example.com/page2'
      },
    // Add more images as needed
  ];

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <div className="image-container">
        {imagesData.map((data, index) => (
          <div key={index} className="image-wrapper" onClick={() => handleImageClick(data.link)}>
            <img src={data.imageUrl} alt={`Image`} />
            <p className="image-text">{data.text}</p>
            <a className="image-link" href={data.link} target="_blank" rel="noopener noreferrer"></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootcamp;
