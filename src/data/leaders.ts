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
    name: "Nguyễn Văn An",
    role: "Chủ nhiệm CLB",
    description:
      "Sinh viên Khoa Du lịch - Đại học Duy Tân. Người dẫn dắt và định hướng hoạt động tình nguyện của CLB với tinh thần nhiệt huyết.",
    avatar: "/images/avatar_placeholder.png",
    generation: "Nhiệm kỳ 2023 - 2024",
  },
  {
    id: 2,
    name: "Trần Thị Bích Ngọc",
    role: "Phó Chủ nhiệm Nội vụ",
    description:
      "Phụ trách công tác tổ chức, sự kiện và đối nội. Năng động, sáng tạo và luôn nhiệt tình với các hoạt động vì cộng đồng.",
    avatar: "/images/avatar_placeholder.png",
    generation: "Nhiệm kỳ 2023 - 2024",
  },
  {
    id: 3,
    name: "Lê Minh Hoàng",
    role: "Phó Chủ nhiệm Ngoại vụ",
    description:
      "Phụ trách quan hệ đối ngoại, kết nối các tổ chức đối tác và truyền thông. Có kinh nghiệm phong phú trong lĩnh vực tình nguyện cộng đồng.",
    avatar: "/images/avatar_placeholder.png",
    generation: "Nhiệm kỳ 2023 - 2024",
  },
  {
    id: 4,
    name: "Phạm Thị Thu Hà",
    role: "Trưởng Ban Truyền thông",
    description:
      "Phụ trách mảng truyền thông, thiết kế và quản lý fanpage. Sáng tạo, đam mê nghệ thuật và kể chuyện qua hình ảnh.",
    avatar: "/images/avatar_placeholder.png",
    generation: "Nhiệm kỳ 2023 - 2024",
  },
  {
    id: 5,
    name: "Võ Quang Khải",
    role: "Trưởng Ban Nhân sự",
    description:
      "Phụ trách quản lý thành viên, tuyển dụng và đào tạo. Yêu thích làm việc với con người và xây dựng đội ngũ mạnh.",
    avatar: "/images/avatar_placeholder.png",
    generation: "Nhiệm kỳ 2023 - 2024",
  },
  {
    id: 6,
    name: "Ngô Thị Lan Anh",
    role: "Trưởng Ban Dự án",
    description:
      "Phụ trách lên kế hoạch và triển khai các dự án tình nguyện. Có tư duy chiến lược và kỹ năng quản lý dự án xuất sắc.",
    avatar: "/images/avatar_placeholder.png",
    generation: "Nhiệm kỳ 2023 - 2024",
  },
];
