import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading(){
      return (
          <div style={{'textAlign':'center'}}>正在加载中...</div>
      )
  }
});

export default ()=><LoadableComponent/>