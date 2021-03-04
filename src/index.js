import {model} from './model';
import {Site} from "./classes/site";
import './styles/main.css';
import {Sidebar} from "./classes/sidebar";

// const $site = document.getElementById('site');

// model.forEach(block => {
// 	$site.insertAdjacentHTML('beforeend', block.toHTML());
// });

const site = new Site('#site');

site.render(model);

const sidebar = new Sidebar('#panel');
