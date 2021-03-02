import {row, col, css} from './utils'

function title(block) {
    const {tag = 'h1', styles} = block.options;
    // const tag = block.options.tag ?? 'h1';
    // const styles= block.options.styles;
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function text(block) {
    const styles = block.options.styles;
    return row(col(`<p>${block.value}</p>`), css(styles));
}

function columns(block) {
    const styles = block.options.styles;
    const html = block.value.map(col).join('');
    return row(html, css(styles));
}

function image(block) {
    const {styles, alt = '', stylesImg: imgCss} = block.options
    return row(`<img src="${block.value}" alt="${alt}" style = "${css(imgCss)}">`, css(styles));
}

export const templates = {
    title,
    text,
    columns,
    image
};
