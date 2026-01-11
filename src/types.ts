
export interface User {
  name: string;
  plan: string;
  avatar: string;
  balance: number;
}

export interface NavItem {
  path: string;
  label: string;
  icon: string;
}

export interface Transaction {
  name: string;
  sub: string;
  date: string;
  time: string;
  amt: string;
  status: 'Success' | 'Pending' | 'Failed';
  icon: string;
  color: string;
}

export interface QuickAction {
  label: string;
  icon: string;
  color: string;
  path: string;
}
