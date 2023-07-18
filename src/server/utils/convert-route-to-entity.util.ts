const mapping: Record<string, string> = {
  bookings: 'booking',
  experts: 'expert',
  organizations: 'organization',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
