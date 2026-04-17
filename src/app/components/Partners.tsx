import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const partners = [
  { name: "L'Oréal", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/L%27Or%C3%A9al_logo.svg" },
  { name: 'Coca Cola', logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
  { name: 'Samsung', logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: 'Xiaomi', logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
  { name: 'Unilever', logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Unilever.svg" },
  { name: 'Nestlé', logo: "https://upload.wikimedia.org/wikipedia/en/d/d8/Nestl%C3%A9.svg" },
  { name: 'P&G', logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Procter_%26_Gamble_logo.svg" },
  { name: 'Nike', logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
];

export function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto" style={{ color: '#333333' }}>
            Tận hưởng cảm giác mua sắm tuyệt vời với những sản phẩm chất lượng đến từ các Shop bán hàng uy tín
          </h2>
        </div>

        {/* Partner Logos Carousel */}
        <div className="partner-slider">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-4">
                <div className="flex items-center justify-center h-24 bg-white rounded-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .partner-slider .slick-track {
          display: flex !important;
          align-items: center;
        }
        
        .partner-slider .slick-slide {
          height: inherit !important;
        }
        
        .partner-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}
