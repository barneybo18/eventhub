export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
  {
    label: 'Host an Event?',
    route: '/contact',
  }
]

export const adminHeaderLinks = [
  {
    label: 'Dashboard',
    route: '/admin',
  },
   
  {
    label: 'Create Event',
    route: '/events/create',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}