import { ServiceInterface } from 'interfaces/service';
import { ExpertInterface } from 'interfaces/expert';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  service_id?: string;
  expert_id?: string;
  customer_id?: string;
  location: string;
  description?: string;
  image?: string;
  created_at?: any;
  updated_at?: any;

  service?: ServiceInterface;
  expert?: ExpertInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  service_id?: string;
  expert_id?: string;
  customer_id?: string;
  location?: string;
  description?: string;
  image?: string;
}
