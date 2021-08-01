import { RecoilRoot } from "recoil";
import { TodoAdd, TodoList } from "./components"

export const App = () => {
  return (
    <RecoilRoot>
      <div className="container">
      <br/>
        <h1> Todos</h1>
        <br/>
        <TodoAdd />
        <TodoList />
      </div>
    </RecoilRoot>

  );
}

export default App;
