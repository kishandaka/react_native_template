import {View, Text} from 'react-native'
import React from 'react'
import {useColor} from '@/hooks'
import {myStyles} from './AppAuthentication.style'
import AppLoader from '../AppLoader/AppLoader'

const AppAuthentication = ({children}: {children: React.ReactNode}) => {
  const colors = useColor()
  const styles = myStyles(colors)
  return (
    <View style={styles.container}>
      {children}
      <AppLoader />
    </View>
  )
}

export default AppAuthentication
