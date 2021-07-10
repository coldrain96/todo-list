import { Component } from 'react';

class TaskList extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    taskListComputed = () => {
        return this.props.tasks.map((task: string, index: number) =>
            <li className={`task-list__item`} key={index}>
                {index + 1}: {task}
                <button> Удалить</button>
            </li>
        );
    }
    render() {
        return(
            <ul className="task-list">{this.taskListComputed()}</ul>
        );
    }
}

export default TaskList;