import React from 'react'
import { responsiveStyle } from 'styled-system'
import { oneOfType, number, string, array, bool } from 'prop-types'
import propTypes from './propTypes'
import styled from './styled'
import withBox from './withBox';

const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
const direction = responsiveStyle('flex-direction', 'direction')
const align = responsiveStyle('align-items', 'align')
const justify = responsiveStyle('justify-content', 'justify')
const column = props => props.column ? {flexDirection: 'column'} : null

const cache = {};

export default base => {
  if (cache[base]) return cache[base];

  const Flex = styled(withBox(base),
    { display: 'flex' },
    wrap,
    column,
    direction,
    align,
    justify,
  )
  Flex.displayName = 'Flex'

  const responsivePropType = oneOfType([
    number,
    string,
    array,
    bool
  ])

  Flex.propTypes = Object.assign({}, propTypes, {
    wrap: responsivePropType,
    direction: responsivePropType,
    align: responsivePropType,
    justify: responsivePropType,
    column: bool
  })

  if (typeof base === 'string') cache[base] = Flex;

  return Flex;
}
