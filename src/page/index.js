import Nerv from 'nervjs';
import './index.css';
import TodoBox from '../component/todoBox/todoBox';
import RootContainer from '../router/route';
class App extends Nerv.Component {
  render() {
    return <RootContainer />;
  }
}

Nerv.render(<App />, document.querySelector('#app'));
