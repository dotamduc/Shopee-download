import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroBanner() {
  return (
    <section 
      className="w-full py-20 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #EE4D2D 0%, #F05D40 100%)'
      }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Khám phá Shopee!
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-95">
              Ứng dụng mua sắm trực tuyến hàng đầu Việt Nam.
            </p>
            <p className="text-lg opacity-90">
              Tải ứng dụng ngay!
            </p>

            {/* Windows Download Button */}
            <div className="pt-4">
              <a 
                href="/downloads/ShopeeSetup.exe"
                download="ShopeeSetup.exe"
                className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl group cursor-pointer"
              >
                {/* Windows Logo - 4 squares */}
                <div className="flex flex-wrap w-10 h-10 gap-1">
                  <div className="w-[18px] h-[18px] bg-white"></div>
                  <div className="w-[18px] h-[18px] bg-white"></div>
                  <div className="w-[18px] h-[18px] bg-white"></div>
                  <div className="w-[18px] h-[18px] bg-white"></div>
                </div>

                {/* Text */}
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-2xl font-semibold -mt-1">Windows</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576696335217-482d57896658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwaGFuZCUyMHNob3BwaW5nJTIwYXBwJTIwb3JhbmdlfGVufDF8fHx8MTc3NjM5NTY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Shopee App on Phone"
                className="w-full h-auto drop-shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}