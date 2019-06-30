import React, { PureComponent } from 'react';

import {
    DetailWrapper,
    DetailTitle,
    Content
} from './style';

class Detail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <DetailWrapper>
                <DetailTitle>学了这几个CMD指令，以后你就是别人眼中的大神</DetailTitle>
                <Content>熟悉电脑的小伙伴应该会知道有着不少的CMD指令可以让我们在平时更加快捷方便的去对电脑做一些数据上的更改，比如利用CMD指令查找注册表，然后修改一个小小的数据，就可以让你的电脑有一些本不能运行的软件正常运行。今天我们就来教大家一些别人眼中的逼格满满的“大神”级别的操作指令。</Content>
            </DetailWrapper>
        );
    }
}

export default Detail;