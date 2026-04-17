import { Facebook, Instagram } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <img 
              src={`${import.meta.env.BASE_URL}favicon.png`} 
              alt="Shopee Logo" 
              className="w-10 h-10 object-contain" 
            />
            <h1 className="text-3xl font-bold" style={{ color: '#EE4D2D' }}>
              Shopee
            </h1>
          </a>
          
          <nav className="flex items-center gap-6 mt-1">
            <a 
              href="#" 
              className="text-[15px] text-gray-600 hover:text-[#EE4D2D] transition-colors"
            >
              Shopee Mall
            </a>
            <a 
              href="#" 
              className="text-[15px] text-gray-600 hover:text-[#EE4D2D] transition-colors"
            >
              Kênh Người Bán
            </a>
          </nav>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center gap-3 mt-1">
          <a 
            href="https://www.facebook.com/ShopeeVN/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#EE4D2D] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} strokeWidth={1.5} />
          </a>
          <a 
            href="https://www.instagram.com/shopee_VN/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#EE4D2D] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </header>
  );
}
