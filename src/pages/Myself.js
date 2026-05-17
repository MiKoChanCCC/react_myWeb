import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Myself = () => {
    return (
        <Layout headerStyle2={true}>
            <div className="bg-banner">
                <img src="/images/banner1.jpg" alt="站长二创" />
                <h3>站长二创</h3>
            </div>

            <div className="route">
                <div className="container">
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/myself">站长二创</Link></li>
                    </ul>
                </div>
            </div>

            <div className="page-photo">
                <div className="container">
                    <div className="index-title center">
                        <font color="pink" className="fontSize">VOCALOID&nbsp;&&nbsp;YOASOBI</font>
                    </div>

                    <div className="item-all">
                        <div className="style3s">
                            <CreationItem href="https://www.douyin.com/user/self?modal_id=7368094689917963546" img="/images/myYorunikakeru.jpg" layer="VOCALOID 夜に駆ける by:MiKoChan" />
                            <CreationItem href="https://www.douyin.com/user/self?modal_id=7347954196307529010" img="/images/myGunjo2.jpg" layer="VOCALOID 群青 by:MiKoChan" />
                            <CreationItem href="https://www.douyin.com/user/self?modal_id=7347732593346874650" img="/images/myUchihanabi.jpg" layer="VOCALOID 打上花火 by:MiKoChan" />
                        </div>
                        <div className="style3s">
                            <CreationItem href="https://www.douyin.com/user/self?modal_id=7365166492016495910" img="/images/myAidoruLive.png" layer="杭州闪千手 《アイドル》　YOASOBI" />
                            <CreationItem href="https://www.douyin.com/user/self?modal_id=7365169294352665865" img="/images/myGunjoLive.png" layer="杭州闪千手 《群青》　YOASOBI" />
                            <CreationItem href="https://www.bilibili.com/video/BV1JR4y1u7nL" img="/images/myKaibutsuRing.jpg" layer="《怪物》 iPhone来电音 by：MiKoChan" />
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className="index-title center">
                        <font color="#00CCCC" className="fontSize">STC&nbsp;&&nbsp;GarageBand</font>
                    </div>
                    <div className="item-all">
                        <div className="style3s">
                            <CreationItem href="https://www.bilibili.com/video/BV1eH4y1S7f4" img="/images/myHananibourei.jpg" layer="STC 花に亡霊 by:MiKoChan" />
                            <CreationItem href="https://www.bilibili.com/video/BV1tM4m1r7Up" img="/images/myQilixiang.jpg" layer="库乐队 《七里香》编曲 by：MiKoChan" />
                            <CreationItem href="https://www.bilibili.com/video/BV1gK4y1F7Lv" img="/images/myDanche.jpg" layer="STC 《单车》 by:MiKoChan" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const CreationItem = ({ href, img, layer }) => (
    <div className="img">
        <a href={href} target="_blank" rel="noreferrer">
            <img src={img} alt={layer} />
            <div className="layer">{layer}</div>
        </a>
    </div>
);

export default Myself;
