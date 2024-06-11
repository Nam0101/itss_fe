// import HomeIcon from "@mui/icons-material/Home";
import { RiHome4Line } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { LuShare2 } from "react-icons/lu";
import { LuMonitorDot } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const icons = {
  RiHome4Line,
  HiOutlineShoppingCart,
  MdOutlineDirectionsBike,
  FiTruck,
  SlPeople,
  LuShare2,
  LuMonitorDot,
  LiaShippingFastSolid,
  MdOutlineDashboardCustomize,
  FaRegCommentDots,
  MdOutlineSupportAgent,
};

const cntt = {
  id: "cntt",
  title: "Công nghệ thông tin",
  type: "group",
  children: [
    {
      id: 1,
      title: "(IT1) Khoa học máy tính",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: 2,
      title: "(IT2) Kỹ thuật máy tính",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: 3,
      title: "(IT-E10) Khoa học dữ liệu",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: 4,
      title: "(IT-E15) An toàn không gian số",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: 5,
      title: "(IT_E6) CNTT Việt-Nhật",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "it-e7",
      title: "(IT_E7) CNTT Global ICT",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "it-ep",
      title: "(IT_EP) CNTT Việt-Pháp",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
  ],
};

const dientu = {
  id: "dientu",
  title: "Điện - Điện tử",
  type: "group",
  children: [
    {
      id: "me-e1",
      title: "(ME-E1) Kỹ thuật cơ điện tử",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "me-gu",
      title: "(ME-GU) Cơ khí - Chế tạo máy",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "me-nut",
      title: "(ME-NET) Cơ điện tử - ĐH Nagaoka",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "me1",
      title: "(ME1) Kỹ thuật cơ điện tử",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "me2",
      title: "(ME2) Kỹ thuật cơ khí",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
  ],
};

const cokhi = {
  id: "cokhi",
  title: "Cơ khí",
  type: "group",
  children: [
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
  ],
};

const lyluanchinhtri = {
  id: "lyluanchinhtri",
  title: "Lý luận chính trị",
  type: "group",
  children: [
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      icon: icons.FaRegCommentDots,
      breadcrumbs: false,
    },
  ],
};

const hoavakhoahocsusong = {
  id: "hoavakhoahocsusong",
  title: "Hóa và khoa học sự sống",
  type: "group",
  children: [
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      icon: icons.FaRegCommentDots,
      breadcrumbs: false,
    },
  ],
};

const toantin = {
  id: "toantin",
  title: "Toán tin",
  type: "group",
  children: [
    {
      id: "mi1",
      title: "(MI1) Toán tin",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
    {
      id: "mi2",
      title: "(MI2) Hệ thống thông tin quản lý",
      type: "item",
      url: "/trangchu",
      breadcrumbs: false,
    },
  ],
};

const vatlykythuat = {
  id: "vattlykythua",
  title: "Vật lý kỹ thuật",
  type: "group",
  children: [
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      icon: icons.FaRegCommentDots,
      breadcrumbs: false,
    },
  ],
};

const ngoaingu = {
  id: "ngoaingu",
  title: "Ngoại ngữ",
  type: "group",
  children: [
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      icon: icons.FaRegCommentDots,
      breadcrumbs: false,
    },
  ],
};

const vatlieu = {
  id: "vatlieu",
  title: "Vật liệu",
  type: "group",
  children: [
    {
      id: "khieunai",
      title: "Khiếu nại",
      type: "item",
      url: "/trangchu",
      icon: icons.FaRegCommentDots,
      breadcrumbs: false,
    },
  ],
};
const Admin = [
  cntt,
  dientu,
  toantin,
  cokhi,
  lyluanchinhtri,
  ngoaingu,
  vatlieu,
  vatlykythuat,
  hoavakhoahocsusong,
];

export default Admin;
