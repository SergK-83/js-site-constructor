import image from './assets/image.png';

export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов JS',
        options: {
            tag: 'h2'
        }
    },
    {type: 'text', value: 'Here we go with some text'},
    {
        type: 'columns', value: [
            '111',
            '222',
            '333'
        ]
    },
    {type: 'image', value: image},
];