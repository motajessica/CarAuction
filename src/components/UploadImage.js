import React from 'react';
import { useState, useEffect } from 'react';


function UploadImage() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <div className="container mb-2 text-center">
      <>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        { imageURLs.map(imageSrc => <img src={imageSrc} alt="..."/>) }
      
      </>
    </div>
  );
}

export default UploadImage;