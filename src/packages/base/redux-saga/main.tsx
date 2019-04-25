import * as React from 'react';

interface Props {
    name: string
}

class Main extends React.Component<Props, any> {
    public render(): JSX.Element {
        return <div>{this.props.name}</div>;
    }
}

export default Main;