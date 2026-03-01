export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'charity' | 'education' | 'community' | 'environment';
  image: string;
  participants?: number;
  status: 'upcoming' | 'completed';
  highlights?: string[];
  season?: string;
}

export const events: Event[] = [
  // ── TRUNG THU CHO EM ───────────────────────────────────────────────────────
  {
    id: 1,
    title: "Trung Thu Cho Em 1",
    date: "2022",
    location: "Đà Nẵng",
    description: "Mùa đầu tiên của chương trình Trung Thu Cho Em – trao lồng đèn, quà bánh Trung Thu và niềm vui đến các em nhỏ có hoàn cảnh khó khăn nhân dịp Tết Thiếu Nhi.",
    category: "charity",
    image: "/images/ctr/trungthuchoem.jpg",
    status: "completed",
    season: "Trung Thu Cho Em",
    highlights: ["Lần đầu tổ chức", "Trao quà & lồng đèn cho trẻ em", "Khởi đầu truyền thống ý nghĩa"]
  },
  {
    id: 2,
    title: "Trung Thu Cho Em 2",
    date: "2023",
    location: "Đà Nẵng",
    description: "Tiếp nối thành công mùa 1, chương trình Trung Thu Cho Em lần 2 mở rộng quy mô, đến với nhiều em nhỏ hơn, mang ánh trăng ấm áp đến những hoàn cảnh khó khăn.",
    category: "charity",
    image: "/images/ctr/trungthuchoem2.jpg",
    status: "completed",
    season: "Trung Thu Cho Em",
    highlights: ["Quy mô lớn hơn mùa 1", "Nhiều hoạt động văn nghệ", "Trao quà & lồng đèn"]
  },
  {
    id: 3,
    title: "Trung Thu Cho Em 3",
    date: "2024",
    location: "Đà Nẵng",
    description: "Chương trình thiện nguyện Trung Thu mùa 3 – hành trình lan toả yêu thương tiếp tục với hàng trăm em nhỏ được nhận quà, lồng đèn và tham gia hội vui chơi đêm Rằm.",
    category: "charity",
    image: "/images/ctr/trungthuchoem3.jpg",
    status: "completed",
    season: "Trung Thu Cho Em",
    highlights: ["300+ em nhỏ được nhận quà", "150 tình nguyện viên tham gia", "Tổ chức lần 3 thành công"]
  },

  // ── XUÂN VỀ TRÊN BẢN ──────────────────────────────────────────────────────
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
    highlights: ["Trao quà Tết tận nhà", "Áo ấm & nhu yếu phẩm", "Mùa đầu tiên chương trình"]
  },
  {
    id: 5,
    title: "Xuân Về Trên Bản 2",
    date: "Tết 2023",
    location: "Vùng núi miền Trung",
    description: "Mùa 2 của 'Xuân Về Trên Bản' tiếp tục hành trình về với bản làng vùng cao, mang hơi ấm và niềm vui ngày Tết đến với những gia đình còn nhiều khó khăn.",
    category: "charity",
    image: "/images/ctr/xuanvetrenbang2024.jpg",
    status: "completed",
    season: "Xuân Về Trên Bản",
    highlights: ["Mở rộng địa bàn", "Quà Tết & lương thực", "Thăm hỏi, sẻ chia yêu thương"]
  },
  {
    id: 6,
    title: "Xuân Về Trên Bản 3",
    date: "Tết 2024",
    location: "Vùng núi miền Trung",
    description: "Lần thứ 3 đội tình nguyện vượt hàng trăm cây số lên với đồng bào vùng cao đón Tết, trao những phần quà đong đầy yêu thương trước thềm Xuân mới.",
    category: "charity",
    image: "/images/ctr/xuanvetrenbang2024.jpg",
    status: "completed",
    season: "Xuân Về Trên Bản",
    highlights: ["3 năm liên tiếp thực hiện", "Hàng trăm suất quà Tết", "Ấm lòng bà con vùng cao"]
  },

  // ── ĐÔNG ẤM VÙNG CAO ──────────────────────────────────────────────────────
  {
    id: 7,
    title: "Đông Ấm Vùng Cao",
    date: "Mùa Đông 2023",
    location: "Vùng cao miền Trung",
    description: "Chương trình 'Đông Ấm Vùng Cao' thu gom và trao tặng quần áo ấm, chăn màn cho trẻ em và người dân tộc thiểu số vùng cao vượt qua mùa đông giá lạnh.",
    category: "community",
    image: "/images/ctr/dongamvungcao.jpg",
    status: "completed",
    season: "Đông Ấm Vùng Cao",
    highlights: ["Hàng trăm bộ quần áo ấm", "Chăn, mền, nhu yếu phẩm mùa đông", "Vươn tới những bản làng hẻo lánh"]
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
    highlights: ["Thu gom rác tại Sơn Trà", "Nâng cao ý thức môi trường", "Bảo vệ hệ sinh thái biển & rừng"]
  },
];
