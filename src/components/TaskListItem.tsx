import React from "react";
import { Task, nextActions } from "../values/Task";
import classnames from 'classnames';

export class TaskListItem extends React.Component<Task & {onAction: Function}> {
    render() {
      let { status, title } = this.props;
      let actions: string[] = [];
      let done = status === 'finished';
      if (!done) { //status !== 'finished') {
        actions = nextActions(status);
      }
      return <div className={classnames('Task', done && 'Task--done')}>
            <div className='Task-headline'>
                <div className='Task-details'>
                    <div className='Task-title'>{title}</div>
                    {/* <div className='Task-tags'>#tag #goes #here</div> */}
                </div>
                <div className='Task-actions'>
                    {actions.map(action => <button
                        key={action}
                        className={`Task-action Task-action--${action}`}
                        onClick={() => this.props.onAction(action)}
                    >
                        {action}
                    </button>
                    )}
                </div>
            </div>
            {/* <div className='Task-body'>
                <p>This is a task. It has lots of text. Lorem ipsum sit dolor amet...</p>
          </div> */}
        </div>;
    }
}