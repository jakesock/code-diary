import 'bootswatch/dist/darkly/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import TextEditor from './components/TextEditor';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
