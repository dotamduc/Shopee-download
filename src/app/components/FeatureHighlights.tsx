import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    title: 'Shopee - Nơi sở hữu tất cả những sản phẩm bạn yêu thích.',
    description: 'Hàng triệu sản phẩm đa dạng từ thời trang, làm đẹp, điện tử, đồ gia dụng đến thực phẩm tươi sống. Mọi thứ bạn cần đều có tại Shopee với giá cả cạnh tranh nhất.',
    imageUrl: 'https://images.unsplash.com/photo-1706509511714-2a1e0f74321e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1vY2t1cCUyMGVjb21tZXJjZSUyMGFwcCUyMHNjcmVlbnxlbnwxfHx8fDE3NzYzOTU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageOnRight: true,
    bgColor: '#FFFFFF',
  },
  {
    title: 'Shopee - Mua và bán hàng trực tuyến',
    description: 'Dễ dàng mở shop và bán hàng online. Tham gia cùng hàng triệu người bán đã tin tưởng và phát triển kinh doanh thành công trên Shopee.',
    imageUrl: 'https://images.unsplash.com/photo-1768987439365-ffc51bf0f467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBzaG9wcGluZyUyMGludGVyZmFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NzYzOTU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageOnRight: false,
    bgColor: '#F5F5F5',
  },
  {
    title: 'Quà tặng khách hàng mới',
    description: 'Nhận ngay voucher và ưu đãi giảm giá độc quyền khi đăng ký tài khoản mới. Săn sale mỗi ngày với Flash Sale, Mã Giảm Giá, và Freeship Xtra.',
    imageUrl: 'https://images.unsplash.com/photo-1723705027411-9bfc3c99c2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwbGljYXRpb24lMjBkaXNwbGF5fGVufDF8fHx8MTc3NjM5NTY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    imageOnRight: true,
    bgColor: '#FFFFFF',
  },
];

export function FeatureHighlights() {
  return (
    <>
      {highlights.map((highlight, index) => (
        <section 
          key={index}
          className="w-full py-20"
          style={{ backgroundColor: highlight.bgColor }}
        >
          <div className="max-w-[1140px] mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${
              highlight.imageOnRight ? '' : 'md:grid-flow-dense'
            }`}>
              {/* Text Content */}
              <div className={`space-y-6 ${
                highlight.imageOnRight ? 'md:col-start-1' : 'md:col-start-2'
              }`}>
                <h2 
                  className="text-3xl md:text-4xl font-bold leading-tight"
                  style={{ color: '#333333' }}
                >
                  {highlight.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              {/* Phone Mockup */}
              <div className={`relative flex justify-center ${
                highlight.imageOnRight ? 'md:col-start-2' : 'md:col-start-1'
              }`}>
                <div className="relative w-full max-w-sm">
                  {/* Floating bubble effect */}
                  <div 
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
                    style={{ backgroundColor: '#EE4D2D' }}
                  ></div>
                  <div 
                    className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 blur-2xl"
                    style={{ backgroundColor: '#EE4D2D' }}
                  ></div>
                  
                  <ImageWithFallback
                    src={highlight.imageUrl}
                    alt={highlight.title}
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
