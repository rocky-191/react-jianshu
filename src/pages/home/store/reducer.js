import {fromJS} from 'immutable'

const defaultState=fromJS({
    topicList:[
        {
            id:'1',
            title:'社会热点'
        },
        {
            id:'2',
            title:'手绘'
        }
    ],
    articleList:[
        {
            id:1,
            title:'自从用了这10个工具，我再也不用因为效率低被老板骂了！',
            desc:'话说最近又因为不能按时完成工作被老板批评了，看着旁边的小伙伴不仅能按时完成工作任务，还能留空玩手机，实在忍不了了！于是在网上深扒各种能够提高工作效率网站，现在分享给大家。',
            img:'https://upload-images.jianshu.io/upload_images/13972777-76e6d10d66119400.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:2,
            title:'自从用了这10个工具，我再也不用因为效率低被老板骂了！',
            desc:'话说最近又因为不能按时完成工作被老板批评了，看着旁边的小伙伴不仅能按时完成工作任务，还能留空玩手机，实在忍不了了！于是在网上深扒各种能够提高工作效率网站，现在分享给大家。',
            img:'https://upload-images.jianshu.io/upload_images/13972777-76e6d10d66119400.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    recommandList:[
        {
            id:1,
            img:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id:2,
            img:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id:3,
            img:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id:4,
            img:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ],
    writerList:[
        {
            id:1,
            imgUrl:'https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name:'格列柯南',
            desc:'写了725.1k字 · 43.3k喜欢'
        },
        {
            id:2,
            imgUrl:'https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name:'梅拾璎',
            desc:'写了267.5k字 · 24.9k喜欢'
        }
    ]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state

    }
}