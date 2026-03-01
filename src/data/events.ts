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
}

export const events: Event[] = [
  {
    id: 1,
    title: "Trung Thu Cho Em 3",
    date: "15/09/2024",
    location: "Đà Nẵng",
    description: "Chương trình thiện nguyện trao lồng đèn, quà Trung Thu cho các em nhỏ có hoàn cảnh khó khăn tại Đà Nẵng. Mang lại niềm vui và ánh sáng trong đêm Rằm cho hàng trăm trẻ em.",
    category: "charity",
    image: "/images/trung_thu_event.png",
    participants: 150,
    status: "completed",
    highlights: ["300+ em nhỏ được nhận quà", "150 tình nguyện viên tham gia", "Tổ chức lần 3 thành công"]
  },
  {
    id: 2,
    title: "Xanh - Sạch - Đẹp Bãi Biển",
    date: "22/04/2024",
    location: "Bãi biển Mỹ Khê, Đà Nẵng",
    description: "Chương trình dọn dẹp bãi biển hưởng ứng Ngày Trái Đất, nâng cao ý thức bảo vệ môi trường biển trong cộng đồng.",
    category: "environment",
    image: "/images/hero_banner.png",
    participants: 80,
    status: "completed",
    highlights: ["500kg rác được thu gom", "80 tình nguyện viên", "Kết hợp tuyên truyền bảo vệ môi trường"]
  },
  {
    id: 3,
    title: "Thắp Sáng Ước Mơ",
    date: "01/06/2024",
    location: "Huyện Hòa Vang, Đà Nẵng",
    description: "Chương trình khen thưởng, trao học bổng và sách giáo khoa cho các em học sinh nghèo vượt khó, nhân dịp Ngày Thiếu Nhi.",
    category: "education",
    image: "/images/hero_banner.png",
    participants: 60,
    status: "completed",
    highlights: ["50 suất học bổng", "200 em nhỏ được nhận sách", "Hội vui học tập tổ chức"]
  },
  {
    id: 4,
    title: "Hiến Máu Tình Nguyện",
    date: "12/08/2024",
    location: "Bệnh viện Đà Nẵng",
    description: "Chiến dịch hiến máu tình nguyện hưởng ứng phong trào vì sức khỏe cộng đồng, thu hút đông đảo sinh viên tham gia.",
    category: "community",
    image: "/images/hero_banner.png",
    participants: 120,
    status: "completed",
    highlights: ["150 đơn vị máu", "120 người tham gia hiến máu", "Phối hợp với Bệnh viện Đà Nẵng"]
  },
  {
    id: 5,
    title: "Trung Thu Cho Em 4",
    date: "05/10/2025",
    location: "Đà Nẵng",
    description: "Tiếp nối truyền thống 3 năm, chương trình Trung Thu Cho Em mùa 4 hứa hẹn mang đến nhiều hoạt động ý nghĩa hơn cho các em nhỏ.",
    category: "charity",
    image: "/images/trung_thu_event.png",
    status: "upcoming",
    highlights: ["Quy mô lớn hơn mùa 3", "Nhiều hoạt động vui chơi", "Trao quà và lồng đèn"]
  },
  {
    id: 6,
    title: "Mùa Xuân Yêu Thương 2025",
    date: "20/01/2025",
    location: "Đà Nẵng",
    description: "Chương trình trao quà Tết cho các hộ gia đình có hoàn cảnh khó khăn, mang lại niềm vui đón Xuân cho mọi người.",
    category: "charity",
    image: "/images/hero_banner.png",
    status: "upcoming",
    highlights: ["200 phần quà Tết", "Đến tận nhà trao quà", "Kết hợp thăm hỏi, sẻ chia"]
  }
];
