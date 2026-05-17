import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <h1>YOASOBI</h1>
                        <h2>ayase&nbsp;&&nbsp;ikura</h2>
                    </Link>
                </div>

                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/news">相关活动</Link></li>
                    <li><Link to="/myself">站长二创</Link></li>
                    <li><Link to="/video">官方视频</Link></li>
                    <li><Link to="/preview">预览视频</Link></li>
                </ul>

                <div className="contact">
                    <i className="iconfont icon-youjian fontSize-footer">1607250879@qq.com&nbsp;|&nbsp;赣ICP备2024035381号-1</i>
                </div>

                <div className="cop fontSize-footer">
                    by：MiKoChan 2026/5/11 (*╹▽╹*)
                </div>
            </div>
        </div>
    );
};

export default Footer;
