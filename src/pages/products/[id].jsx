import { useRouter } from 'next/router'
import React from 'react'

function DetailProduct() {
    const {query} = useRouter()

  return (
    <div>
        <h1>Detail Product</h1>
        <p>Product: {query.id}</p>
    </div>
  )
}

export default DetailProduct