import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <Layout headerStyle2={true}>
            <div className="bg-banner">
                <img src="/images/photo.jpg" alt="相关活动" />
                <h3>相关活动</h3>
            </div>

            <div className="route">
                <div className="container">
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/news">相关活动</Link></li>
                    </ul>
                </div>
            </div>

            <div className="page-hobby">
                <div className="container">
                    <div className="index-title center">
                        <font color="aqua" className="fontSize">THE FIRST TAKE&nbsp;</font>
                        <font color="red" className="fontSize">(YouTube)</font>
                    </div>
                    <div className="index-bottom">
                        <font className="fontSize2">截止2024年5月22日</font>
                    </div>
                    <div className="item-all">
                        <ActivityItem 
                            href="https://www.youtube.com/watch?v=NyUTYwZe_l4" 
                            img="/images/photo.jpg" 
                            title="THE FIRST TAKE --群青（YOASOBI）"
                            desc="在第96届中，在“THE HOME TAKE”中表演“夜に駆ける”而成为热门话题的YOASOBI首次与ayase和ikura一起亮相。这一次，受人气漫画《蓝色时期》（山口翼编剧）的启发，她将首次演唱“アルフォートミニチョコレート”电视广告中熟悉的流行歌曲“群青”。"
                        />
                        <ActivityItem 
                            href="https://www.youtube.com/watch?v=EaA6NlH80wg" 
                            img="/images/photo3.jpg" 
                            title="THE FIRST TAKE --優しい彗星（YOASOBI）"
                            desc="在第 99 期中，来自 YOASOBI 的主唱 ikura 出现了。这次要演唱的歌曲是《温柔的彗星》，这是电视动画《动物狂想曲》第二季的片尾主题。"
                        />
                        <ActivityItem 
                            href="https://www.youtube.com/watch?v=j1hft9Wjq9U" 
                            img="/images/photo2.jpg" 
                            title="THE FIRST TAKE --夜に駆ける（YOASOBI）"
                            desc="YOASOBI是一个刚刚发行了新歌“ハルジオン”的“将小说化为音乐”企划现在已经发布。以年轻一代为主成为热门话题。"
                        />
                        <ActivityItem 
                            href="https://www.youtube.com/watch?v=BPTL0aawmXM" 
                            img="/images/photo4.jpg" 
                            title="THE FIRST TAKE --青春謳歌（ikura feat. ano）"
                            desc="第437回は、映画『デッドデッドデーモンズデデデデデストラクション』で主演声優を務める幾田りらとanoが再登場。"
                        />
                        <ActivityItem 
                            href="https://www.youtube.com/watch?v=x90-vUMKdx0" 
                            img="/images/photo5.jpg" 
                            title="THE FIRST TAKE --レンズ（ikura）"
                            desc="第221回は、シンガーソングライターでありYOASOBIのボーカルikuraとしても活跃する几田りらが登场。"
                        />
                        <ActivityItem 
                            href="https://www.youtube.com/watch?v=Z2Z9V-4DMGw" 
                            img="/images/photo6.jpg" 
                            title="THE FIRST TAKE --おもかげ（ikura × Milet × Aimer）"
                            desc="第178回は、発表の際に話題になったTHE FIRST TAKE MUSICのアーティストコラボレーション milet×Aimer×幾田りらが登場。"
                        />
                    </div>
                </div>
            </div>

            <div className="page-photo" style={{ marginTop: '-5rem' }}>
                <div className="index-title center">
                    <font color="blue" className="fontSize">其他介绍&nbsp;</font>
                    <font color="red" className="fontSize">(YouTube)</font>
                </div>
                <div className="item-all">
                    <div className="style2s">
                        <div className="img">
                            <a href="https://www.youtube.com/watch?v=TzuhsQUhypM&t=204s" target="_blank" rel="noreferrer">
                                <img src="/images/shokai3.jpg" alt="THE FIRST TAKE介绍" />
                                <div className="layer">「THE FIRST TAKE」到底是何方神聖？背後金主是誰、真的只給歌手一次機會嗎？解密日樂超強企劃｜Kazbom網路調查局</div>
                            </a>
                        </div>
                        <div className="img">
                            <a href="https://www.youtube.com/watch?v=zlHnk-jJcow" target="_blank" rel="noreferrer">
                                <img src="/images/shokai1.jpg" alt="双人介绍" />
                                <div className="layer">【YOASOBI】日本近年來最奇蹟音樂組合，成功全靠「這個企劃」！？在成名之前，兩人究竟經歷多崎嶇的音樂之路？｜OMIO_BEN</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const ActivityItem = ({ href, img, title, desc }) => (
    <a href={href} target="_blank" rel="noreferrer">
        <img src={img} alt={title} />
        <div className="layer">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
        </div>
    </a>
);

export default News;
