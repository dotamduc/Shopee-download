import { Truck, Headphones, Sparkles, Shield, MessageCircle, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Hỗ trợ vận chuyển',
    description: 'Trạng thái đơn hàng của bạn luôn được cập nhật chi tiết kể từ khi bạn đặt hàng',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ khách hàng',
    description: 'Bộ phận Chăm Sóc Khách Hàng luôn sẵn sàng hỗ trợ bạn 24/7',
  },
  {
    icon: Sparkles,
    title: 'Gợi Ý Hôm Nay',
    description: 'Lựa chọn những sản phẩm phù hợp với bạn trong mục Gợi Ý Hôm Nay',
  },
  {
    icon: Shield,
    title: 'Phương thức thanh toán an toàn',
    description: 'Thanh toán dễ dàng và thuận tiện: Thanh toán khi nhận hàng hoặc Thanh toán trước bằng Thẻ Tín dụng/Ghi nợ.',
  },
  {
    icon: MessageCircle,
    title: 'Tính năng "Chat"',
    description: 'Trò chuyện trực tiếp với người bán để được tư vấn thêm về sản phẩm. Bạn cũng có thể thương lượng về mức giá mong muốn với Người bán thông qua mục "Chat"',
  },
  {
    icon: CheckCircle,
    title: 'Shopee đảm bảo',
    description: 'Shopee cam kết rằng số tiền bạn thanh toán sẽ được chuyển đến người bán sau khi bạn nhận được hàng. Chúng tôi luôn bảo vệ bạn!',
  },
];

export function CoreFeatures() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Slogan */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-[32px] font-normal" style={{ color: '#333333' }}>
            Mua sắm mọi lúc, mọi nơi!
          </h2>
          <p className="text-lg text-[#555555] max-w-3xl mx-auto">
            Tận hưởng các chương trình khuyến mãi hấp dẫn, siêu tiết kiệm đến từ các Shop bán hàng uy tín nhất.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center px-4"
              >
                {/* Icon Circle */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#FFF5F3' }}
                >
                  <Icon size={36} style={{ color: '#EE4D2D' }} />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-[18px] font-normal mb-2" style={{ color: '#333333' }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[280px]">
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
