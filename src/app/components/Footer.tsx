export function Footer() {
  return (
    <footer className="w-full py-12 bg-white border-t border-gray-200">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg" style={{ color: '#333333' }}>Về Shopee</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Điều khoản</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg" style={{ color: '#333333' }}>Chăm sóc khách hàng</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Shopee Blog</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Shopee Mall</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Hướng dẫn mua hàng</a></li>
            </ul>
          </div>

          {/* Payment */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg" style={{ color: '#333333' }}>Thanh toán</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Thẻ tín dụng/Ghi nợ</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Ví điện tử</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Trả góp</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Thanh toán khi nhận hàng</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg" style={{ color: '#333333' }}>Theo dõi chúng tôi</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#EE4D2D] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © 2026 Shopee. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
