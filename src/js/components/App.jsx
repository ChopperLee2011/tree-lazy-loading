import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import TaskList from './TaskList.jsx';
import TreeNode from './TreeNode.jsx';
import {ListGroup,ListGroupItem} from 'react-bootstrap';

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div className="container">
        <h1>React.js Tree View Loading</h1>
        <br/>

        <div id='treebox'>
          <ListGroup>
            <ListGroupItem><TreeNode /></ListGroupItem>
            <ListGroupItem><TreeNode /></ListGroupItem>
          </ListGroup>
        </div>
        <TaskList tasks={tasks}/>

        <Button onClick={onAddTask} bsStyle="primary">Add New</Button>
        <Button onClick={onClear} bsStyle="danger">Clear List</Button>
      </div>
    );
  }
});
