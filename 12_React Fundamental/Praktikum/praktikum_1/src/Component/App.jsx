import React from "react";
import ToDoApp from "./ToDoApp";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        task: [
          {
            id: "1",
            title: "Bersiap ke kampus",
            comppleted: true,
          },
          {
            id: "2",
            title: "Sarapan pagi",
            comppleted: true,
          },
          {
            id: "3",
            title: "Menyalakan kendaraan",
            comppleted: true,
          },
          {
            id: "1",
            title: "Bersiap ke kampus",
            comppleted: true,
          }
        ],
        isShow: true
      };
    }
    componentDidMount() {
        this.setState({
          title: "Update"
        });
      }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state.title);
      }
    
    handleChangeFontStyle(index) {
        const updatedTask = [...this.state.task];
        updatedTask[index].isRemove = !updatedTask[index].isRemove;
        this.setState({
          task: updatedTask
        });
      }
    
      render() {
        console.log(this.state.task)
        return (
          <div>
            {
              this.state.task.map((num, idx) => {
                return <ToDoApp key={idx}
                             handleChangeFontStyle={() => this.handleChangeFontStyle(idx)}
                             isRemove={num.isRemove}
                             title={num.title}/>;
              })
            }
          </div>
        );
      }
  }
  
  export default App;