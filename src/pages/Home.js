import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
    useEffect(() => {
        // Handle dynamic font size for responsiveness if needed, 
        // though the CSS media queries handle basic cases.
        const handleResize = () => {
            let doc = document.documentElement;
            let docW = doc.clientWidth / 100 + 'px';
            doc.style.fontSize = docW;
        };
        // window.addEventListener('resize', handleResize);
        // handleResize();
        // return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout>
            <div className="banner">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{ delay: 3500 }}
                    speed={800}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    className="mySwiper akiswiper"
                >
                    <SwiperSlide>
                        <div className="box-img">
                            <a href="/#">
                                <img src="/images/banner1.jpg" alt="出道印象画" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box-img">
                            <a href="/#">
                                <img src="/images/banner2.webp" alt="组合成员" />
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box-img">
                            <a href="/#">
                                <img src="/images/banner3.jpg" alt="乐队成员" />
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="index-about">
                <div className="container">
                    <img src="/images/ayase.png" alt="Ayase" />
                    <div className="txt">
                        <div className="index-title">基本信息</div>
                        <div className="user">
                            <ProfileInfo icon="icon-yonghu" name="中文名" desc="绫濑（ayase）" />
                            <ProfileInfo icon="icon-xingbie" name="性别" desc="男" />
                            <ProfileInfo icon="icon-shengri" name="出生日期" desc="1994年4月4日" />
                            <ProfileInfo icon="icon-_xingzuoyuncheng" name="星座" desc="白羊座" />
                        </div>
                        <div className="content">
                            <p>在他16岁那年，乐团的前辈和他说：『如果把自己喜欢的动画角色心情或是对TA的感情写成歌，应该会蛮有趣的。』也就是这种创造灵感，这使不少人听ayase'的歌曲时，都能体会到当中所要表达的情绪，这也为接下来的音乐创作的灵感埋下种子。</p>
                            <p>Ayase受到作为钢琴老师的祖母的影响，从3、4岁时开始学习钢琴，上学之后也由于真心喜爱弹钢琴，便正式参加钢琴班，直到初中仍在演奏钢琴。2018年，首次使用VOCALOID制作并发布《先天性アサルトガール》。</p>
                            <p>2019年4月30日，发布首张个人EP《幽灵东京》在网络上发行，后被索尼音乐旗下小说投稿网站monogatary的制作人邀请并策划“将小说化为音乐”的企企划。</p>
                            <p>有次ayase在浏览ins时，发现ikura的自弹自唱影片，觉得她的声音非常适合作为组合主唱，便向ikura发出邀请---YOASOBI便此成立并以“将小说化为音乐”作为音乐创作主旨。</p>
                            <p>ayase在身为YOASOBI音乐创作人的身份之外，同时也有自己的其他事物处理；主唱ikura在担任主唱的身份之外，同时也是在校大学生，他们在白天都有其他的事情要处理。ayase便将组合取名『YOASOBI（夜遊び）』意为“在晚上玩耍”。</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="index-about">
                <div className="container">
                    <img src="/images/ikura.png" alt="Ikura" />
                    <div className="txt">
                        <div className="index-title">基本信息</div>
                        <div className="user">
                            <ProfileInfo icon="icon-yonghu" name="中文名" desc="几田莉拉（ikura）" />
                            <ProfileInfo icon="icon-xingbie" name="性别" desc="女" />
                            <ProfileInfo icon="icon-shengri" name="出生日期" desc="2000年9月25日" />
                            <ProfileInfo icon="icon-_xingzuoyuncheng" name="星座" desc="天秤座" />
                        </div>
                        <div className="content">
                            <p>ikura的父亲常常在家弹吉他，这使ikura从小便对音乐产生浓厚的兴趣。ikura在小学三至六年级就同姐姐一起在日本YPA音乐剧团上课，初中至高中时参与的社团活动是在管弦乐部吹小号。</p>
                            <p>ikura从小便开始在街边进行弹唱活动，后来参加音乐选拔节目，不断地淘汰没有让她放弃。2016年8月26日，发行首张DEMO专辑《15の想い》。2017年7月，加入原声音乐组合“ぷらそにか”担任主唱、吉他手、小号、键盘手。</p>
                            <p>于2019年与ayase组成音乐组合“YOASOBI”担任主唱。并在同年12月15日发布《夜に駆ける（向夜晚奔去）》，后续发布的歌曲仍受到全球的广泛关注，尤其《アイドル（idol）》更是打破了jpop的多项记录。</p>
                            <p>《夜に駆ける》一经发布便在世界范围内产生剧烈反响,并在次年12月31日参加『红白歌合战会』成为首位出道仅一年登上红白歌会的艺人。截止2023年12月31日，ikura已连续四年登上红白歌的舞台。</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const ProfileInfo = ({ icon, name, desc }) => (
    <div className="once">
        <i className={`iconfont ${icon}`}></i>
        <div className="info">
            <div className="name">{name}</div>
            <div className="desc">{desc}</div>
        </div>
    </div>
);

export default Home;
