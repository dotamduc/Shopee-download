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

            {/* Download Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="/downloads/ShopeeSetup.exe"
                download="ShopeeSetup.exe"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl group cursor-pointer w-auto"
              >
                {/* Windows Logo - 4 squares */}
                <div className="flex flex-wrap w-8 h-8 gap-1 items-center justify-center">
                  <div className="w-[14px] h-[14px] bg-white"></div>
                  <div className="w-[14px] h-[14px] bg-white"></div>
                  <div className="w-[14px] h-[14px] bg-white"></div>
                  <div className="w-[14px] h-[14px] bg-white"></div>
                </div>
                {/* Text */}
                <div className="text-left">
                  <div className="text-[11px] opacity-80 leading-tight">Download on the</div>
                  <div className="text-xl font-semibold leading-tight">Windows</div>
                </div>
              </a>

              <a 
                href="/downloads/ShopeeSetup.dmg"
                download="ShopeeSetup.dmg"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl group cursor-pointer w-auto"
              >
                {/* MAC Logo */}
                <div className="flex items-center justify-center w-8 h-8">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                {/* Text */}
                <div className="text-left">
                  <div className="text-[11px] opacity-80 leading-tight">Download on the</div>
                  <div className="text-xl font-semibold leading-tight">MAC</div>
                </div>
              </a>

              <a 
                href="/downloads/ShopeeSetup.AppImage"
                download="ShopeeSetup.AppImage"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl group cursor-pointer w-auto"
              >
                {/* Linux Logo */}
                <div className="flex items-center justify-center w-8 h-8">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.1-1.4-1.9-2.3-3.2-3.2-2.8-2.3-11.4-14.3-11.4-14.3 14.2 4.4 23.3 1.4 34-11.4 7.6-9.1 8-25.6 8-25.6-4.5 11.1-18.2 18.9-35.5 13.5-31.5-9.7-33.1 3.5-38.6 8.5-4 3.8-5.8 4.7-8.3 4.4-4-.5-8.2-2.8-13.8-7.3-8.1-6.5-12.7-10-18.7-9.5-8.5.8-15.1 8.6-15.1 8.6 4.7-3.9 11.2-5.7 17-4.1 8.6 2.3 15.6 9.8 23 15.6 4 3.1 8 6 12.3 8.3 7 3.5 14 5.9 21.4 6zM224 512c125.4 0 224-21.4 224-116.6 0-38.7-52.7-65.5-104-79.6 15.6-26.3 35.8-59 36.6-99.7.1-5.7-18.6-33.9-31.8-49.6-19.6-23.5-45.7-41-45.7-41s13.4-3.1 19.1-3.6c5.5-.5 10-.6 15.2-1.6 3.1-.6 4-2.2 4-2.2-2.7-1.4-4-2.8-7.7-1.1-6.1 2.9-23.7 4.1-35.1 6.5-1.5.3-2.9 1-4.2 1.9-20.2 13-17 19.6-17 19.6C265 158 234 160 223.7 160c-10.4 0-41.2-2-54.7-14.6 0 0 3.2-6.6-17-19.6-1.3-.9-2.7-1.6-4.2-1.9-11.4-2.4-29-3.6-35.1-6.5-3.7-1.7-7.7-.3-7.7 1.1 0 0 .9 1.6 4 2.2 5.2 1 9.7 1.1 15.2 1.6 5.8.5 19.1 3.6 19.1 3.6s-26.2 17.5-45.7 41c-13.1 15.7-31.9 43.9-31.8 49.6.8 40.7 21 73.4 36.6 99.7C52.7 330 0 356.8 0 395.4 0 490.6 98.6 512 224 512zm72.7-160c-22.1 0-30.8-19.4-72.7-19.4-42.3 0-50.6 19.4-72.7 19.4-17.7 0-44.5-16.1-44.5-35.8 0-14 13.9-35.2 38.6-35.2 14.8 0 33.1 24.5 78.6 24.5 45.4 0 63.8-24.5 78.6-24.5 24.7 0 38.6 21.2 38.6 35.2 0 19.7-26.8 35.8-44.5 35.8zM192 192c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
                  </svg>
                </div>
                {/* Text */}
                <div className="text-left">
                  <div className="text-[11px] opacity-80 leading-tight">Download on the</div>
                  <div className="text-xl font-semibold leading-tight">Linux</div>
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