import {Component} from 'react';

class TaskAddInput extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onInputEnter = this.onInputEnter.bind(this);
    }

    onInputEnter(event: any) {
        if (event.key === 'Enter') {
            this.props.onInputEnter(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div className="input-wrapper">
                <div>
                    + Добавить новую задачу
                </div>
                <textarea
                    placeholder="Опишите задачу"
                    className="task-input"
                    onKeyPress={this.onInputEnter}
                />
            </div>
        );
    }
}

export default TaskAddInput;