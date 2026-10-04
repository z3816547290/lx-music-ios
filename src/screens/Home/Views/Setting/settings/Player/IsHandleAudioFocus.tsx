import { updateSetting } from '@/core/common'
import { useI18n } from '@/lang'
import { createStyle, toast } from '@/utils/tools'
import { memo } from 'react'
import { Platform, View } from 'react-native'
import { useSettingValue } from '@/store/setting/hook'


import CheckBoxItem from '../../components/CheckBoxItem'

export default memo(() => {
  const t = useI18n()
  const isHandleAudioFocus = useSettingValue('player.isHandleAudioFocus')
  const setHandleAudioFocus = (isHandleAudioFocus: boolean) => {
    updateSetting({ 'player.isHandleAudioFocus': isHandleAudioFocus })
    toast(t('setting_play_handle_audio_focus_tip'))
  }

  return (
    <View style={styles.content}>
      <CheckBoxItem
        check={isHandleAudioFocus}
        onChange={setHandleAudioFocus}
        // iOS 是通过音频会话类别实现的，关闭后会牺牲锁屏/控制中心，需明确告知
        helpDesc={Platform.OS == 'ios' ? t('setting_play_handle_audio_focus_desc_ios') : undefined}
        label={t('setting_play_handle_audio_focus')}
      />
    </View>
  )
})


const styles = createStyle({
  content: {
    marginTop: 5,
  },
})

