import styled from 'styled-components';

export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft=styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625x;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight=styled.div`
    width:280px;
    float:right;
    padding-top:30px;
`;

export const TopicWrapper=styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
`;

export const TopicItem=styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;

export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #ddd;
    overflow:hidden;
    width:625px;
    box-sizing:border-box;
    .pic{
        float:right;
        width:150px;
        height:100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`;

export const ListInfo=styled.div`
    width:470px;
    float:left;
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        color: #333;
    }
    .abstract{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper=styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    width:280px;
`;

export const RecommendItem=styled.div`
    width:280px;
    img{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        vertical-align: middle;
    }
`;

export const WriterRecommand=styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    .title{
        text-align: left;
        span{
            font-size: 14px;
            color: #969696;
        }
        .page-change{
            float: right;
            display: inline-block;
            font-size: 14px;
            color: #969696;
            cursor:pointer;
            .spin{
                display:block;
                float:left;
                font-size:12px;
                margin-right:2px;
                transition: all .2s ease-in;
                transform-origin:center center;
            }
        }
    }
`;

export const WriterWrapper=styled.ul`
    width:100%;
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
`;

export const WriterItem=styled.li`
    margin-top: 15px;
    line-height: 20px;
    box-sizing: border-box;
    .avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`;

export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    text-align:center;
    cursor:pointer;
`;

export const BackTop=styled.div`
    position:fixed;
    bottom:50px;
    right:40px;
    cursor:pointer;
    width: 50px;
    height: 50px;
    line-height:50px;
    text-align: center;
    display: block;
    border: 1px solid #dcdcdc;
`;