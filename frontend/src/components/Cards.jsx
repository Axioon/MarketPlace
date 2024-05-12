import React from 'react';

const Cards = () => {
  // Lista de imágenes de publicidad falsas
  const fakeAds = [
    "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-07/igd-promo-visual-16x9-original.jpg.rendition.intel.web.864.486.jpg",
    "https://assets.pcfactory.cl/public/foto/42785/5_1000.jpg?t=1706704698174",
    "https://es.aorus.com/upload/Admin/images/%5BES%5D-AM5-launch-party-1920px_02(1).jpg",
    // Agrega más imágenes según sea necesario
  ];

  return (
    <>
      <div className="container mx-auto py-8 bg-cover bg-center">
       
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-8">
          {fakeAds.map((ad, index) => (
            <div key={`ad_${index}`} className="bg-white rounded-lg shadow-lg p-6">
              <img src={ad} alt={`Ad ${index}`} className="mx-auto mb-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
