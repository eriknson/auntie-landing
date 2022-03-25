import dynamic from 'next/dynamic'
import * as React from 'react'
import { FC } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false })

const Auntie: FC = () => (
  <>
    <Spline scene='https://prod.spline.design/NjlzkQbvvZSWzRhW/scene.spline' />
  </>
)

export default Auntie
