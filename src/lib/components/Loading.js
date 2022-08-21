import React from 'react'

export const Loading = ({ loading, children }) => {
  return loading ? <div>Loading...</div> : children
}
