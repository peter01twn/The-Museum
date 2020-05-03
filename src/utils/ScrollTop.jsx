import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用捲軸讓頁面回到最上方
const ScrollToTop = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.location])

  return props.children
}

export default withRouter(ScrollToTop)
