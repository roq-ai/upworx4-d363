interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx4',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job offers',
    'Apply to job offers',
    'Update personal user information',
    'Manage own applications',
  ],
  ownerAbilities: ['Manage job offers', 'Manage applications', 'Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d9e84680-76f8-4e5c-808e-c2aa0399723e',
};
