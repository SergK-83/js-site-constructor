import image from './assets/image.png';

export const model = [
	{
		type: 'title',
		value: 'Конструктор сайтов JS',
		options: {
			tag: 'h2',
			styles: {
				background: 'linear-gradient(to right, #699fc9, #18466b)',
				color: '#fff',
				padding: '1.5rem',
				'text-align': 'center'
			}
		}
	},
	{
		type: 'text',
		value: 'Here we go with some text',
		options: {
			styles: {
				padding: '1rem',
				color: '#777'
			}
		}
	},
	{
		type: 'columns',
		value: [
			'Приложение на чистом JavaScript',
			'Принципы SOLID и ООП в JavaScript в одном курсе',
			'JavaScript - это очень интересно'
		],
		options: {
			styles: {
				padding: '1rem',
				'font-weight': 'bold',
			}
		}
	},
	{
		type: 'image',
		value: image,
		options: {
			styles: {
				display: 'flex',
				'justify-content': 'center',
				padding: '1rem'
			},
			stylesImg: {
				border: '2px solid #ccc'
			},
			alt: 'Картинка'
		}
	},
];