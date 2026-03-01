export interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: string;
  facebook?: string;
  generation: string;
}

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Đặng Thị Thuý Ngọc",
    role: "Chủ nhiệm CLB",
    description: "Sinh viên Khoa Du lịch - Đại học Duy Tân. Người dẫn dắt và định hướng hoạt động tình nguyện của CLB với tinh thần nhiệt huyết và tâm huyết vì cộng đồng.",
    avatar: "/images/bcn/cn1.jpg",
    generation: "Ban Chủ Nhiệm HTi's Volunteer Club"
  },
  {
    id: 2,
    name: "Huỳnh Nguyễn Hoàng Vũ",
    role: "Chủ nhiệm CLB",
    description: "Sinh viên Khoa Du lịch - Đại học Duy Tân. Đồng hành cùng ban lãnh đạo trong việc tổ chức và điều phối các hoạt động tình nguyện của CLB.",
    avatar: "/images/bcn/cn2.jpg",
    generation: "Ban Chủ Nhiệm HTi's Volunteer Club"
  },
  {
    id: 3,
    name: "Ngô Thị Mai Quỳnh",
    role: "Chủ nhiệm CLB",
    description: "Sinh viên Khoa Du lịch - Đại học Duy Tân. Năng động, sáng tạo, luôn nhiệt tình đóng góp vào các chương trình tình nguyện ý nghĩa của HTi's Volunteer Club.",
    avatar: "/images/bcn/cn3.jpg",
    generation: "Ban Chủ Nhiệm HTi's Volunteer Club"
  }
];
