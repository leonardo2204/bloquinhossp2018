import React, { PureComponent } from 'react'
import { Platform, TouchableOpacity, View } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

defaultProps = {
    navigateBack: false       
}

propTypes = {
    navigateBack: PropTypes.bool
}

export default connect()(class extends PureComponent {
    render() {
        return <Header outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 : 70 - 24 }}
            leftComponent={this.props.navigateBack ? <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View>
                    <Icon name='arrow-back' iconStyle={{ color: 'white' }} />
                </View>
            </TouchableOpacity> : null}
            {...this.props} />
    }
});

