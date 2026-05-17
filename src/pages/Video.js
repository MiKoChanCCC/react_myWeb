import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <Layout headerStyle2={true}>
            <div className="bg-banner">
                <img src="/images/banner1.jpg" alt="官方视频" />
                <h3>官方视频</h3>
            </div>

            <div className="route">
                <div className="container">
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/video">官方视频</Link></li>
                    </ul>
                </div>
            </div>

            <div className="page-photo">
                <div className="container">
                    <div className="index-title center">
                        <font color="red" className="fontSize">部分官方MV</font>
                    </div>

                    <div className="item-all">
                        <div className="style3s">
                            <VideoItem href="https://www.bilibili.com/video/BV17h411u7sb" img="/images/aidoru.jpg" layer="YOASOBI「アイドル」 Official Music Video" />
                            <VideoItem href="https://www.bilibili.com/video/BV1h24y1R7MN" img="/images/shukuhuku.jpg" layer="YOASOBI「祝福」Official Music Video" />
                            <VideoItem href="https://www.bilibili.com/video/BV1Ph411C7S5" img="/images/yorunikakeru.jpg" layer="YOASOBI「夜に駆ける」 Official Music Video" />
                        </div>
                        <div className="style3s">
                            <VideoItem href="https://www.bilibili.com/video/BV1DT411z7gc" img="/images/uminomanimani.jpg" layer="YOASOBI 海のまにまに Official Music Video" />
                            <VideoItem href="https://www.bilibili.com/video/BV1Yr4y1P73q" img="/images/gunjo.jpg" layer="YOASOBI 群青 Official Music Video" />
                            <VideoItem href="https://www.bilibili.com/video/BV1r34y1c7ju" img="/images/biribiri.jpg" layer="YOASOBI「Biri-Biri」Official Music Video" />
                        </div>
                        <div className="style3s">
                            <VideoItem href="https://www.bilibili.com/video/BV1Wr4y1P7g7" img="/images/anoyumewonazotte.jpg" layer="YOASOBI あの夢をなぞって Official Music Video" />
                            <VideoItem href="https://www.bilibili.com/video/BV1bV411B7uK" img="/images/kaibutsu.jpg" layer="YOASOBI「怪物」Official Music Video" />
                            <VideoItem href="https://www.bilibili.com/video/BV1Qz4y1m7it" img="/images/ankoru.jpg" layer="YOASOBI アンコール Official Music Video" />
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className="index-title center">
                        <font color="blue">官方Live（部分为<font color="red">YouTube</font>）</font>
                    </div>
                    <div className="item-all">
                        <div className="style3s">
                            <VideoItem href="https://www.bilibili.com/video/BV1xN4y1B7DB" img="/images/aidorulive.jpg" layer="YOASOBI「アイドル(Idol)」from 香港 Clockenflap" />
                            <VideoItem href="https://www.youtube.com/watch?v=wPNCj5AfHWY" img="/images/shukuhukulive.jpg" layer="YOASOBI「祝福」 from TBS系 @GUNDAM FACTORY YOKOHAMA" />
                            <VideoItem href="https://www.bilibili.com/video/BV1Ps421K7b6" img="/images/gunjolive.jpg" layer="YOASOBI「群青」 from LIVE IN SEOUL KOREA" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const VideoItem = ({ href, img, layer }) => (
    <div className="img">
        <a href={href} target="_blank" rel="noreferrer">
            <img src={img} alt={layer} />
            <div className="layer">{layer}</div>
        </a>
    </div>
);

export default Video;
