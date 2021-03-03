import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from "./classes/blocks";
import image from './assets/image.png';

export const model = [
	new TitleBlock('Конструктор сайтов JS', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #699fc9, #18466b)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center'
		}
	}),
	new TextBlock('Here we go with some text', {
		styles: {
			padding: '1rem',
			color: '#777'
		}
	}),
	new ColumnsBlock([
		'Приложение на чистом JavaScript',
		'Принципы SOLID и ООП в JavaScript в одном курсе',
		'JavaScript - это очень интересно'
	], {
		styles: {
			padding: '1rem',
			'font-weight': 'bold',
		}
	}),
	new ImageBlock(image, {
		styles: {
			display: 'flex',
			'justify-content': 'center',
			padding: '1rem'
		},
		stylesImg: {
			border: '2px solid #ccc'
		},
		alt: 'Картинка'
	})
];