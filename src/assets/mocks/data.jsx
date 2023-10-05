import moment from 'moment';

export const categoryColors = {
    'Tech Culture': 'rgb(255,59,48)',
    'Tech News': 'rgb(0,113,164)',
    'Brain Health': 'rgb(255,45,85)',
    Vue: 'rgb(52,199,89)',
    React: 'rgb(64,156,255)',
    JavaScript: 'rgb(255, 179, 64)',
    Cloud: 'rgb(175,82,250)'
};

export const featuredPosts = [
  {
	id:'1',
    title: 'Can anyone code?',
    date: moment().format('MMMM DD, YYYY'),
    categories: ['Tech Culture', 'Tech News'],
    link: '#',
    image: '../images/anyone_can_code.jpg',
	content: 'Contenido del Featured Post 1..dasdsadadsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdassdasdas .'
  },
  {
	id:'2',
    title: 'Using AWS S3 for Storing Blog Images',
    date: moment().format('MMMM DD, YYYY'),
    categories: ['Cloud'],
    link: '#',
    image: 'cloud_storage.jpeg',
  },
  {
	id:'3',
	title: 'Popular Programming Languages in 2020',
	date: moment().format('MMMM DD, YYYY'),
	categories: ['Tech News', 'Tech Culture'],
	link: '#',
	image: 'programming_languages.jpeg'
},
{
	id:'4',
	title: 'Brain Hacks for Learning to Program',
	date: moment().format('MMMM DD, YYYY'),
	categories: ['Brain Health'],
	link: '#',
	image: 'neuron.jpg'
},

  // Agrega más publicaciones destacadas según sea necesario
];

// Publicaciones populares
export const trendingPosts = [
  {
	id:'5',
    title: 'Software Engineer Salary in 2020',
    date: moment().format('MMMM DD, YYYY'),
    categories: ['Tech Culture'],
    link: '#',
    image: 'money.jpg',
  },
  {
	id:'6',
    title: 'GraphQL vs REST',
    date: moment().format('MMMM DD, YYYY'),
    categories: ['React', 'JavaScript'],
    link: '#',
    image: 'apollo_graphql.png',
  },
  {
	id:'7',
	title: 'A Day in the Life of a Programmer',
	date: moment().format('MMMM DD, YYYY'),
	categories: ['Tech Culture'],
	link: '#',
	image: 'puzzled_programmer.jpeg'
},
{
	id:'8',
	title: 'Brain Hacks for Learning to Program',
	date: moment().format('MMMM DD, YYYY'),
	categories: ['Brain Health'],
	link: '#',
	image: 'neuron.jpg'
},
  {
	id:'9',
	title: 'React Vs Vue',
	date: moment().format('MMMM DD, YYYY'),
	categories: ['React', 'Vue'],
	link: '#',
	image: 'logo.png'
},
  // Agrega más publicaciones populares según sea necesario
];

// Data adicional
export const data = [
	{
		id:'10',
		title: 'Using Vanilla Extract with next-themes',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['Javascript'],
		link: '#',
		image:
			'https://samuelkraft.com/_next/image?url=%2Fblog%2Fvanilla-extract-with-next-themes%2Fimage.png&w=1080&q=75',

		description: 'How to apply vanilla extract themes to Next.js apps',
	},
	{
		id:'11',
		title: 'Styling Radix UI with CSS',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['CSS'],
		link: '#',
		image:
			'https://samuelkraft.com/_next/image?url=%2Fblog%2Fradix-ui-styling-with-css%2Fimage.png&w=1080&q=75',
		description:
			'Quick tip for styling Radix Primitives with plain CSS, CSS Modules, Vanilla Extract and more',

	},
	{
		id:'12',
		title: 'Fractional SVG stars with CSS',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['CSS'],
		link: '#',
		image:
			'https://samuelkraft.com/_next/image?url=%2Fblog%2Ffractional-svg-stars-css%2Fimage.png&w=1080&q=75',
		description:
			'Create a rating component with svg stars that support fractional values.',
	},
	{
		id:'13',
		title: 'Responsive Animations with Framer Motion',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['Javascript'],
		link: '#',
		image:
			'https://samuelkraft.com/_next/image?url=%2Fblog%2Fresponsive-animation-framer-motion%2Fimage.png&w=1080&q=75',
		description:
			'How to write responsive variants with media queries in javascript',

	},
	{
		id:'14',
		title: 'Building a blog with Notions public API',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['Next.js'],
		link: '#',
		image:
			'https://samuelkraft.com/_next/image?url=%2Fblog%2Fbuilding-a-notion-blog-with-public-api%2Fimage.png&w=1080&q=75',
		description:
			'How to use Notion as a CMS using their public API and Next.js',

	},
	{
		id:'15',
		title: 'Generating Open Graph images with Mapbox & Canvas',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['Node.js'],
		link: '#',
		image:
		'https://samuelkraft.com/_next/image?url=%2Fblog%2Fmapbox-static-image-api%2Fimage.png&w=1920&q=75',
		description:
			'How to use Mapbox static image API and Node Canvas to generate custom sharing images',

	},
	{
		id:'16',
		title: 'Building a mapping platform with React and Mapbox GL',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['React'],
		image:
			'https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75',
		description:
			'How I built my side project Trail Routes',

	},
	{
		id:'17',
		title: 'Spring-based Parallax with Framer motion: Step by step',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['React'],
		link: '#',
		image:
		'https://samuelkraft.com/_next/image?url=%2Fblog%2Fspring-parallax-framer-motion-guide%2Fbg.png&w=828&q=75',
		description:
			'A guide on creating a spring-based Parallax scrolling effect using Framer Motion and React',
	
	},
	{
		id:'18',
		title: 'How to create iOS chat bubbles in CSS',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['CSS'],
		link: '#',
		image:
		'https://samuelkraft.com/_next/image?url=%2Fblog%2Fios-chat-bubbles-css%2Fimage.png&w=1920&q=75',
		description:
			'Creating a chat messaging app ui with CSS (with a sprinkle of JS and Framer Motion)',

	},
	{
		id:'19',
		title: 'My favorite productivity hack: git newmr',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['Git'],
		link: '#',
		image:
			'https://samuelkraft.com/_next/image?url=%2Fblog%2Fgit-newmr%2Fimage.png&w=1920&q=75',
		description:
			'Using git aliases to automate repetitive tasks',

	},
	{
		id:'20',
		title: 'Building my personal website with Next.js backed by Notion',
		date: moment().format('MMMM DD, YYYY'),
		categories: ['Next.js'],
		link: '#',
		image:
		'https://samuelkraft.com/_next/image?url=%2Fblog%2Fpersonal-website-with-next-and-notion%2Fimage.png&w=1920&q=75',
		description:
			'My experience rebuilding my personal website with Next.js & Typescript backed by Notion',
	
	},
];


export default { categoryColors, featuredPosts, trendingPosts, data };


