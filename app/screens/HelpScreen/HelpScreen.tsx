import React, { useState } from 'react'
import { View, ViewStyle } from 'react-native'
import { color } from '../../theme'
import HelpItems from '../../components/HelpScreen/HelpItems/HelpItems'
import Search from '../../components/HelpScreen/Search/Search'
import { createFilter } from 'react-native-search-filter'

// https://github.com/mjsolidarios/react-native-search-filter

// STYLES
const CONTAINER: ViewStyle = {
  flexDirection: 'column',
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: 0,
  alignSelf: 'stretch',
  backgroundColor: color.white,
  borderBottomWidth: 1,
  borderColor: color.backGrey
}

// DATA
const SECTIONS = [
  {
    title:
      'Могут ли грузчики переместить мебель на 8-й этаж, если лифт сломался?',
    content:
      'Наши грузчики, бесспорно, способны поднять мебель на 8-й этаж своими силами. Но вам нужно учитывать, что перенос вещей по лестнице займет гораздо больше времени, чем подъем на лифте. Таким образом, при почасовой оплате подъем грузов по лестнице «на руках» обойдется вам дороже, чем та же услуга при работающем лифте. '
  },
  {
    title:
      'Если в договоре об оказании услуг по складским работам указана фиксированная стоимость. Может ли эта сумма измениться, в каком случае?',
    content:
      'Обычно, перед заключением договора проводится выезд оценщика, который должен тщательно просчитать стоимость работ. Но если выезда не было или заказчик предоставил не всю необходимую информацию, то может взиматься дополнительная оплата. Но такие случаи бывают редко. '
  },
  {
    title: 'Мне нужны грузчики срочно, как быстро они могут приехать?',
    content:
      'Наши грузчики ездят на общественном транспорте. Если ваш заказ за городом, вы всегда можете забрать их от остановки. Парни готовы выезжать сразу после вашего звонка и приезжают практически в любую точку города в течение часа. Но все таки рекомендуем обращаться заранее. '
  },
  {
    title: 'Можно ли заказать грузчика на пол часа?',
    content:
      'Вы можете заказать грузчика на пол часа, но обращаем ваше внимание, что минимальная оплата за 1 час. Это значит что независимо от того заказали вы грузчика на 5 минут или на час — вы оплачиваете заказ в любом случае как за час. '
  },
  {
    title:
      'Есть ли гарантии, что грузчики и разнорабочие дисциплинированные, не будут злоупотреблять алкоголем, перекурами?',
    content:
      'Существует целая система штрафных санкций. Гарантий, что проблем не будет, не дает никто. Опыт оказания услуг аутсорсинга складских работ позволяет уже на этапе собеседования отобрать более благонадежных людей, которые не нарушали трудовую дисциплину на предыдущих объектах. '
  },
  {
    title: 'С какого момента начинается отсчет времени у грузчиков?',
    content:
      'Отсчет времени начинается с того момента, когда грузчики приступили к работе. Дорога/переезд до места работы не оплачивается. '
  },
  {
    title:
      'При почасовой оплате грузчики могут специально затягивать время, что делать в таком случае?',
    content:
      'Обычно на компаниях с услугой аутсорсинг весь персонал получает фиксированную ставку, и выгоды от затягивания времени у них никакой. Поэтому нужно нанимать рабочих только в известных фирмах, что контролируют сроки и качество исполнения работ. Как это работает у нас: сметчик заранее фиксирует временную норму на выполнение работ, в случае если персонал затянет работу по субъективным причинам, в таком случае не получат ту за протянутое время. '
  },
  {
    title:
      'При подготовке к переезду трудно самостоятельно определить оптимальный тип транспорта и количество грузчиков. Что делать в таком случае?',
    content:
      'Необходимо позвонить в компанию и рассказать всю информацию о габаритах мебели, количестве единиц бытовой техники, наличии лифта. Диспетчер определит все необходимые условия и укажет вам приблизительную сумму. '
  },
  {
    title:
      'Есть ли необходимость при переезде самому заниматься упаковкой личных вещей, мебели, техники? Какие упаковочные материалы необходимы?',
    content:
      'Грузчики самостоятельно упаковывают все вещи, но соответственно за отдельную плату. Конечно, лучше воспользоваться услугами профессионалов, которые имеют огромный опыт по упаковке вещей и сделают это качественно, чтобы ничто не повредилось и не поломалось при перевозке. '
  }
]

const FILTER_KEYS = ['title', 'content']

// COMPONENT
const HelpScreen = () => {
  const [value, setValue] = useState('')
  const [isFocus, setFocus] = useState(false)
  const filtered = SECTIONS.filter(createFilter(value, FILTER_KEYS))

  return (
    <View style={CONTAINER}>
      <Search setValue={setValue} value={value} setFocus={setFocus} />
      <HelpItems sections={filtered} isFocus={isFocus} value={value} />
    </View>
  )
}

export default HelpScreen
