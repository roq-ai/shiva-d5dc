interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Admin', 'Business Owner', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Shiva',
  addOns: [],
};
