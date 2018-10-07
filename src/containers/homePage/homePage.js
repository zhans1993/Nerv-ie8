/**
 * Created by miaoxinyu on 2017/5/18.
 */
/**
 * Created by miaoxinyu on 2017/5/18.
 */
import Nerv from 'nervjs';
import "./homePage.less";

export default class homePage extends Nerv.Component {
  render() {
    return (
      <div id="homePage-body">
        <img id="homePage-img" src={require("./images/home1.png")} />
      </div>
    );
  }
}
