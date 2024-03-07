import { v4 } from 'uuid';

export const BIG_BOX_DATA = [
	{
		id: v4(),
		img: '/images/icon-facebook.svg',
		user: '@nathanf',
		followers: '1987',
		type: 'FOLLOWERS',
		bordercolor: '#178FF5',
		followerschange: '12 Today',
		up: '#1EB589',
		arrow: '/images/icon-up.svg'
	},
	{
		id: v4(),
		img: '/images/icon-twitter.svg',
		user: '@nathanf',
		followers: '1044',
		type: 'FOLLOWERS',
		bordercolor: '#1DA1F2',
		followerschange: '99 Today',
		up: '#1EB589',
		arrow: '/images/icon-up.svg'
	},
	{
		id: v4(),
		img: '/images/icon-instagram.svg',
		user: '@realnathanf',
		followers: '11K',
		type: 'FOLLOWERS',
		bordercolor:
			'linear-gradient(90deg,rgba(253, 195, 102, 1) 0%,rgba(238, 135, 126, 1) 51%,rgba(223, 72, 150, 1) 100%)',
		followerschange: '1099 Today',
		up: '#1EB589',
		arrow: '/images/icon-up.svg'
	},
	{
		id: v4(),
		img: '/images/icon-youtube.svg',
		user: 'Nathan F.',
		followers: '8239',
		type: 'SUBSCRIBERS',
		bordercolor: '#C4042B',
		followerschange: '144 Today',
		up: '#DC414C',
		arrow: '/images/icon-down.svg'
	}
];
