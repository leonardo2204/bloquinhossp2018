import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'

import styles from './Styles/ErrorCardStyle'

export default class ErrorCard extends React.Component {

    render() {
        return <View style={styles.errorContainer}>
            <TouchableOpacity activeOpacity={.8} onPress={() => this.props.onPress()}>
                <Card wrapperStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Ocorreu um erro</Text>
                    <Text style={styles.errorRetryText}>Tente Novamente</Text>
                </Card>
            </TouchableOpacity>
        </View>
    }
}