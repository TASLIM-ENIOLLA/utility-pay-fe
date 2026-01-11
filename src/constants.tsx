
import { User, NavItem, QuickAction, Transaction } from './types';

export const USER: User = {
  name: "Alex Morgan",
  plan: "Premium Member",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQh5-FC9bVsSJ7FwkuPdcUyOkCyoiSSfGbC1iHdfDFe2JBI0x2bCSduug0FFQ8Wg5-W0qluXB6S_GKDXnWqJrh0m68uo7zcazi7XfzhUX0IfQxCa-49URWpapCIaMn9kqwb8OBr7j96-22IRDzPoZ_NhDTnQFU3UDo-E9mxOnUddLKVClFDIyEJs3vylaUERVOCZytfdprm0PSopNPEY9WXCF839T7UJbUMlOsfroSYa3sDPiMrE8m6-Bibv0tI87bkqedN5FwEgg",
  balance: 12450.00
};

export const NAV_ITEMS: NavItem[] = [
  { path: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { path: "/wallet", label: "Wallet", icon: "account_balance" },
  { path: "/payments", label: "Payments", icon: "payments" },
  { path: "/extra-services", label: "Extra Services", icon: "layers" },
  { path: "/history", label: "History", icon: "receipt_long" },
  { path: "/settings", label: "Settings", icon: "settings" },
];

export const QUICK_ACTIONS: QuickAction[] = [
  { label: "Pay Data", icon: "wifi", color: "blue", path: "/payments" },
  { label: "Pay Airtime", icon: "phone_iphone", color: "green", path: "/payments" },
  { label: "Electricity", icon: "lightbulb", color: "yellow", path: "/payments" },
  { label: "Cable TV", icon: "tv", color: "red", path: "/payments" },
  { label: "Exam Pins", icon: "school", color: "purple", path: "/extra-services" },
  { label: "More", icon: "more_horiz", color: "gray", path: "/extra-services" }
];

export const TRANSACTIONS: Transaction[] = [
  { name: "MTN Airtime", sub: "0803...123", date: "Oct 24", time: "10:00 AM", amt: "₦5,000", status: "Success", icon: "phone_iphone", color: "yellow" },
  { name: "Abuja Electric", sub: "Meter: 123...99", date: "Oct 23", time: "09:15 PM", amt: "₦15,000", status: "Pending", icon: "lightbulb", color: "orange" },
  { name: "Spectranet Data", sub: "ID: 445...11", date: "Oct 22", time: "02:30 PM", amt: "₦21,500", status: "Failed", icon: "wifi", color: "blue" },
  { name: "DSTV Premium", sub: "Card: 702...11", date: "Oct 20", time: "06:45 PM", amt: "₦24,500", status: "Success", icon: "tv", color: "purple" }
];
