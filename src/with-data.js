import React from 'react';

const withData = (WrappedComponent) => {
    class WithData extends React.Component {
        state = {
            data : [],
        };
        componentDidMount() {
            fetch(this.props.dataSource)
                .then(response => response.json())
                .then(data => this.setState({data: data.slice(0, 3)}));
        }

        render() {
            const {dataSource, ...otherProps} = this.props
            return(
                this.state.data > 1 ?
                <h1>Loading</h1>
                :
                <WrappedComponent data={this.state.data} {...otherProps} />
            )
        }
    }

    return WithData;
}

export default withData;