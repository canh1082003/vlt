export interface GiftItem {
  name: string;
  quantity: string | number;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  organizedDate?: string;
  location: string;
  description: string;
  category: 'charity' | 'education' | 'community' | 'environment';
  image: string;
  giftImage?: string;
  participants?: number;
  status: 'upcoming' | 'completed';
  highlights?: string[];
  activities?: string[];
  giftItems?: { group: string; items: GiftItem[]; total?: string }[];
  supportCall?: string[];
  contact?: { bank?: string; stk?: string; owner?: string; phone?: string; email?: string };
  season?: string;
}

export const events: Event[] = [
  // ── TRUNG THU CHO EM 1 ────────────────────────────────────────────────────
  {
    id: 1,
    title: "Trung Thu Cho Em 1",
    date: "10/09/2022 (Thứ Bảy)",
    location: "Làng Hoà Bình, xã Tam Đàn, huyện Phú Ninh, tỉnh Quảng Nam",
    description: "Mỗi một sự giúp đỡ đều góp phần mang lại nụ cười, sự hạnh phúc đến các em nhỏ. CLB HTi's Volunteer xin kêu gọi những tấm lòng hảo tâm tham gia chương trình quyên góp, hỗ trợ và giúp đỡ về cả tinh thần lẫn vật chất đến những mảnh đời bất hạnh.",
    category: "charity",
    image: "/images/ctr/trungthuchoem.jpg",
    giftImage: "/images/qua/trungthuchoem1.jpg",
    status: "completed",
    season: "Trung Thu Cho Em",
    activities: [
      "Tặng 156 suất quà (100.000 VNĐ/suất) cho các em mồ côi, khuyết tật, người già cơ nhỡ: bánh trung thu, kẹo, vở, bút,…",
      "Tổ chức các hoạt động trung thu cho các em: múa lân, văn nghệ, trò chơi,...",
      "Suất ăn trưa và chiều cho ban tổ chức và mọi người ở làng Hoà Bình.",
      "Ủng hộ, đóng góp cho làng để xây dựng, hỗ trợ các em."
    ],
    highlights: [
      "156 suất quà Trung Thu (bánh, kẹo, vở, bút)",
      "Múa lân, văn nghệ, trò chơi dân gian",
      "Trao quà cho trẻ em mồ côi, khuyết tật"
    ],
    supportCall: [
      "Quyên góp tài chính giúp đỡ các phần quà, hỗ trợ các em nhỏ, kinh phí tổ chức.",
      "Quyên góp hiện vật: các loại nhu yếu phẩm, dụng cụ học tập, quà trung thu,...",
      "Các quà tặng khác của các đơn vị, các nhà hảo tâm."
    ],
    contact: {
      bank: "Ngân Hàng Quân Đội MB Bank",
      stk: "0366901747",
      owner: "Hoàng Diệu Thương",
      phone: "0366901747"
    }
  },

  // ── TRUNG THU CHO EM 2 ─────────────────────────────────────────────────────
  {
    id: 2,
    title: "Trung Thu Cho Em 2",
    date: "2023",
    location: "Đà Nẵng",
    description: "Tiếp nối thành công mùa 1, chương trình Trung Thu Cho Em lần 2 mở rộng quy mô với những xuất quà thiết thực cho các em nhỏ và hộ dân tại địa phương.",
    category: "charity",
    image: "/images/ctr/trungthuchoem2.jpg",
    giftImage: "/images/qua/trungthu2.jpg",
    status: "completed",
    season: "Trung Thu Cho Em",
    activities: [
      "Trao tặng 110 suất quà cho các em nhỏ: vở, bút mực, combo học tập, màu sáp, bánh kẹo (tổng 22.700.000đ)",
      "Trao tặng 10 suất quà hộ dân: gạo, dầu ăn, muối, mắm, mì tôm (tổng 3.000.000đ)",
      "Tổ chức văn nghệ, vui chơi đêm Trung Thu"
    ],
    giftItems: [
      {
        group: "Suất quà cho các em nhỏ",
        items: [
          { name: "Vở", quantity: 110 },
          { name: "Bút mực", quantity: 110 },
          { name: "Combo học tập", quantity: 110 },
          { name: "Màu sáp", quantity: 110 },
          { name: "Kệ sách", quantity: 1 },
          { name: "Bánh kẹo", quantity: 110 }
        ],
        total: "22.700.000đ"
      },
      {
        group: "Suất quà cho hộ dân",
        items: [
          { name: "Gạo", quantity: 10 },
          { name: "Dầu ăn", quantity: 10 },
          { name: "Muối", quantity: 10 },
          { name: "Mắm", quantity: 10 },
          { name: "Mì tôm", quantity: 10 }
        ],
        total: "3.000.000đ"
      }
    ],
    highlights: [
      "110 suất quà học tập cho các em nhỏ",
      "10 suất quà nhu yếu phẩm cho hộ dân",
      "Tổng kinh phí: 25.700.000đ"
    ],
    supportCall: [
      "Quyên góp tài chính giúp đỡ các phần quà, hỗ trợ các em nhỏ, kinh phí tổ chức.",
      "Quyên góp hiện vật: nhu yếu phẩm, dụng cụ học tập, quà trung thu.",
      "Các quà tặng khác của các đơn vị, các nhà hảo tâm."
    ]
  },

  // ── TRUNG THU CHO EM 3 ─────────────────────────────────────────────────────
  {
    id: 3,
    title: "Trung Thu Cho Em 3",
    date: "Gây quỹ: 14/09/2025 – 02/10/2025 | Tổ chức: 05/10/2025",
    organizedDate: "05/10/2025",
    location: "Tà Lang – Giàn Bí, phường Hải Vân, TP. Đà Nẵng",
    description: '"Trung Thu Cho Em 3" là chương trình lan tỏa yêu thương, kết nối những tấm lòng nhân ái. Chúng tôi mong muốn những bàn tay đồng hành cùng chung sức, góp phần mang đến niềm vui, hạnh phúc và những giá trị tốt đẹp cho các em – những mầm non của tương lai.',
    category: "charity",
    image: "/images/ctr/trungthuchoem3.jpg",
    giftImage: "/images/qua/trungthu3.jpg",
    status: "completed",
    season: "Trung Thu Cho Em",
    activities: [
      "Trao tặng 100 bộ dụng cụ học tập cho các em nhỏ",
      "Bữa ăn dinh dưỡng cho các em (~100 suất)",
      "Tặng đồ chơi, bánh kẹo cho các em nhỏ vui Tết Trung Thu",
      "Tặng quà cho các nhà dân (~10 suất)"
    ],
    highlights: [
      "100 bộ dụng cụ học tập cho các em",
      "100 suất bữa ăn dinh dưỡng",
      "10 suất quà cho các nhà dân"
    ],
    supportCall: [
      "Quyên góp tài chính giúp đỡ các phần quà",
      "Hỗ trợ các em nhỏ cũng như các hộ gia đình, kinh phí tổ chức.",
      "Góp hiện vật, các loại nhu yếu phẩm, dụng cụ học tập, bánh kẹo cho các em.",
      "Quyên góp sách vở cho các em.",
      "Các quà tặng khác của các đơn vị, các nhà hảo tâm."
    ],
    contact: {
      bank: "Ngân hàng TMCP Công Thương Việt Nam",
      stk: "103878933023",
      owner: "Đinh Ngọc Minh Hương",
      phone: "0792284533",
      email: "htivolunteerclub@gmail.com"
    }
  },

  // ── XUÂN VỀ TRÊN BẢN 1 ─────────────────────────────────────────────────────
  {
    id: 4,
    title: "Xuân Về Trên Bản 1",
    date: "Tết 2022",
    location: "Vùng núi miền Trung",
    description: "Chương trình mang Tết về với bà con vùng cao – trao quà, bánh chưng, áo ấm và nhu yếu phẩm đến các hộ gia đình nghèo trước thềm năm mới.",
    category: "charity",
    image: "/images/ctr/xuanvetrenbang2024.jpg",
    status: "completed",
    season: "Xuân Về Trên Bản",
    activities: [
      "Trao quà Tết tận tay các hộ gia đình khó khăn",
      "Tặng áo ấm, nhu yếu phẩm thiết yếu",
      "Thăm hỏi, động viên bà con vùng cao đón Tết"
    ],
    highlights: [
      "Trao quà Tết tận nhà",
      "Áo ấm & nhu yếu phẩm",
      "Mùa đầu tiên của chương trình"
    ]
  },

  // ── XUÂN VỀ TRÊN BẢN 2 ─────────────────────────────────────────────────────
  {
    id: 5,
    title: "Xuân Về Trên Bản 2",
    date: "Gây quỹ: 10/12/2024 – 2/1/2025 | Tổ chức: 8-9/1/2025",
    organizedDate: "8 – 9/01/2025",
    location: "Điểm trường Tăk Pổ, xã Trà Tập, huyện Nam Trà My, tỉnh Quảng Nam",
    description: '"Xuân Về Trên Bản 2025" là chương trình giúp lan tỏa những tấm lòng yêu thương, để thực hiện tốt hơn những điều đó chúng tôi cần những người đồng hành cùng giúp đỡ, chung tay để tạo ra những giá trị yêu thương.',
    category: "charity",
    image: "/images/ctr/xuanvetrenbang2024.jpg",
    giftImage: "/images/qua/xuan2.jpg",
    status: "completed",
    season: "Xuân Về Trên Bản",
    activities: [
      "Bữa ăn dinh dưỡng cho các em – 200 suất",
      "Đồ chơi cho trẻ em, bánh kẹo,...",
      "Cây Quế giống cho người dân – 2000 cây",
      "Heo giống – 6 con",
      "Đèn pin năng lượng mặt trời 300W – 5 cái",
      "Quà cho người dân – 20 suất"
    ],
    highlights: [
      "200 suất bữa ăn dinh dưỡng cho các em",
      "2000 cây Quế giống cho người dân",
      "6 heo giống & 5 đèn pin năng lượng mặt trời"
    ],
    supportCall: [
      "Quyên góp tài chính giúp đỡ các phần quà",
      "Hỗ trợ các em nhỏ cũng như các hộ gia đình, kinh phí tổ chức.",
      "Góp hiện vật, các loại nhu yếu phẩm, dụng cụ học tập, bánh kẹo cho các em.",
      "Quyên góp sách vở và quần áo cho các em và các hộ gia đình.",
      "Các quà tặng khác của các đơn vị, các nhà hảo tâm."
    ],
    contact: {
      bank: "Ngân hàng TMCP Công Thương Việt Nam",
      stk: "103878933023",
      owner: "Đinh Ngọc Minh Hương",
      phone: "0792284533",
      email: "htivolunteerclub@gmail.com"
    }
  },

  // ── XUÂN VỀ TRÊN BẢN 3 ─────────────────────────────────────────────────────
  {
    id: 6,
    title: "Xuân Về Trên Bản 3",
    date: "Gây quỹ: 27/12/2025 – 29/01/2026 | Tổ chức: 30-31/01/2026",
    organizedDate: "30 – 31/01/2026",
    location: "Điểm trường Lấp Loa, thôn 7, xã Trà Tập, TP Đà Nẵng",
    description: '"Xuân Về Trên Bản 2026" là chương trình lan tỏa yêu thương, kết nối những tấm lòng nhân ái. Chúng tôi mong muốn những bàn tay đồng hành cùng chung sức, góp phần mang đến niềm vui, hạnh phúc và những giá trị tốt đẹp cho các em – những mầm non của tương lai.',
    category: "charity",
    image: "/images/ctr/xuanvetrenbang2024.jpg",
    giftImage: "/images/qua/xuan3.jpg",
    status: "completed",
    season: "Xuân Về Trên Bản",
    activities: [
      "Trao tặng 100 bộ dụng cụ học tập cho các em nhỏ",
      "Bữa ăn dinh dưỡng cho các em (~100 suất)",
      "Tặng đồ chơi, bánh kẹo cho các em nhỏ vui Tết Nguyên Đán",
      "Tặng quà cho các nhà dân (~100 suất)",
      "Tặng kệ tủ đựng đồ cho trường học"
    ],
    highlights: [
      "100 bộ dụng cụ học tập cho các em",
      "100 suất quà cho các nhà dân",
      "Kệ tủ đựng đồ cho trường học"
    ],
    supportCall: [
      "Quyên góp tài chính giúp đỡ các phần quà",
      "Hỗ trợ các em nhỏ cũng như các hộ gia đình, kinh phí tổ chức.",
      "Góp hiện vật, các loại nhu yếu phẩm, dụng cụ học tập, bánh kẹo cho các em.",
      "Quyên góp quần áo cho các em.",
      "Các quà tặng khác của các đơn vị, các nhà hảo tâm."
    ],
    contact: {
      bank: "Ngân hàng TMCP Công Thương Việt Nam",
      stk: "103878933023",
      owner: "Đinh Ngọc Minh Hương",
      phone: "0792284533",
      email: "htivolunteerclub@gmail.com"
    }
  },

  // ── ĐÔNG ẤM VÙNG CAO ──────────────────────────────────────────────────────
  {
    id: 7,
    title: "Đông Ấm Vùng Cao",
    date: "21 – 22/12/2022",
    location: "Thôn 3 – Nóc Ông Tuấn, xã Trà Dơn, huyện Nam Trà My, tỉnh Quảng Nam",
    description: "Mỗi một sự giúp đỡ đều góp phần mang lại nụ cười, sự hạnh phúc đến các hộ gia đình. HTi's Volunteer Club kêu gọi những tấm lòng hảo tâm tham gia quyên góp, hỗ trợ và giúp đỡ về cả tinh thần lẫn vật chất đến những hộ gia đình nơi đây.",
    category: "community",
    image: "/images/ctr/dongamvungcao.jpg",
    giftImage: "/images/qua/dongamvungcao.jpg",
    status: "completed",
    season: "Đông Ấm Vùng Cao",
    activities: [
      "Tổ chức cắt tóc miễn phí.",
      "Tổ chức các hoạt động văn nghệ giao lưu.",
      "Tổ chức trò chơi cùng các em.",
      "Hoạt động trao 100 suất quà đến các hộ dân và 50 suất quà cho trẻ em (dụng cụ học tập, bánh kẹo, áo ấm, cặp đi học, lương thực khô, chăn mền, thực phẩm thiết yếu, đèn pin năng lượng mặt trời MAX TECH)."
    ],
    highlights: [
      "100 suất quà cho hộ dân & 50 suất quà cho trẻ em",
      "Cắt tóc miễn phí, văn nghệ giao lưu",
      "Áo ấm, chăn mền, lương thực khô, đèn pin NLMT"
    ],
    supportCall: [
      "Quyên góp tài chính giúp đỡ các phần quà, hỗ trợ các hộ gia đình, kinh phí tổ chức.",
      "Quyên góp hiện vật: gạo, mì, dầu ăn, mắm, muối, bột ngọt, sữa, bánh kẹo, chăn, mền, áo quần, dụng cụ học tập (balo, vở, bút, thước,...).",
      "Các quà tặng khác của các đơn vị, các nhà hảo tâm."
    ],
    contact: {
      bank: "Ngân Hàng Quân Đội MB Bank",
      stk: "0366901747",
      owner: "Hoàng Diệu Thương",
      phone: "0366901747"
    }
  },

  // ── CLEAN UP SƠN TRÀ ──────────────────────────────────────────────────────
  {
    id: 8,
    title: "Clean Up Sơn Trà",
    date: "2023",
    location: "Bán đảo Sơn Trà, Đà Nẵng",
    description: "Chiến dịch dọn dẹp môi trường tại bán đảo Sơn Trà – 'lá phổi xanh' của Đà Nẵng. Tình nguyện viên cùng nhau thu gom rác, nâng cao ý thức bảo vệ thiên nhiên trong cộng đồng.",
    category: "environment",
    image: "/images/ctr/cleanupsontra.jpg",
    status: "completed",
    season: "Clean Up",
    activities: [
      "Thu gom rác thải tại các khu vực ven biển và rừng Sơn Trà",
      "Nâng cao ý thức bảo vệ môi trường trong cộng đồng",
      "Bảo vệ hệ sinh thái biển và rừng bán đảo Sơn Trà"
    ],
    highlights: [
      "Thu gom rác tại Sơn Trà",
      "Nâng cao ý thức môi trường",
      "Bảo vệ hệ sinh thái biển & rừng"
    ]
  }
];
