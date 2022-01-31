// 引入样式
import './style/index.less'

import Food from './modules/Food' 
import ScorePanel from './modules/ScorePanel' 
import GameControl from './modules/GameControl' 




const food = new Food();
const scorePanel = new ScorePanel();
const gameControl = new GameControl();

food.change();
scorePanel.addScore();
setInterval(() => {
    console.log(gameControl.direction);
}, 1000);






