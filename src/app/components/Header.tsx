import { Facebook, Instagram } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold" style={{ color: '#EE4D2D' }}>
            Shopee
          </h1>
        </div>

        {/* Center/Right Navigation */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: '#EE4D2D' }}
            >
              Shopee Mall
            </a>
            <a 
              href="#" 
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: '#EE4D2D' }}
            >
              Kênh Người Bán
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook size={18} style={{ color: '#EE4D2D' }} />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={18} style={{ color: '#EE4D2D' }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
