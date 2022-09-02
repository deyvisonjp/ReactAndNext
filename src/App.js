import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título',
        body: 'O Corpo'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O Corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O Corpo 3'
      },
    ]
  };

  timeoutUpdate = null;

  //É invocado imediatamente após um componente ser montado
  componentDidMount() {
   this.handleTimeout();
  }

  //É invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.
  //Excelente para checar se ocorreu alguma mudança logo de cara no estado da aplicação.
  componentDidUpdate() {
    clearTimeout(this.timeoutUpdate)
    this.handleTimeout();
  }

  //É invocado imediatamente antes que um componente seja desmontado e destruído
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const {posts, counter} = this.state;
    posts[0].title = 'O Título Mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts , counter: counter + 1})
    }, 1000);
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h2>{counter}</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h1> { post.title } </h1>
            <p> {post.body} </p>
          </div>
        )
      )}
      </div>
    );
  }

}
export default App;
