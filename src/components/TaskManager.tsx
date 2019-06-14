import { Task, statusFromAction, Action } from '../values/Task';
import { TaskListItem } from './TaskListItem';
import React from 'react';
import converter from 'number-to-words';

let n = 1000;
const inc = () => n = n + 1
const gen = () => inc() && n

const seed: Task[] = [
  { id: gen(), title: 'Mow the Lawn', status: 'ready' },
  { id: gen(), title: 'Feed the Cat', status: 'started' },
  { id: gen(), title: 'Watch a Movie', status: 'delivered' },
  { id: gen(), title: 'Take a Walk', status: 'finished' },
  { id: gen(), title: 'See the Sights', status: 'ready' },
  { id: gen(), title: 'Visit the World', status: 'ready' },
  { id: gen(), title: 'Take a Break', status: 'finished' },
  { id: gen(), title: 'Pick up Sticks', status: 'delivered' },
  { id: gen(), title: 'Lay it Down', status: 'ready' },
  { id: gen(), title: 'Put them Up', status: 'completed' },
];

type State = { tasks: Task[], newTask: string }
export class TaskManager extends React.Component<{}, State> {
  state = { tasks: seed, newTask: '' }

  handleAction = (id: number, intent: Action) => {
    let { tasks } = this.state;
    let theTask = tasks.find(task => task.id === id)
    if (theTask) {
      theTask.status = statusFromAction(intent);
      this.setState({ tasks })
    }
  }

  handleCreateTask = () => {
      let { tasks, newTask } = this.state
      tasks.push({
          id: gen(),
          title: newTask,
          status: 'ready'
      })
      this.setState({ tasks })
  }

  render() {
      let { tasks } = this.state;
        return <>
            <section className="App-summary">
                You have {converter.toWords(tasks.length)} tasks.
            </section>
            <input type='text' value={this.state.newTask} onChange={(e) => this.setState({ newTask: e.target.value })} />
            <button type='submit' onClick={this.handleCreateTask}>add task</button>
            <br/><br/>
            <div className='TaskList'>
                <div className='TaskList-title'>
                    CURRENT
                </div>
                {this.state.tasks.map(
                    task => <TaskListItem
                        {...task}
                        key={task.id}
                        onAction={(intent: Action) => this.handleAction(task.id, intent)}
                    />
                )}
            </div>
        </>
    }
}

