import { Truck, Headphones, Sparkles, Shield, MessageCircle, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Hỗ trợ vận chuyển',
    description: 'Miễn phí vận chuyển cho đơn hàng từ 0đ',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ khách hàng',
    description: 'Hỗ trợ khách hàng 24/7 qua chat và hotline',
  },
  {
    icon: Sparkles,
    title: 'Gợi Ý Hôm Nay',
    description: 'Khám phá sản phẩm phù hợp với sở thích của bạn',
  },
  {
    icon: Shield,
    title: 'Phương thức thanh toán an toàn',
    description: 'Đa dạng phương thức thanh toán được bảo mật',
  },
  {
    icon: MessageCircle,
    title: 'Tính năng "Chat"',
    description: 'Liên hệ trực tiếp với người bán dễ dàng',
  },
  {
    icon: CheckCircle,
    title: 'Shopee đảm bảo',
    description: 'Hoàn tiền 100% nếu sản phẩm không đúng mô tả',
  },
];

export function CoreFeatures() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Slogan */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#333333' }}>
            Mua sắm mọi lúc, mọi nơi!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tận hưởng các chương trình khuyến mãi hấp dẫn, siêu tiết kiệm đến từ các Shop bán hàng uy tín nhất.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                {/* Icon Circle */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#FFF5F3' }}
                >
                  <Icon size={36} style={{ color: '#EE4D2D' }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2" style={{ color: '#333333' }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
