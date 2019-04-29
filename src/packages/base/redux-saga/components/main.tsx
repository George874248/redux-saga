import * as React from 'react';

import { connect } from 'react-redux';

import { removeCount, addCount } from '../actions/index';

interface Props {
    name: string,
    count: number,
    add: () => void,
    remove: () => void,
}

const mapStateToProps = (state: number, ownProps: Partial<Props>) => ({
    count: state
  })
  
  const mapDispatchToProps = (dispatch: any, ownProps: Partial<Props>) => ({
    remove: () => dispatch(removeCount()),
    add: () => dispatch(addCount()),
  })

class Main extends React.Component<Props, any> {
    public render(): JSX.Element {
        return <div>
            <div>{this.props.name}</div>
            <div>{this.props.count}</div>
            <button onClick={this.props.add}>add</button>
            <button onClick={this.props.remove}>remove</button>
        </div>;
    }
}

// export default Main;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);