import React from 'react';
import TaskList from './components/TaskList';
import TaskAddInput from './components/TaskAddInput';
import './styles/index.scss';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [
                'Съесть штрудель',
                'Пробежать вдоль набережной',
                'Написать книгу',
            ]
        }
    }

    componentDidMount() {
        console.log(this);
    }

    addTask(newTask: string): void {
        this.setState((state: any) => ({
            tasks: this.state.tasks.concat([newTask])
            })
        )
    }

    deleteTask(taskIndex: number): void {
        this.setState((state: any) => ({
                tasks: this.state.tasks.concat([taskIndex])
            })
        )
    }

    render() {
        return (
            <div className="App">
                <main className="app-wrapper" >
                    <div className="app-title">
                        <h1 className="app-title__text">Список задач: </h1>
                    </div>
                    <TaskList tasks={this.state.tasks}/>
                    <TaskAddInput onInputEnter={this.addTask.bind(this)}/>
                </main>
            </div>
        );
    }
}

export default App;
